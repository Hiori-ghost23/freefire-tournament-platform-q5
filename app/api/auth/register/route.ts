import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(request: NextRequest) {
  try {
    const { email, username, password, fullName } = await request.json()

    // Validation
    if (!email || !username || !password) {
      return NextResponse.json({ error: "Email, nom d'utilisateur et mot de passe sont requis" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Le mot de passe doit contenir au moins 6 caractères" }, { status: 400 })
    }

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      // Simulation mode
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const token = jwt.sign(
        {
          id: `sim_${Date.now()}`,
          email,
          username,
          fullName: fullName || username,
        },
        process.env.JWT_SECRET || "fallback-secret",
        { expiresIn: "7d" },
      )

      const response = NextResponse.json({
        success: true,
        message: "Compte créé avec succès (mode simulation)",
        user: {
          id: `sim_${Date.now()}`,
          email,
          username,
          fullName: fullName || username,
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

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .or(`email.eq.${email},username.eq.${username}`)
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: "Un utilisateur avec cet email ou nom d'utilisateur existe déjà" },
        { status: 409 },
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const { data: user, error } = await supabase
      .from("users")
      .insert([
        {
          email,
          username,
          password_hash: hashedPassword,
          full_name: fullName || username,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Erreur lors de la création du compte" }, { status: 500 })
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
      message: "Compte créé avec succès",
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
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 })
  }
}
