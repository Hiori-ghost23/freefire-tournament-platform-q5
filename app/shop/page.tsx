"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Trophy, Star, Search, Filter, Gift, Crown, Gamepad2, Calendar, Rocket, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

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
        description: "Pack de démarrage idéal",
      },
      {
        id: 2,
        name: "231 Diamants",
        diamonds: 231,
        price: 1600,
        popular: true,
        category: "diamonds",
        description: "Excellent rapport qualité-prix",
      },
      {
        id: 3,
        name: "341 Diamants",
        diamonds: 341,
        price: 2500,
        popular: false,
        category: "diamonds",
        description: "Pour les achats moyens",
      },
      {
        id: 4,
        name: "462 Diamants",
        diamonds: 462,
        price: 3200,
        popular: false,
        category: "diamonds",
        description: "Pack intermédiaire",
      },
      {
        id: 5,
        name: "572 Diamants",
        diamonds: 572,
        price: 3500,
        popular: true,
        category: "diamonds",
        description: "Très populaire !",
      },
      {
        id: 6,
        name: "693 Diamants",
        diamonds: 693,
        price: 4500,
        popular: false,
        category: "diamonds",
        description: "Pour les gros achats",
      },
      {
        id: 7,
        name: "840 Diamants",
        diamonds: 840,
        price: 6000,
        popular: false,
        category: "diamonds",
        description: "Pack premium",
      },
      {
        id: 8,
        name: "1000 Diamants",
        diamonds: 1000,
        price: 7300,
        popular: true,
        category: "diamonds",
        description: "Le millier parfait !",
      },
      {
        id: 9,
        name: "1500 Diamants",
        diamonds: 1500,
        price: 10200,
        popular: false,
        category: "diamonds",
        description: "Pack généreux",
      },
      {
        id: 10,
        name: "2000 Diamants",
        diamonds: 2000,
        price: 13600,
        popular: false,
        category: "diamonds",
        description: "Pour les gros joueurs",
      },
      {
        id: 11,
        name: "2500 Diamants",
        diamonds: 2500,
        price: 18000,
        popular: false,
        category: "diamonds",
        description: "Pack ultime !",
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
      },
      {
        id: 302,
        name: "Largage Spécial 2$",
        price: 2000,
        popular: false,
        category: "specials",
        description: "Largage premium avec meilleures chances",
        features: ["Récompenses premium", "Chances améliorées", "Objets légendaires possibles"],
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
      },
    ],
  }

  const categories = [
    { id: "all", name: "Tous", icon: Gamepad2 },
    { id: "diamonds", name: "Diamants", icon: Zap },
    { id: "subscriptions", name: "Abonnements", icon: Star },
    { id: "passes", name: "Passes", icon: Crown },
    { id: "specials", name: "Spéciaux", icon: Rocket },
  ]

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
        return <Zap className="w-8 h-8 text-orange-600" />
      case "subscriptions":
        return <Star className="w-8 h-8 text-blue-600" />
      case "passes":
        return <Crown className="w-8 h-8 text-purple-600" />
      case "specials":
        return <Rocket className="w-8 h-8 text-green-600" />
      default:
        return <Gift className="w-8 h-8 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">FF Arena</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-orange-600">
              Dashboard
            </Link>
            <Link href="/tournaments" className="text-gray-600 hover:text-orange-600">
              Tournois
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8">
          <h1 className="text-4xl font-bold mb-2">🥵👻👌 International E-Shop</h1>
          <p className="text-xl opacity-90">Grille tarifaire officielle - Prix imbattables !</p>
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <Zap className="w-4 h-4" />
              <span>Livraison Instantanée</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4" />
              <span>Prix Officiels</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>100% Sécurisé</span>
            </div>
          </div>
        </div>

        {/* Filtres et Recherche */}
        <div className="mb-8 bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher un produit..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Plus Populaires</SelectItem>
                <SelectItem value="price-low">Prix Croissant</SelectItem>
                <SelectItem value="price-high">Prix Décroissant</SelectItem>
                <SelectItem value="diamonds">Plus de Diamants</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Navigation par Catégories */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col items-center space-y-1 p-3 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
              >
                <category.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Contenu des Produits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getFilteredProducts().map((product) => (
              <Card
                key={product.id}
                className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  product.popular ? "ring-2 ring-orange-600 shadow-lg" : ""
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-orange-600 text-white px-3 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Populaire
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                    {getCategoryIcon(product.category)}
                  </div>

                  <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>

                  {product.diamonds && (
                    <div className="text-2xl font-bold text-orange-600">{product.diamonds.toLocaleString()}💎</div>
                  )}

                  {product.duration && (
                    <div className="text-lg font-semibold text-blue-600 flex items-center justify-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {product.duration}
                    </div>
                  )}

                  {product.level && <div className="text-lg font-semibold text-purple-600">Niveau {product.level}</div>}
                </CardHeader>

                <CardContent className="text-center space-y-3">
                  <CardDescription className="text-sm min-h-[40px]">{product.description}</CardDescription>

                  {product.features && (
                    <div className="text-xs text-left">
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center space-x-1">
                            <span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="text-center">
                      <div className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</div>
                      {product.diamonds && (
                        <div className="text-xs text-gray-500">
                          {Math.round(product.price / product.diamonds)} CFA/💎
                        </div>
                      )}
                    </div>

                    <Button
                      onClick={() => handlePurchase(product)}
                      className={`w-full ${
                        product.popular ? "bg-orange-600 hover:bg-orange-700" : "bg-gray-600 hover:bg-gray-700"
                      }`}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Acheter
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500">MTN/Moov Money</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {getFilteredProducts().length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">Aucun produit trouvé</h3>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </Tabs>

        {/* Section Statistiques */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100">
            <CardHeader>
              <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Diamants</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600">11 Packs</p>
              <p className="text-sm text-gray-600">De 110 à 2500 💎</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Abonnements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">2 Formules</p>
              <p className="text-sm text-gray-600">7 jours & 30 jours</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100">
            <CardHeader>
              <Crown className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Passes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-purple-600">7 Options</p>
              <p className="text-sm text-gray-600">Booyah & Level Up</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-green-50 to-green-100">
            <CardHeader>
              <Rocket className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Spéciaux</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">4 Offres</p>
              <p className="text-sm text-gray-600">Largages & Evo</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
