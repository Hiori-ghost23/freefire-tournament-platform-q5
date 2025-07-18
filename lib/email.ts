import nodemailer from "nodemailer"

// Configuration du transporteur email
const createTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn("Configuration SMTP manquante - emails désactivés")
    return null
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
}

export const sendEmail = async ({ to, subject, html }: { to: string; subject: string; html: string }) => {
  const transporter = createTransporter()

  if (!transporter) {
    console.log("Email simulé:", { to, subject })
    return { success: true, message: "Email simulé (SMTP non configuré)" }
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
    })
    return { success: true, message: "Email envoyé avec succès" }
  } catch (error) {
    console.error("Erreur envoi email:", error)
    return { success: false, error: "Erreur lors de l'envoi de l'email" }
  }
}

export const getTournamentApprovedEmailTemplate = (tournamentName: string, username: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #ea580c;">🏆 Tournoi Approuvé !</h2>
      <p>Bonjour ${username},</p>
      <p>Excellente nouvelle ! Votre tournoi <strong>"${tournamentName}"</strong> a été approuvé par notre équipe.</p>
      <p>Il est maintenant visible publiquement et ouvert aux inscriptions.</p>
      <p>Bonne chance pour votre tournoi !</p>
      <hr>
      <p style="color: #666; font-size: 12px;">FF Arena - Plateforme Free Fire</p>
    </div>
  `
}
