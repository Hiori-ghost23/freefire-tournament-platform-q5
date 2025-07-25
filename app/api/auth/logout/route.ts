import { NextResponse } from "next/server"

export async function POST() {
  try {
    const response = NextResponse.json({
      success: true,
      message: "Déconnexion réussie",
    })

    // Supprimer le cookie d'authentification
    response.cookies.set("auth-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0, // Expire immédiatement
    })

    return response
  } catch (error) {
    console.error("Erreur déconnexion:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
