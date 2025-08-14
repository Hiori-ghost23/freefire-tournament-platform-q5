import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export interface AuthUser {
  id: string
  email: string
  username: string
  fullName: string
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("auth-token")?.value

    if (!token) {
      return null
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback-secret") as any

    return {
      id: decoded.id,
      email: decoded.email,
      username: decoded.username,
      fullName: decoded.fullName,
    }
  } catch (error) {
    console.error("Auth error:", error)
    return null
  }
}

export function verifyToken(token: string): AuthUser | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback-secret") as any

    return {
      id: decoded.id,
      email: decoded.email,
      username: decoded.username,
      fullName: decoded.fullName,
    }
  } catch (error) {
    return null
  }
}

export function createToken(user: AuthUser): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      fullName: user.fullName,
    },
    process.env.JWT_SECRET || "fallback-secret",
    { expiresIn: "7d" },
  )
}
