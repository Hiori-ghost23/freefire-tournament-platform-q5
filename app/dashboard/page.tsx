"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  User,
  Settings,
  ShoppingCart,
  Clock,
  CheckCircle,
  XCircle,
  Flame,
  Crown,
  Star,
  Gamepad2,
  Target,
  Award,
} from "lucide-react"
import Link from "next/link"
import { GamingButton } from "@/components/ui/gaming-button"
import {
  GamingCard,
  GamingCardContent,
  GamingCardDescription,
  GamingCardHeader,
  GamingCardTitle,
} from "@/components/ui/gaming-card"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function DashboardPage() {
  const [profile, setProfile] = useState({
    pseudo: "ProGamer123",
    email: "progamer@email.com",
    freeFireId: "123456789",
    level: 42,
    xp: 8750,
    nextLevelXp: 10000,
  })

  const [orders] = useState([
    {
      id: "#FF1024",
      type: "Tournoi",
      description: "Inscription Tournoi 'Warzone Lundi'",
      amount: "5000 CFA",
      status: "validated",
      date: "2024-01-15",
    },
    {
      id: "#FF1025",
      type: "Diamants",
      description: "Achat de 520 Diamants",
      amount: "3000 CFA",
      status: "pending",
      date: "2024-01-16",
    },
    {
      id: "#FF1023",
      type: "Tournoi",
      description: "Inscription Tournoi 'Squad Battle'",
      amount: "8000 CFA",
      status: "rejected",
      date: "2024-01-14",
    },
  ])

  const stats = [
    { label: "Tournois Gagnés", value: "12", icon: Trophy, color: "text-yellow-500" },
    { label: "Diamants Achetés", value: "25K", icon: Star, color: "text-blue-500" },
    { label: "Niveau Gaming", value: profile.level, icon: Target, color: "text-purple-500" },
    { label: "Rang Global", value: "#247", icon: Crown, color: "text-orange-500" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "validated":
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            Validée
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
            <Clock className="w-3 h-3 mr-1" />
            En attente
          </Badge>
        )
      case "rejected":
        return (
          <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
            <XCircle className="w-3 h-3 mr-1" />
            Refusée
          </Badge>
        )
      default:
        return <Badge variant="secondary">Inconnue</Badge>
    }
  }

  const xpPercentage = (profile.xp / profile.nextLevelXp) * 100

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse float" />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse float"
        style={{ animationDelay: "1s" }}
      />

      {/* Header */}
      <header className="glass-card mx-4 mt-4 p-4 sticky top-4 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gaming-gradient rounded-xl flex items-center justify-center pulse-glow">
              <Flame className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-gaming font-black gradient-text">FF ARENA</h1>
              <p className="text-xs light-mode-text font-display">Dashboard Elite</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/tournaments" className="nav-link light-mode-text">
              Tournois
            </Link>
            <Link href="/shop" className="nav-link light-mode-text">
              Boutique
            </Link>
            <Link href="/leaderboard" className="nav-link light-mode-text">
              Classement
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <GamingButton variant="outline" size="sm">
              Déconnexion
            </GamingButton>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <GamingCard variant="gradient" className="p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500" />
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-gaming font-black text-white mb-1">Bienvenue, {profile.pseudo} !</h1>
                <p className="text-white/80 font-display text-lg">Niveau {profile.level} • Rang Elite Gaming</p>
              </div>
            </div>

            {/* XP Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-white/80 mb-2">
                <span>XP: {profile.xp.toLocaleString()}</span>
                <span>Prochain niveau: {profile.nextLevelXp.toLocaleString()}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${xpPercentage}%` }}
                />
              </div>
            </div>
          </GamingCard>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <GamingCard key={index} variant="glass" className="text-center hover-lift">
              <GamingCardContent className="p-6">
                <div className="w-16 h-16 bg-gaming-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-gaming font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-sm light-mode-text font-display font-semibold">{stat.label}</div>
              </GamingCardContent>
            </GamingCard>
          ))}
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="glass-card p-2 grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger
              value="profile"
              className="flex items-center space-x-2 font-gaming font-bold data-[state=active]:bg-gaming-gradient data-[state=active]:text-white"
            >
              <User className="w-4 h-4" />
              <span>PROFIL ELITE</span>
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="flex items-center space-x-2 font-gaming font-bold data-[state=active]:bg-gaming-gradient data-[state=active]:text-white"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>MES COMMANDES</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <GamingCard variant="glass" className="hover-lift">
              <GamingCardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gaming-gradient rounded-2xl flex items-center justify-center pulse-glow">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <GamingCardTitle className="text-2xl">CONFIGURATION GAMING</GamingCardTitle>
                    <GamingCardDescription className="light-mode-text text-lg">
                      Gérez vos informations de champion et votre ID Free Fire
                    </GamingCardDescription>
                  </div>
                </div>
              </GamingCardHeader>

              <GamingCardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        value={profile.pseudo}
                        onChange={(e) => setProfile({ ...profile, pseudo: e.target.value })}
                        className="pl-10 h-12 glass border-2 border-gaming/30 focus:border-gaming focus:ring-2 focus:ring-gaming/20 font-display font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-gaming font-bold gradient-text text-sm uppercase tracking-wider"
                    >
                      Email Elite
                    </Label>
                    <div className="relative">
                      <Settings className="absolute left-3 top-3 h-5 w-5 text-gaming" />
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="pl-10 h-12 glass border-2 border-gaming/30 focus:border-gaming focus:ring-2 focus:ring-gaming/20 font-display font-semibold"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="freeFireId"
                    className="font-gaming font-bold gradient-text text-sm uppercase tracking-wider"
                  >
                    ID Free Fire Champion *
                  </Label>
                  <div className="relative">
                    <Gamepad2 className="absolute left-3 top-3 h-5 w-5 text-gaming" />
                    <Input
                      id="freeFireId"
                      placeholder="Votre ID de joueur Free Fire"
                      value={profile.freeFireId}
                      onChange={(e) => setProfile({ ...profile, freeFireId: e.target.value })}
                      className="pl-10 h-12 glass border-2 border-gaming/30 focus:border-gaming focus:ring-2 focus:ring-gaming/20 font-display font-semibold"
                    />
                  </div>
                  <p className="text-sm light-mode-text font-display">
                    🔥 Cet ID est obligatoire pour participer aux tournois et recevoir vos diamants
                  </p>
                </div>

                <GamingButton className="bg-gaming-gradient hover:scale-105 shadow-xl h-12 font-black">
                  <Award className="w-5 h-5 mr-2" />
                  SAUVEGARDER LES MODIFICATIONS
                </GamingButton>
              </GamingCardContent>
            </GamingCard>
          </TabsContent>

          <TabsContent value="orders">
            <GamingCard variant="glass" className="hover-lift">
              <GamingCardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gaming-gradient rounded-2xl flex items-center justify-center pulse-glow">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <GamingCardTitle className="text-2xl">HISTORIQUE GAMING</GamingCardTitle>
                    <GamingCardDescription className="light-mode-text text-lg">
                      Suivez le statut de vos inscriptions aux tournois et achats de diamants
                    </GamingCardDescription>
                  </div>
                </div>
              </GamingCardHeader>

              <GamingCardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <GamingCard key={order.id} variant="glass" className="p-6 hover-lift">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gaming-gradient rounded-xl flex items-center justify-center">
                            {order.type === "Tournoi" ? (
                              <Trophy className="w-6 h-6 text-white" />
                            ) : (
                              <Star className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <div>
                            <span className="font-gaming font-bold gradient-text text-lg">{order.id}</span>
                            <Badge variant="outline" className="ml-2 font-gaming font-bold">
                              {order.type}
                            </Badge>
                          </div>
                        </div>
                        {getStatusBadge(order.status)}
                      </div>

                      <p className="light-mode-text mb-4 font-display text-lg">{order.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm light-mode-text font-display">{order.date}</span>
                        <span className="font-gaming font-black gradient-text text-xl">{order.amount}</span>
                      </div>
                    </GamingCard>
                  ))}
                </div>
              </GamingCardContent>
            </GamingCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
