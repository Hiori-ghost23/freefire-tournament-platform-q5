import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client-side Supabase client
export const createClientComponentClient = () => {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

// Server-side Supabase client
export const createServerComponentClient = () => {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}

// Database types
export interface User {
  id: string
  email: string
  username: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Tournament {
  id: string
  name: string
  description: string
  game_mode: string
  max_participants: number
  entry_fee: number
  prize_pool: number
  tournament_date: string
  tournament_time: string
  rules: string
  status: "pending" | "approved" | "rejected" | "active" | "completed"
  created_by: string
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  user_id: string
  product_name: string
  product_type: string
  quantity: number
  unit_price: number
  total_price: number
  payment_method: string
  payment_phone?: string
  game_id?: string
  status: "pending" | "processing" | "completed" | "failed" | "cancelled"
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  description: string
  type: "diamonds" | "subscription" | "pass" | "special"
  price: number
  original_price?: number
  discount_percentage?: number
  image_url?: string
  is_popular: boolean
  is_active: boolean
  created_at: string
  updated_at: string
}
