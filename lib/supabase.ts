import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

// Types pour la base de données
export interface User {
  id: number
  pseudo: string
  email: string
  password_hash: string
  free_fire_id?: string
  email_verified: boolean
  created_at: string
  updated_at: string
}

export interface Tournament {
  id: number
  name: string
  description: string
  tournament_date: string
  tournament_time: string
  format: "Solo" | "Duo" | "Squad"
  entry_fee: number
  prize_pool: number
  max_participants: number
  status: "open" | "full" | "closed" | "completed"
  created_at: string
  updated_at: string
}

export interface Order {
  id: number
  order_number: string
  user_id: number
  order_type: "tournament" | "diamonds"
  tournament_id?: number
  diamond_pack_id?: number
  amount: number
  status: "pending" | "validated" | "rejected" | "completed"
  description: string
  created_at: string
  updated_at: string
}
