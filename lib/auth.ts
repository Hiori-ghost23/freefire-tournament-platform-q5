import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export interface AuthUser {
  userId: number
  email: string
  pseudo: string
}

export async function getAuthUser(): Promise<AuthUser | null> {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("auth-token")?.value

    if (!token) {
      return null
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthUser
    return decoded
  } catch (error) {
    console.error("Erreur auth:", error)
    return null
  }
}

export function isAuthenticated(): Promise<boolean> {
  return getAuthUser().then((user) => !!user)
}
