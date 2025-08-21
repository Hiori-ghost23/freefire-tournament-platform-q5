"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
  Trophy,
  Zap,
  Users,
  Star,
  ShoppingCart,
  Crown,
  Flame,
  Gift,
  TrendingUp,
  Shield,
  Award,
  Sparkles,
  Menu,
  X,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />

      {/* Navigation */}
      <nav className="relative z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Crown className="h-8 w-8 text-orange-500" />
                <span className="font-gaming text-xl gradient-text">GOKU FF E-SHOP</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link text-foreground hover:text-orange-500">
                Accueil
              </Link>
              <Link href="/tournaments" className="nav-link text-foreground hover:text-orange-500">
                Tournois
              </Link>
              <Link href="/shop" className="nav-link text-foreground hover:text-orange-500">
                Boutique
              </Link>
              <Link href="/dashboard" className="nav-link text-foreground hover:text-orange-500">
                Dashboard
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="nav-link text-foreground hover:text-orange-500">
                  Accueil
                </Link>
                <Link href="/tournaments" className="nav-link text-foreground hover:text-orange-500">
                  Tournois
                </Link>
                <Link href="/shop" className="nav-link text-foreground hover:text-orange-500">
                  Boutique
                </Link>
                <Link href="/dashboard" className="nav-link text-foreground hover:text-orange-500">
                  Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-reveal">
            <h1 className="text-6xl md:text-8xl font-gaming gradient-text mb-6 leading-tight">GOKU FF</h1>
            <h2 className="text-3xl md:text-5xl font-display text-foreground mb-8">Ultimate Gaming Store</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Rejoignez la révolution gaming ! Tournois épiques, diamants premium, et une communauté de champions vous
              attendent.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button asChild size="lg" className="btn-gaming text-white font-bold px-8 py-4 text-lg">
              <Link href="/tournaments">
                <Trophy className="mr-2 h-6 w-6" />
                Rejoindre un Tournoi
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass border-orange-500/50 hover:bg-orange-500/10 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/shop">
                <ShoppingCart className="mr-2 h-6 w-6" />
                Explorer la Boutique
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Joueurs Actifs", value: "50K+" },
              { icon: Trophy, label: "Tournois", value: "1,200+" },
              { icon: Gift, label: "Récompenses", value: "₹2M+" },
              { icon: Star, label: "Note Moyenne", value: "4.9/5" },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 hover-lift">
                <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-gaming gradient-text mb-6">Fonctionnalités Épiques</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez tout ce qui fait de GOKU FF la plateforme gaming ultime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Tournois Épiques",
                description: "Participez à des tournois quotidiens avec des prix incroyables",
                color: "text-yellow-500",
              },
              {
                icon: Zap,
                title: "Diamants Premium",
                description: "Achetez des diamants Free Fire aux meilleurs prix",
                color: "text-blue-500",
              },
              {
                icon: Shield,
                title: "Sécurité Maximale",
                description: "Transactions 100% sécurisées et protection des données",
                color: "text-green-500",
              },
              {
                icon: Users,
                title: "Communauté Active",
                description: "Rejoignez une communauté de 50,000+ joueurs passionnés",
                color: "text-purple-500",
              },
              {
                icon: Award,
                title: "Récompenses Exclusives",
                description: "Débloquez des récompenses uniques et des bonus quotidiens",
                color: "text-orange-500",
              },
              {
                icon: TrendingUp,
                title: "Classements Live",
                description: "Suivez vos performances en temps réel",
                color: "text-red-500",
              },
            ].map((feature, index) => (
              <Card key={index} className="card-gaming hover-lift">
                <CardHeader>
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <CardTitle className="text-xl font-gaming text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-gaming gradient-text mb-6">Tournois en Cours</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Participez aux tournois les plus excitants et gagnez des prix incroyables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Championship Elite",
                prize: "₹50,000",
                participants: "2,456",
                timeLeft: "2h 30m",
                status: "En cours",
                difficulty: "Expert",
              },
              {
                title: "Weekly Warriors",
                prize: "₹25,000",
                participants: "1,234",
                timeLeft: "1d 5h",
                status: "Inscription",
                difficulty: "Intermédiaire",
              },
              {
                title: "Rookie Rush",
                prize: "₹10,000",
                participants: "856",
                timeLeft: "3d 12h",
                status: "Bientôt",
                difficulty: "Débutant",
              },
            ].map((tournament, index) => (
              <Card key={index} className="card-gaming hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="badge-gaming">{tournament.status}</Badge>
                    <Badge variant="outline" className="border-orange-500/50">
                      {tournament.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-gaming text-foreground">{tournament.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Prix Total</span>
                    <span className="text-2xl font-bold text-orange-500">{tournament.prize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Participants</span>
                    <span className="font-semibold text-foreground">{tournament.participants}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Temps Restant</span>
                    <span className="font-semibold text-foreground">{tournament.timeLeft}</span>
                  </div>
                  <Button className="w-full btn-gaming text-white font-bold">
                    <Trophy className="mr-2 h-4 w-4" />
                    Rejoindre
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass border-orange-500/50 hover:bg-orange-500/10 bg-transparent"
            >
              <Link href="/tournaments">
                Voir Tous les Tournois
                <Sparkles className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-gaming gradient-text mb-6">Boutique Premium</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les meilleurs prix pour vos diamants Free Fire et bien plus encore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "100 Diamants",
                price: "₹80",
                originalPrice: "₹100",
                discount: "20%",
                popular: false,
              },
              {
                title: "520 Diamants",
                price: "₹400",
                originalPrice: "₹520",
                discount: "23%",
                popular: true,
              },
              {
                title: "1080 Diamants",
                price: "₹800",
                originalPrice: "₹1080",
                discount: "26%",
                popular: false,
              },
              {
                title: "2180 Diamants",
                price: "₹1500",
                originalPrice: "₹2180",
                discount: "31%",
                popular: false,
              },
            ].map((item, index) => (
              <Card key={index} className={`card-gaming hover-lift ${item.popular ? "ring-2 ring-orange-500" : ""}`}>
                <CardHeader>
                  {item.popular && (
                    <Badge className="badge-gaming mb-2 w-fit">
                      <Star className="mr-1 h-3 w-3" />
                      Populaire
                    </Badge>
                  )}
                  <CardTitle className="text-lg font-gaming text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500">{item.price}</div>
                    <div className="text-sm text-muted-foreground line-through">{item.originalPrice}</div>
                    <Badge variant="secondary" className="mt-2">
                      -{item.discount}
                    </Badge>
                  </div>
                  <Button className="w-full btn-gaming text-white font-bold">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Acheter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass border-orange-500/50 hover:bg-orange-500/10 bg-transparent"
            >
              <Link href="/shop">
                Explorer la Boutique Complète
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 hover-lift">
            <Flame className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-gaming gradient-text mb-6">Prêt à Dominer ?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez GOKU FF dès maintenant et commencez votre ascension vers la gloire gaming !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-gaming text-white font-bold px-8 py-4">
                <Link href="/auth/register">
                  <Crown className="mr-2 h-5 w-5" />
                  Créer un Compte
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass border-orange-500/50 hover:bg-orange-500/10 px-8 py-4 bg-transparent"
              >
                <Link href="/auth/login">Se Connecter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 glass border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="h-8 w-8 text-orange-500" />
                <span className="font-gaming text-xl gradient-text">GOKU FF E-SHOP</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                La plateforme gaming ultime pour Free Fire. Tournois, boutique premium, et communauté active.
              </p>
            </div>

            <div>
              <h3 className="font-gaming text-foreground mb-4">Navigation</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-muted-foreground hover:text-orange-500 transition-colors">
                  Accueil
                </Link>
                <Link
                  href="/tournaments"
                  className="block text-muted-foreground hover:text-orange-500 transition-colors"
                >
                  Tournois
                </Link>
                <Link href="/shop" className="block text-muted-foreground hover:text-orange-500 transition-colors">
                  Boutique
                </Link>
                <Link href="/dashboard" className="block text-muted-foreground hover:text-orange-500 transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-gaming text-foreground mb-4">Support</h3>
              <div className="space-y-2">
                <Link href="/support" className="block text-muted-foreground hover:text-orange-500 transition-colors">
                  Centre d'aide
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-orange-500 transition-colors">
                  Contact
                </Link>
                <Link href="/terms" className="block text-muted-foreground hover:text-orange-500 transition-colors">
                  Conditions
                </Link>
                <Link href="/privacy" className="block text-muted-foreground hover:text-orange-500 transition-colors">
                  Confidentialité
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 GOKU FF E-SHOP. Tous droits réservés. Fait avec ❤️ pour la communauté gaming.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
