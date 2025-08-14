"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, Clock, Flame, Crown, Star, Target, Award, Filter, Search } from "lucide-react"
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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TournamentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const tournaments = [
    {
      id: 1,
      name: "WARZONE LUNDI ELITE",
      date: "2024-01-22",
      time: "20:00",
      format: "Solo",
      entryFee: "5000 CFA",
      prizePool: "50000 CFA",
      participants: 24,
      maxParticipants: 50,
      status: "open",
      difficulty: "Pro",
      featured: true,
    },
    {
      id: 2,
      name: "SQUAD BATTLE ROYALE",
      date: "2024-01-25",
      time: "19:00",
      format: "Squad",
      entryFee: "8000 CFA",
      prizePool: "100000 CFA",
      participants: 12,
      maxParticipants: 20,
      status: "open",
      difficulty: "Elite",
      featured: false,
    },
    {
      id: 3,
      name: "CHAMPIONSHIP FINAL",
      date: "2024-01-28",
      time: "18:00",
      format: "Solo",
      entryFee: "10000 CFA",
      prizePool: "200000 CFA",
      participants: 45,
      maxParticipants: 50,
      status: "filling_fast",
      difficulty: "Legend",
      featured: true,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 font-gaming font-bold">🔥 OUVERT</Badge>
        )
      case "filling_fast":
        return (
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 font-gaming font-bold">
            ⚡ SE REMPLIT VITE
          </Badge>
        )
      case "full":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30 font-gaming font-bold">❌ COMPLET</Badge>
      default:
        return <Badge variant="secondary">Fermé</Badge>
    }
  }

  const getDifficultyBadge = (difficulty: string) => {
    const colors = {
      Pro: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Elite: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Legend: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    }
    return <Badge className={`${colors[difficulty]} font-gaming font-bold`}>{difficulty}</Badge>
  }

  const stats = [
    { label: "Tournois Actifs", value: "12", icon: Trophy, color: "text-yellow-500" },
    { label: "Joueurs Inscrits", value: "2.4K", icon: Users, color: "text-blue-500" },
    { label: "Prize Pool Total", value: "1.2M", icon: Crown, color: "text-purple-500" },
    { label: "Champions Elite", value: "156", icon: Star, color: "text-orange-500" },
  ]

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
              <p className="text-xs light-mode-text font-display">Tournois Elite</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="nav-link light-mode-text">
              Dashboard
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
            <Link href="/dashboard">
              <GamingButton variant="outline" size="sm">
                Mon Profil
              </GamingButton>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <Badge className="badge-gaming mb-6 px-6 py-3 text-lg">
            <Trophy className="w-5 h-5 mr-2" />
            TOURNOIS ÉPIQUES FREE FIRE
          </Badge>

          <h1 className="text-5xl md:text-6xl font-gaming font-black mb-6">
            <span className="gradient-text">DOMINEZ</span>
            <br />
            <span className="gradient-text">LA COMPÉTITION</span>
          </h1>

          <p className="text-xl md:text-2xl light-mode-text max-w-3xl mx-auto font-display leading-relaxed mb-8">
            Participez aux tournois les plus excitants et gagnez des prix incroyables allant jusqu'à 500K FCFA
          </p>

          {/* Stats */}
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
        </div>

        {/* Filters */}
        <GamingCard variant="glass" className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gaming" />
              <Input
                placeholder="Rechercher un tournoi..."
                className="pl-10 h-12 glass border-2 border-gaming/30 focus:border-gaming focus:ring-2 focus:ring-gaming/20 font-display"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full lg:w-48 h-12 glass border-2 border-gaming/30 focus:border-gaming font-display font-semibold">
                <Filter className="w-4 h-4 mr-2 text-gaming" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les Tournois</SelectItem>
                <SelectItem value="open">Ouverts</SelectItem>
                <SelectItem value="filling_fast">Se Remplissent Vite</SelectItem>
                <SelectItem value="featured">Mis en Avant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </GamingCard>

        {/* Tournaments Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament) => (
            <GamingCard key={tournament.id} variant="glass" className="hover-lift relative overflow-hidden">
              {tournament.featured && <div className="absolute top-0 left-0 right-0 h-1 bg-gaming-gradient" />}

              <GamingCardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {tournament.featured && (
                      <div className="w-8 h-8 bg-gaming-gradient rounded-lg flex items-center justify-center">
                        <Crown className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div>
                      <GamingCardTitle className="text-xl leading-tight">{tournament.name}</GamingCardTitle>
                      {getDifficultyBadge(tournament.difficulty)}
                    </div>
                  </div>
                  {getStatusBadge(tournament.status)}
                </div>

                <GamingCardDescription className="flex items-center space-x-4 text-sm font-display font-semibold">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-gaming" />
                    <span>{tournament.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-gaming" />
                    <span>{tournament.time}</span>
                  </span>
                </GamingCardDescription>
              </GamingCardHeader>

              <GamingCardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 glass rounded-xl">
                    <p className="text-sm light-mode-text font-display font-semibold mb-1">Format</p>
                    <p className="font-gaming font-bold gradient-text">{tournament.format}</p>
                  </div>
                  <div className="text-center p-4 glass rounded-xl">
                    <p className="text-sm light-mode-text font-display font-semibold mb-1">Inscription</p>
                    <p className="font-gaming font-bold text-orange-500">{tournament.entryFee}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 glass rounded-xl">
                    <span className="light-mode-text font-display font-semibold">Prize Pool</span>
                    <span className="font-gaming font-black text-green-500 text-xl flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      {tournament.prizePool}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 glass rounded-xl">
                    <span className="light-mode-text font-display font-semibold">Participants</span>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gaming" />
                      <span className="font-gaming font-bold gradient-text">
                        {tournament.participants}/{tournament.maxParticipants}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm light-mode-text font-display">
                      <span>Places Restantes</span>
                      <span>{tournament.maxParticipants - tournament.participants}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gaming-gradient h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(tournament.participants / tournament.maxParticipants) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href={`/tournaments/${tournament.id}`}>
                    <GamingButton className="w-full h-12 font-black shadow-xl group">
                      <Target className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      REJOINDRE LE COMBAT
                    </GamingButton>
                  </Link>
                </div>
              </GamingCardContent>
            </GamingCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <GamingCard variant="gradient" className="text-center p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500" />
            <Crown className="w-20 h-20 mx-auto mb-6 text-white" />
            <h3 className="text-4xl font-gaming font-black text-white mb-4">PRÊT À DEVENIR CHAMPION ?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-display leading-relaxed">
              Rejoignez les tournois les plus épiques et montrez au monde entier vos compétences Free Fire !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register">
                <GamingButton size="xl" className="bg-white text-gray-900 hover:bg-gray-100 shadow-2xl font-black">
                  <Star className="w-6 h-6 mr-2" />
                  CRÉER MON COMPTE ELITE
                </GamingButton>
              </Link>
              <Link href="/shop">
                <GamingButton
                  variant="outline"
                  size="xl"
                  className="border-white text-white hover:bg-white/10 shadow-xl font-black"
                >
                  <Flame className="w-6 h-6 mr-2" />
                  ACHETER DES DIAMANTS
                </GamingButton>
              </Link>
            </div>
          </GamingCard>
        </div>
      </div>
    </div>
  )
}
