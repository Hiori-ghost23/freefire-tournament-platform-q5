import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Zap, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">FF Arena</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/tournaments" className="text-gray-600 hover:text-orange-600 transition-colors">
              Tournois
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-orange-600 transition-colors">
              Diamants
            </Link>
            <Link href="/auth/login" className="text-gray-600 hover:text-orange-600 transition-colors">
              Connexion
            </Link>
            <Link href="/auth/register">
              <Button className="bg-orange-600 hover:bg-orange-700">S'inscrire</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            La Plateforme Ultimate pour <span className="text-orange-600">Free Fire</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Participez aux tournois les plus excitants et rechargez vos diamants en toute sécurité avec Mobile Money
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tournaments">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Trophy className="mr-2 h-5 w-5" />
                Voir les Tournois
              </Button>
            </Link>
            <Link href="/shop">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Zap className="mr-2 h-5 w-5" />
                Acheter des Diamants
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pourquoi Choisir FF Arena ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Tournois Officiels</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Participez à des tournois organisés avec des prix attractifs et une compétition équitable
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Recharge Rapide</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Rechargez vos diamants Free Fire facilement avec MTN et Moov Money</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Paiement Sécurisé</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transactions sécurisées avec validation manuelle pour votre tranquillité d'esprit
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à Dominer Free Fire ?</h2>
          <p className="text-xl mb-8 opacity-90">Rejoignez des milliers de joueurs qui font confiance à FF Arena</p>
          <Link href="/auth/register">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Users className="mr-2 h-5 w-5" />
              Créer mon Compte
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-bold">FF Arena</span>
          </div>
          <p className="text-gray-400">© 2024 FF Arena. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
