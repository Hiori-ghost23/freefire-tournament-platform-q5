import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const { pseudo, email, password, freefireId } = await request.json()

    // Validation des données
    if (!pseudo || !email || !password) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Le mot de passe doit contenir au moins 6 caractères" }, { status: 400 })
    }

    // Vérifier si l'email existe déjà
    const { data: existingUser } = await supabase.from("users").select("id").eq("email", email).single()

    if (existingUser) {
      return NextResponse.json({ error: "Cet email est déjà utilisé" }, { status: 400 })
    }

    // Vérifier si le pseudo existe déjà
    const { data: existingPseudo } = await supabase.from("users").select("id").eq("pseudo", pseudo).single()

    if (existingPseudo) {
      return NextResponse.json({ error: "Ce pseudo est déjà utilisé" }, { status: 400 })
    }

    // Hasher le mot de passe
    const passwordHash = await bcrypt.hash(password, 12)

    // Créer l'utilisateur
    const { data: newUser, error } = await supabase
      .from("users")
      .insert({
        pseudo,
        email,
        password_hash: passwordHash,
        free_fire_id: freefireId || null,
        email_verified: false,
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error("Erreur Supabase:", error)
      return NextResponse.json({ error: "Erreur lors de la création du compte" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Compte créé avec succès !",
      user: {
        id: newUser.id,
        pseudo: newUser.pseudo,
        email: newUser.email,
      },
    })
  } catch (error) {
    console.error("Erreur inscription:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
