"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Trophy,
  Users,
  Zap,
  Star,
  Crown,
  Play,
  Award,
  TrendingUp,
  Shield,
  Target,
  Flame,
  Sparkles,
  ChevronRight,
  Rocket,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { GamingButton } from "@/components/ui/gaming-button"
import {
  GamingCard,
  GamingCardContent,
  GamingCardDescription,
  GamingCardHeader,
  GamingCardTitle,
} from "@/components/ui/gaming-card"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner" />
      </div>
    )
  }

  const features = [
    {
      icon: Trophy,
      title: "Tournois Épiques",
      description: "Participez aux plus grands tournois Free Fire avec des prix allant jusqu'à 500K FCFA",
      color: "text-yellow-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: Zap,
      title: "Diamants Premium",
      description: "Rechargez vos diamants Free Fire instantanément avec Mobile Money",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Plateforme 100% sécurisée avec système anti-triche avancé",
      color: "text-green-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Users,
      title: "Communauté Elite",
      description: "Rejoignez plus de 50,000 joueurs passionnés de Free Fire",
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Target,
      title: "Matchmaking Pro",
      description: "Système de matchmaking équitable basé sur votre niveau",
      color: "text-red-500",
      bgColor: "from-red-500/20 to-rose-500/20",
    },
    {
      icon: Crown,
      title: "Programme VIP",
      description: "Avantages exclusifs et récompenses pour nos membres premium",
      color: "text-indigo-500",
      bgColor: "from-indigo-500/20 to-violet-500/20",
    },
  ]

  const stats = [
    { label: "Joueurs Actifs", value: "50K+", icon: Users, color: "text-blue-500" },
    { label: "Tournois Organisés", value: "1.2K+", icon: Trophy, color: "text-yellow-500" },
    { label: "Diamants Vendus", value: "10M+", icon: Zap, color: "text-purple-500" },
    { label: "Taux de Satisfaction", value: "99.8%", icon: Star, color: "text-green-500" },
  ]

  const testimonials = [
    {
      name: "ProGamer_2024",
      text: "FF Arena a révolutionné ma façon de jouer à Free Fire. Les tournois sont incroyables !",
      rating: 5,
    },
    {
      name: "DiamondKing",
      text: "Livraison instantanée des diamants, service client au top. Je recommande à 100% !",
      rating: 5,
    },
    {
      name: "FireQueen",
      text: "La meilleure plateforme gaming que j'ai jamais utilisée. Interface magnifique !",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-card mx-4 mt-4 p-4 sticky top-4 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gaming-gradient rounded-xl flex items-center justify-center pulse-glow">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-gaming font-black gradient-text">FF ARENA</h1>
              <p className="text-xs text-muted-foreground font-display">Ultimate Gaming Platform</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/tournaments" className="nav-link light-mode-text">
              Tournois
            </Link>
            <Link href="/shop" className="nav-link light-mode-text">
              Boutique
            </Link>
            <Link href="/leaderboard" className="nav-link light-mode-text">
              Classement
            </Link>
            <Link href="/dashboard" className="nav-link light-mode-text">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/auth/login">
              <GamingButton variant="outline" size="sm">
                Connexion
              </GamingButton>
            </Link>
            <Link href="/auth/register">
              <GamingButton size="sm" className="shadow-xl">
                <Sparkles className="w-4 h-4 mr-2" />
                S'inscrire
              </GamingButton>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse float" />
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <Badge className="badge-gaming mb-8 px-6 py-3 text-sm font-bold">
            <Star className="w-4 h-4 mr-2" />
            PLATEFORME N°1 EN AFRIQUE DE L'OUEST
          </Badge>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-gaming font-black mb-8 leading-tight">
            <span className="gradient-text text-reveal">DOMINEZ</span>
            <br />
            <span className="gradient-text text-reveal" style={{ animationDelay: "0.2s" }}>
              FREE FIRE
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl lg:text-3xl light-mode-text mb-12 max-w-4xl mx-auto font-display leading-relaxed text-reveal"
            style={{ animationDelay: "0.4s" }}
          >
            La plateforme gaming ultime qui révolutionne votre expérience Free Fire avec des tournois épiques, des
            diamants premium et une communauté de champions
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 text-reveal"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="/tournaments">
              <GamingButton variant="neon" size="xl" className="group shadow-2xl">
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                REJOINDRE UN TOURNOI
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </GamingButton>
            </Link>
            <Link href="/shop">
              <GamingButton variant="outline" size="xl" className="group shadow-xl">
                <Zap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                ACHETER DES DIAMANTS
              </GamingButton>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-reveal" style={{ animationDelay: "0.8s" }}>
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
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="text-center mb-16">
          <Badge className="badge-gaming mb-6 px-4 py-2">
            <Rocket className="w-4 h-4 mr-2" />
            FONCTIONNALITÉS PREMIUM
          </Badge>
          <h2 className="text-5xl md:text-6xl font-gaming font-black mb-6">
            <span className="gradient-text">POURQUOI CHOISIR</span>
            <br />
            <span className="gradient-text">FF ARENA ?</span>
          </h2>
          <p className="text-xl md:text-2xl light-mode-text max-w-3xl mx-auto font-display leading-relaxed">
            Une expérience gaming révolutionnaire avec des fonctionnalités uniques qui vous donnent l'avantage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GamingCard
              key={index}
              variant="glass"
              className={`text-center group cursor-pointer transition-all duration-500 ${
                activeFeature === index ? "neon-glow scale-105" : ""
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <GamingCardHeader>
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className={`h-10 w-10 ${feature.color}`} />
                </div>
                <GamingCardTitle className="group-hover:scale-105 transition-transform duration-300 mb-4">
                  {feature.title}
                </GamingCardTitle>
                <GamingCardDescription className="light-mode-text group-hover:text-gaming transition-colors text-base leading-relaxed">
                  {feature.description}
                </GamingCardDescription>
              </GamingCardHeader>
            </GamingCard>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="badge-gaming mb-6 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            TÉMOIGNAGES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-gaming font-black gradient-text mb-6">
            CE QUE DISENT NOS CHAMPIONS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GamingCard key={index} variant="glass" className="hover-lift">
              <GamingCardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="light-mode-text mb-6 font-display text-lg leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gaming-gradient rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-gaming font-bold gradient-text">{testimonial.name}</span>
                </div>
              </GamingCardContent>
            </GamingCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gaming-gradient opacity-10 rounded-3xl" />
        <GamingCard variant="glass" className="text-center p-12 neon-glow relative z-10 light-mode-shadow">
          <GamingCardContent>
            <div className="max-w-4xl mx-auto">
              <Badge className="badge-gaming mb-8 px-6 py-3 text-lg">
                <Crown className="w-5 h-5 mr-2" />
                REJOIGNEZ L'ÉLITE GAMING
              </Badge>

              <h2 className="text-5xl md:text-6xl font-gaming font-black mb-8">
                <span className="gradient-text">PRÊT À DEVENIR</span>
                <br />
                <span className="gradient-text">UNE LÉGENDE ?</span>
              </h2>

              <p className="text-2xl md:text-3xl light-mode-text mb-12 font-display leading-relaxed">
                Rejoignez plus de <span className="font-bold gradient-text">50,000 joueurs</span> qui dominent Free Fire
                avec FF Arena
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Link href="/auth/register">
                  <GamingButton variant="neon" size="xl" className="group shadow-2xl">
                    <Users className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    CRÉER MON COMPTE ELITE
                    <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </GamingButton>
                </Link>
                <Link href="/tournaments">
                  <GamingButton variant="outline" size="xl" className="group shadow-xl">
                    <TrendingUp className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    VOIR LES TOURNOIS LIVE
                  </GamingButton>
                </Link>
              </div>

              <div className="flex justify-center items-center space-x-8 text-light-mode-text">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="font-display font-semibold">100% Sécurisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="font-display font-semibold">Livraison Instantanée</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-purple-500" />
                  <span className="font-display font-semibold">Support 24/7</span>
                </div>
              </div>
            </div>
          </GamingCardContent>
        </GamingCard>
      </section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-4 p-8 light-mode-shadow">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gaming-gradient rounded-xl flex items-center justify-center pulse-glow">
                  <Flame className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-gaming font-black gradient-text">FF ARENA</h3>
                  <p className="text-sm light-mode-text font-display">Ultimate Gaming Platform</p>
                </div>
              </div>
              <p className="light-mode-text font-display leading-relaxed">
                La plateforme de référence pour les tournois Free Fire en Afrique de l'Ouest. Rejoignez l'élite gaming
                dès aujourd'hui !
              </p>
            </div>

            <div>
              <h3 className="font-gaming font-bold mb-4 gradient-text">TOURNOIS</h3>
              <ul className="space-y-3 text-sm light-mode-text font-display">
                <li>
                  <Link href="/tournaments" className="hover:text-gaming transition-colors">
                    Tournois Actifs
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments" className="hover:text-gaming transition-colors">
                    Calendrier
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments" className="hover:text-gaming transition-colors">
                    Règlements
                  </Link>
                </li>
                <li>
                  <Link href="/tournaments" className="hover:text-gaming transition-colors">
                    Classements
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-gaming font-bold mb-4 gradient-text">BOUTIQUE</h3>
              <ul className="space-y-3 text-sm light-mode-text font-display">
                <li>
                  <Link href="/shop" className="hover:text-gaming transition-colors">
                    Diamants Premium
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-gaming transition-colors">
                    Passes VIP
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-gaming transition-colors">
                    Offres Spéciales
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-gaming transition-colors">
                    Abonnements
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-gaming font-bold mb-4 gradient-text">SUPPORT</h3>
              <ul className="space-y-3 text-sm light-mode-text font-display">
                <li>
                  <Link href="#" className="hover:text-gaming transition-colors">
                    Centre d'Aide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gaming transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gaming transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gaming transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gaming/20 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="light-mode-text font-display mb-4 md:mb-0">
              © 2024 FF Arena. Tous droits réservés. Conçu pour les vrais gamers 🔥
            </p>
            <div className="flex space-x-6 text-sm light-mode-text font-display">
              <Link href="/terms" className="hover:text-gaming transition-colors">
                Conditions d'utilisation
              </Link>
              <Link href="/privacy" className="hover:text-gaming transition-colors">
                Confidentialité
              </Link>
              <Link href="/cookies" className="hover:text-gaming transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
