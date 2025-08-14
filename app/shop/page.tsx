"use client"

import { useState } from "react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Zap,
  Trophy,
  Star,
  Search,
  Filter,
  Gift,
  Crown,
  Gamepad2,
  Calendar,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Flame,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { GamingButton } from "@/components/ui/gaming-button"
import { GamingCard } from "@/components/ui/gaming-card"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function ShopPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")

  // Produits basés sur la grille tarifaire réelle
  const products = {
    diamonds: [
      {
        id: 1,
        name: "110 Diamants",
        diamonds: 110,
        price: 900,
        popular: false,
        category: "diamonds",
        description: "Pack de démarrage idéal pour commencer",
        rarity: "common",
      },
      {
        id: 2,
        name: "231 Diamants",
        diamonds: 231,
        price: 1600,
        popular: true,
        category: "diamonds",
        description: "Excellent rapport qualité-prix",
        rarity: "rare",
      },
      {
        id: 3,
        name: "341 Diamants",
        diamonds: 341,
        price: 2500,
        popular: false,
        category: "diamonds",
        description: "Pour les achats moyens",
        rarity: "common",
      },
      {
        id: 4,
        name: "462 Diamants",
        diamonds: 462,
        price: 3200,
        popular: false,
        category: "diamonds",
        description: "Pack intermédiaire solide",
        rarity: "uncommon",
      },
      {
        id: 5,
        name: "572 Diamants",
        diamonds: 572,
        price: 3500,
        popular: true,
        category: "diamonds",
        description: "Très populaire parmi les joueurs !",
        rarity: "rare",
      },
      {
        id: 6,
        name: "693 Diamants",
        diamonds: 693,
        price: 4500,
        popular: false,
        category: "diamonds",
        description: "Pour les gros achats stratégiques",
        rarity: "epic",
      },
      {
        id: 7,
        name: "840 Diamants",
        diamonds: 840,
        price: 6000,
        popular: false,
        category: "diamonds",
        description: "Pack premium de qualité",
        rarity: "epic",
      },
      {
        id: 8,
        name: "1000 Diamants",
        diamonds: 1000,
        price: 7300,
        popular: true,
        category: "diamonds",
        description: "Le millier parfait pour les pros !",
        rarity: "legendary",
      },
      {
        id: 9,
        name: "1500 Diamants",
        diamonds: 1500,
        price: 10200,
        popular: false,
        category: "diamonds",
        description: "Pack généreux pour les experts",
        rarity: "legendary",
      },
      {
        id: 10,
        name: "2000 Diamants",
        diamonds: 2000,
        price: 13600,
        popular: false,
        category: "diamonds",
        description: "Pour les gros joueurs sérieux",
        rarity: "mythic",
      },
      {
        id: 11,
        name: "2500 Diamants",
        diamonds: 2500,
        price: 18000,
        popular: false,
        category: "diamonds",
        description: "Pack ultime des champions !",
        rarity: "mythic",
      },
    ],
    subscriptions: [
      {
        id: 101,
        name: "Abonnement Hebdomadaire",
        price: 1700,
        duration: "7 jours",
        popular: true,
        category: "subscriptions",
        description: "Avantages premium pendant 7 jours",
        features: ["Diamants quotidiens", "XP bonus", "Accès prioritaire", "Récompenses exclusives"],
        rarity: "rare",
      },
      {
        id: 102,
        name: "Abonnement Mensuel",
        price: 7500,
        duration: "30 jours",
        popular: false,
        category: "subscriptions",
        description: "Un mois complet d'avantages premium",
        features: ["Diamants quotidiens", "XP bonus", "Accès prioritaire", "Récompenses exclusives", "Support VIP"],
        rarity: "legendary",
      },
    ],
    passes: [
      {
        id: 201,
        name: "Booyah Pass",
        price: 2400,
        popular: true,
        category: "passes",
        description: "Le pass ultime pour cette saison",
        features: ["Skins exclusifs", "Emotes rares", "100+ récompenses", "Progression rapide"],
        rarity: "legendary",
      },
      {
        id: 202,
        name: "Level Up Pass - Niveau 6",
        price: 500,
        level: 6,
        popular: false,
        category: "passes",
        description: "Boost jusqu'au niveau 6",
        features: ["Progression instantanée", "Récompenses débloquées"],
        rarity: "common",
      },
      {
        id: 203,
        name: "Level Up Pass - Niveau 10",
        price: 500,
        level: 10,
        popular: false,
        category: "passes",
        description: "Boost jusqu'au niveau 10",
        features: ["Progression instantanée", "Récompenses débloquées"],
        rarity: "uncommon",
      },
      {
        id: 204,
        name: "Level Up Pass - Niveau 15",
        price: 500,
        level: 15,
        popular: false,
        category: "passes",
        description: "Boost jusqu'au niveau 15",
        features: ["Progression instantanée", "Récompenses débloquées"],
        rarity: "uncommon",
      },
      {
        id: 205,
        name: "Level Up Pass - Niveau 20",
        price: 500,
        level: 20,
        popular: false,
        category: "passes",
        description: "Boost jusqu'au niveau 20",
        features: ["Progression instantanée", "Récompenses débloquées"],
        rarity: "rare",
      },
      {
        id: 206,
        name: "Level Up Pass - Niveau 25",
        price: 500,
        level: 25,
        popular: false,
        category: "passes",
        description: "Boost jusqu'au niveau 25",
        features: ["Progression instantanée", "Récompenses débloquées"],
        rarity: "rare",
      },
      {
        id: 207,
        name: "Level Up Pass - Niveau 30",
        price: 1000,
        level: 30,
        popular: true,
        category: "passes",
        description: "Boost jusqu'au niveau 30 - Maximum !",
        features: ["Progression instantanée", "Récompenses débloquées", "Bonus spécial niveau max"],
        rarity: "epic",
      },
    ],
    specials: [
      {
        id: 301,
        name: "Largage Spécial 1$",
        price: 1000,
        popular: true,
        category: "specials",
        description: "Largage spécial avec récompenses aléatoires",
        features: ["Récompenses aléatoires", "Skins possibles", "Objets rares"],
        rarity: "rare",
      },
      {
        id: 302,
        name: "Largage Spécial 2$",
        price: 2000,
        popular: false,
        category: "specials",
        description: "Largage premium avec meilleures chances",
        features: ["Récompenses premium", "Chances améliorées", "Objets légendaires possibles"],
        rarity: "epic",
      },
      {
        id: 303,
        name: "Accès Evo 7 jours",
        price: 900,
        duration: "7 jours",
        popular: false,
        category: "specials",
        description: "Accès aux fonctionnalités Evo pendant 7 jours",
        features: ["Fonctionnalités Evo", "Avantages exclusifs", "Progression accélérée"],
        rarity: "uncommon",
      },
      {
        id: 304,
        name: "Accès Evo 30 jours",
        price: 2500,
        duration: "30 jours",
        popular: true,
        category: "specials",
        description: "Accès complet aux fonctionnalités Evo",
        features: [
          "Fonctionnalités Evo complètes",
          "Avantages exclusifs",
          "Progression accélérée",
          "Support prioritaire",
        ],
        rarity: "legendary",
      },
    ],
  }

  const categories = [
    { id: "all", name: "Tous", icon: Gamepad2, color: "from-purple-500 to-pink-500" },
    { id: "diamonds", name: "Diamants", icon: Zap, color: "from-orange-500 to-yellow-500" },
    { id: "subscriptions", name: "Abonnements", icon: Star, color: "from-blue-500 to-cyan-500" },
    { id: "passes", name: "Passes", icon: Crown, color: "from-purple-500 to-indigo-500" },
    { id: "specials", name: "Spéciaux", icon: Rocket, color: "from-green-500 to-emerald-500" },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "from-gray-400 to-gray-600"
      case "uncommon":
        return "from-green-400 to-green-600"
      case "rare":
        return "from-blue-400 to-blue-600"
      case "epic":
        return "from-purple-400 to-purple-600"
      case "legendary":
        return "from-orange-400 to-orange-600"
      case "mythic":
        return "from-red-400 to-red-600"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "shadow-gray-500/20"
      case "uncommon":
        return "shadow-green-500/30"
      case "rare":
        return "shadow-blue-500/30"
      case "epic":
        return "shadow-purple-500/40"
      case "legendary":
        return "shadow-orange-500/50"
      case "mythic":
        return "shadow-red-500/60"
      default:
        return "shadow-gray-500/20"
    }
  }

  // Fonction pour obtenir tous les produits
  const getAllProducts = () => {
    return Object.values(products).flat()
  }

  // Fonction pour filtrer les produits
  const getFilteredProducts = () => {
    let filtered = selectedCategory === "all" ? getAllProducts() : products[selectedCategory] || []

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Tri
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "popular":
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
        break
      case "diamonds":
        filtered.sort((a, b) => (b.diamonds || 0) - (a.diamonds || 0))
        break
    }

    return filtered
  }

  const handlePurchase = (product: any) => {
    const params = new URLSearchParams({
      type: product.category,
      id: product.id.toString(),
      amount: `${product.price} CFA`,
      name: product.name,
    })

    if (product.diamonds) {
      params.append("diamonds", product.diamonds.toString())
    }

    router.push(`/payment?${params.toString()}`)
  }

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()} CFA`
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "diamonds":
        return <Zap className="w-8 h-8 text-orange-400 drop-shadow-lg" />
      case "subscriptions":
        return <Star className="w-8 h-8 text-blue-400 drop-shadow-lg" />
      case "passes":
        return <Crown className="w-8 h-8 text-purple-400 drop-shadow-lg" />
      case "specials":
        return <Rocket className="w-8 h-8 text-green-400 drop-shadow-lg" />
      default:
        return <Gift className="w-8 h-8 text-gray-400 drop-shadow-lg" />
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />

      {/* Gaming Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      {/* Gaming Header */}
      <header className="relative z-10 backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/20 dark:border-purple-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-xl">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  GOKU FF E-SHOP
                </span>
                <div className="text-xs text-gray-400 dark:text-gray-500">Ultimate Gaming Store</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/dashboard" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                Dashboard
              </Link>
              <Link href="/tournaments" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                Tournois
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Gaming Hero Section */}
        <div className="mb-12 text-center">
          <GamingCard className="p-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30">
            <div className="flex items-center justify-center mb-4">
              <Flame className="w-8 h-8 text-orange-400 mr-2" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                🔥 GOKU FF E-SHOP 🔥
              </h1>
              <Flame className="w-8 h-8 text-orange-400 ml-2" />
            </div>
            <p className="text-xl text-gray-300 dark:text-gray-400 mb-6">
              Grille tarifaire officielle - Prix imbattables !
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Zap className="w-4 h-4 text-orange-400" />
                <span className="text-gray-200">Livraison Instantanée</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-4 h-4 text-blue-400" />
                <span className="text-gray-200">Prix Officiels</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-200">100% Sécurisé</span>
              </div>
            </div>
          </GamingCard>
        </div>

        {/* Gaming Filters */}
        <GamingCard className="mb-8 p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher un produit gaming..."
                className="pl-10 bg-white/5 dark:bg-black/20 border-white/20 dark:border-purple-500/30 text-gray-200 placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 bg-white/5 dark:bg-black/20 border-white/20 dark:border-purple-500/30 text-gray-200">
                <Filter className="w-4 h-4 mr-2 text-purple-400" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-900/95 border-purple-500/30 backdrop-blur-xl">
                <SelectItem value="popular">Plus Populaires</SelectItem>
                <SelectItem value="price-low">Prix Croissant</SelectItem>
                <SelectItem value="price-high">Prix Décroissant</SelectItem>
                <SelectItem value="diamonds">Plus de Diamants</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </GamingCard>

        {/* Gaming Categories */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-1 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-purple-500/30">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col items-center space-y-2 p-4 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white transition-all duration-300 hover:bg-white/10 dark:hover:bg-black/20"
              >
                <category.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Gaming Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredProducts().map((product) => (
              <GamingCard
                key={product.id}
                className={`relative group hover:scale-105 transition-all duration-500 ${
                  product.popular
                    ? `ring-2 ring-orange-500/50 ${getRarityGlow(product.rarity)}`
                    : getRarityGlow(product.rarity)
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Populaire
                    </Badge>
                  </div>
                )}

                {/* Rarity Indicator */}
                <div className="absolute top-2 right-2">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${getRarityColor(product.rarity)} shadow-lg`}
                  />
                </div>

                <CardHeader className="text-center pb-2">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 dark:border-purple-500/30">
                    {getCategoryIcon(product.category)}
                  </div>

                  <CardTitle className="text-lg leading-tight text-gray-200 group-hover:text-white transition-colors">
                    {product.name}
                  </CardTitle>

                  {product.diamonds && (
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      {product.diamonds.toLocaleString()}💎
                    </div>
                  )}

                  {product.duration && (
                    <div className="text-lg font-semibold text-blue-400 flex items-center justify-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {product.duration}
                    </div>
                  )}

                  {product.level && (
                    <div className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Niveau {product.level}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-sm min-h-[40px] text-gray-400">
                    {product.description}
                  </CardDescription>

                  {product.features && (
                    <div className="text-xs text-left">
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-300">
                            <Sparkles className="w-3 h-3 text-purple-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {formatPrice(product.price)}
                      </div>
                      {product.diamonds && (
                        <div className="text-xs text-gray-500">
                          {Math.round(product.price / product.diamonds)} CFA/💎
                        </div>
                      )}
                    </div>

                    <GamingButton
                      onClick={() => handlePurchase(product)}
                      className={`w-full ${
                        product.popular
                          ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      }`}
                    >
                      <Target className="w-4 h-4 mr-2" />
                      Acheter
                    </GamingButton>
                  </div>

                  <p className="text-xs text-gray-500">MTN/Moov Money</p>
                </CardContent>
              </GamingCard>
            ))}
          </div>

          {getFilteredProducts().length === 0 && (
            <div className="text-center py-12">
              <GamingCard className="max-w-md mx-auto p-8">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto opacity-50" />
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
              </GamingCard>
            </div>
          )}
        </Tabs>

        {/* Gaming Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <GamingCard className="text-center bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border-orange-500/30">
            <CardHeader>
              <Zap className="h-8 w-8 text-orange-400 mx-auto mb-2 drop-shadow-lg" />
              <CardTitle className="text-lg text-gray-200">Diamants</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                11 Packs
              </p>
              <p className="text-sm text-gray-400">De 110 à 2500 💎</p>
            </CardContent>
          </GamingCard>

          <GamingCard className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/30">
            <CardHeader>
              <Star className="h-8 w-8 text-blue-400 mx-auto mb-2 drop-shadow-lg" />
              <CardTitle className="text-lg text-gray-200">Abonnements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                2 Formules
              </p>
              <p className="text-sm text-gray-400">7 jours & 30 jours</p>
            </CardContent>
          </GamingCard>

          <GamingCard className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30">
            <CardHeader>
              <Crown className="h-8 w-8 text-purple-400 mx-auto mb-2 drop-shadow-lg" />
              <CardTitle className="text-lg text-gray-200">Passes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                7 Options
              </p>
              <p className="text-sm text-gray-400">Booyah & Level Up</p>
            </CardContent>
          </GamingCard>

          <GamingCard className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30">
            <CardHeader>
              <Rocket className="h-8 w-8 text-green-400 mx-auto mb-2 drop-shadow-lg" />
              <CardTitle className="text-lg text-gray-200">Spéciaux</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                4 Offres
              </p>
              <p className="text-sm text-gray-400">Largages & Evo</p>
            </CardContent>
          </GamingCard>
        </div>
      </div>
    </div>
  )
}
