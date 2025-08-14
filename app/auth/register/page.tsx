"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock, User, Gamepad2, Flame, Crown, Trophy, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GamingButton } from "@/components/ui/gaming-button"
import {
  GamingCard,
  GamingCardContent,
  GamingCardDescription,
  GamingCardHeader,
  GamingCardTitle,
} from "@/components/ui/gaming-card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Badge } from "@/components/ui/badge"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
    freeFireId: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas")
      setLoading(false)
      return
    }

    try {
      // Simulation d'inscription
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirection vers le dashboard
      router.push("/dashboard")
    } catch (error) {
      setError("Erreur lors de l'inscription")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse float" />
      <div
        className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse float"
        style={{ animationDelay: "2s" }}
      />

      {/* Navigation */}
      <div className="absolute top-4 left-4 right-4 z-50">
        <div className="glass-card p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gaming-gradient rounded-xl flex items-center justify-center pulse-glow">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-gaming font-black gradient-text">FF ARENA</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg relative z-10">
        <GamingCard variant="glass" className="hover-lift light-mode-shadow">
          <GamingCardHeader className="text-center pb-2">
            <div className="w-20 h-20 bg-gaming-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 pulse-glow">
              <Crown className="h-10 w-10 text-white" />
            </div>

            <Badge className="badge-gaming mb-4 px-4 py-2">
              <Trophy className="w-4 h-4 mr-2" />
              REJOIGNEZ L'ÉLITE
            </Badge>

            <GamingCardTitle className="text-3xl mb-2">DEVENIR CHAMPION</GamingCardTitle>
            <GamingCardDescription className="light-mode-text text-lg">
              Créez votre compte FF Arena et commencez votre ascension vers le sommet
            </GamingCardDescription>
          </GamingCardHeader>

          <GamingCardContent className="space-y-6">
            {error && (
              <Alert className="border-red-500 bg-red-500/10">
                <AlertDescription className="text-red-600 font-display font-semibold">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="pseudo"
                  className="font-gaming font-bold gradient-text text-sm uppercase tracking-wider"
                >
                  Pseudo Gaming
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gaming" />
                  <Input
                    id="pseudo"
                    type="text"
                    placeholder="VotrePseudo"
                    className="pl-10 h-12 glass border-2 border-gaming/30 focus:border-gaming focus:ring-2 focus:ring-gaming/20 font-display"
                    value={formData.pseudo}
                    onChange={(e) => setFormData({ ...formData, pseudo: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-gaming font-bold gradient-text text-sm uppercase tracking-wider">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gaming" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="pl-10 h-12 glass border-2 border-gaming/30 focus:border-gaming focus:ring-2 focus:ring-gaming/20 font-display"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="freeFireId"
                  className="font-gaming font-bold gradient-text text-sm uppercase tracking-wider"
                >
                  ID Free Fire
                </Label>
                <div className="relative">
                  <Gamepad2 className="absolute left-3 top-3 h-5 w-5 text-gaming" />
                  <Input
                    id="freeFireId"
                    type="text"
                    placeholder="123456789"
                    className="pl-10 h-12 glass border-2 border-gaming/30 focus:border-gaming focus:ring-2 focus:ring-gaming/20 font-display"
                    value={formData.freeFireId}
                    onChange={(e) => setFormData({ ...formData, freeFireId: e.target.value })}
                    required
                  />
                </div>
                <p className="text-xs light-mode-text font-display">
                  Votre ID Free Fire est nécessaire pour participer aux tournois
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="font-gaming font-bold gradient-text text-sm uppercase tracking-wider"
                  >
                    Mot de Passe
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gaming" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10 h-12 glass border-2 border-gaming/30 focus:border-gaming focus:ring-2 focus:ring-gaming/20 font-display"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gaming hover:text-gaming-secondary transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="font-gaming font-bold gradient-text text-sm uppercase tracking-wider"
                  >
                    Confirmer
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gaming" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10 h-12 glass border-2 border-gaming/30 focus:border-gaming focus:ring-2 focus:ring-gaming/20 font-display"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-gaming hover:text-gaming-secondary transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <GamingButton
                type="submit"
                className="w-full h-14 text-lg font-black shadow-2xl"
                loading={loading}
                variant="neon"
              >
                {loading ? "CRÉATION..." : "REJOINDRE L'ÉLITE"}
              </GamingButton>
            </form>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gaming/20" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-background light-mode-text font-display">ou</span>
                </div>
              </div>

              <p className="light-mode-text font-display">
                Déjà membre ?{" "}
                <Link
                  href="/auth/login"
                  className="text-gaming hover:text-gaming-secondary font-bold transition-colors"
                >
                  Connectez-vous !
                </Link>
              </p>
            </div>
          </GamingCardContent>
        </GamingCard>

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <GamingCard variant="glass" className="text-center p-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-sm font-gaming font-bold gradient-text">TOURNOIS ÉPIQUES</p>
            <p className="text-xs light-mode-text font-display">Jusqu'à 500K FCFA</p>
          </GamingCard>

          <GamingCard variant="glass" className="text-center p-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-sm font-gaming font-bold gradient-text">100% SÉCURISÉ</p>
            <p className="text-xs light-mode-text font-display">Plateforme certifiée</p>
          </GamingCard>
        </div>
      </div>
    </div>
  )
}
