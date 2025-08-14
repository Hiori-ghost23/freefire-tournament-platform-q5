import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email et mot de passe sont requis" }, { status: 400 })
    }

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      // Simulation mode with test accounts
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const testAccounts = [
        { email: "admin@ffarena.com", password: "admin123", username: "admin", fullName: "Administrateur" },
        { email: "player@ffarena.com", password: "player123", username: "player1", fullName: "Joueur Test" },
        { email: "test@ffarena.com", password: "test123", username: "testuser", fullName: "Utilisateur Test" },
      ]

      const user = testAccounts.find((account) => account.email === email && account.password === password)

      if (!user) {
        return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
      }

      const token = jwt.sign(
        {
          id: `sim_${user.username}`,
          email: user.email,
          username: user.username,
          fullName: user.fullName,
        },
        process.env.JWT_SECRET || "fallback-secret",
        { expiresIn: "7d" },
      )

      const response = NextResponse.json({
        success: true,
        message: "Connexion réussie (mode simulation)",
        user: {
          id: `sim_${user.username}`,
          email: user.email,
          username: user.username,
          fullName: user.fullName,
        },
      })

      response.cookies.set("auth-token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })

      return response
    }

    // Get user from database
    const { data: user, error } = await supabase.from("users").select("*").eq("email", email).single()

    if (error || !user) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash)

    if (!isValidPassword) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
    }

    // Create JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.full_name,
      },
      process.env.JWT_SECRET || "fallback-secret",
      { expiresIn: "7d" },
    )

    const response = NextResponse.json({
      success: true,
      message: "Connexion réussie",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.full_name,
      },
    })

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 })
  }
}
