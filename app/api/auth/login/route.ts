import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validation des données
    if (!email || !password) {
      return NextResponse.json({ error: "Email et mot de passe requis" }, { status: 400 })
    }

    // Chercher l'utilisateur
    const { data: user, error } = await supabase.from("users").select("*").eq("email", email).single()

    if (error || !user) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
    }

    // Vérifier le mot de passe
    const isValidPassword = await bcrypt.compare(password, user.password_hash)

    if (!isValidPassword) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
    }

    // Créer le token JWT
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        pseudo: user.pseudo,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    )

    // Créer la réponse avec le cookie
    const response = NextResponse.json({
      success: true,
      message: "Connexion réussie !",
      user: {
        id: user.id,
        pseudo: user.pseudo,
        email: user.email,
        freefireId: user.free_fire_id,
      },
    })

    // Définir le cookie
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    })

    return response
  } catch (error) {
    console.error("Erreur connexion:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
