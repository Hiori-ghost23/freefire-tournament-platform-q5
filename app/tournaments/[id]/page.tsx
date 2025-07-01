"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Trophy, Users, Calendar, Clock, MapPin, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TournamentDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // Simulation des données du tournoi
  const tournament = {
    id: Number.parseInt(params.id),
    name: "Warzone Lundi",
    date: "2024-01-22",
    time: "20:00",
    format: "Solo",
    entryFee: "5000 CFA",
    prizePool: "50000 CFA",
    participants: 24,
    maxParticipants: 50,
    status: "open",
    description:
      "Tournoi Solo intense avec des récompenses exceptionnelles. Montrez vos compétences et dominez le battlefield !",
    rules: [
      "Mode Battle Royale classique",
      "Pas de teaming autorisé",
      "Interdiction d'utiliser des hacks ou cheats",
      "Respect des autres joueurs obligatoire",
      "L'organisateur se réserve le droit d'exclure tout joueur non respectueux",
    ],
    prizes: [
      { position: "1er", reward: "25000 CFA" },
      { position: "2ème", reward: "15000 CFA" },
      { position: "3ème", reward: "10000 CFA" },
    ],
  }

  const participants = [
    "ProGamer123",
    "FireKing",
    "BattleQueen",
    "SniperElite",
    "RushMaster",
    "HeadHunter",
    "StealthNinja",
    "BlazeFire",
    "ThunderStorm",
    "IceBreaker",
  ]

  const handleRegister = async () => {
    setLoading(true)

    // Vérification de l'ID Free Fire (simulation)
    const hasFireFireId = true // À remplacer par une vraie vérification

    if (!hasFireFireId) {
      alert("Veuillez renseigner votre ID Free Fire dans votre profil avant de vous inscrire.")
      router.push("/dashboard")
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push(`/payment?type=tournament&id=${tournament.id}&amount=${tournament.entryFee}`)
    } catch (error) {
      alert("Erreur lors de l'inscription. Veuillez réessayer.")
    } finally {
      setLoading(false)
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
            <Link href="/tournaments" className="text-gray-600 hover:text-orange-600">
              ← Retour aux Tournois
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informations principales */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-3xl">{tournament.name}</CardTitle>
                  <Badge className="bg-green-100 text-green-800">Ouvert</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{tournament.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{tournament.format}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>
                      {tournament.participants}/{tournament.maxParticipants}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{tournament.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Règles du Tournoi</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {tournament.rules.map((rule, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Récompenses</h3>
                    <div className="space-y-2">
                      {tournament.prizes.map((prize, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="font-medium">{prize.position}</span>
                          <span className="text-green-600 font-semibold">{prize.reward}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liste des participants */}
            <Card>
              <CardHeader>
                <CardTitle>Participants Confirmés ({participants.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {participants.map((participant, index) => (
                    <div key={index} className="p-2 bg-gray-50 rounded text-sm text-center">
                      {participant}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar d'inscription */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-orange-600" />
                  <span>Inscription</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">{tournament.entryFee}</div>
                  <p className="text-sm text-gray-500">Frais d'inscription</p>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">{tournament.prizePool}</div>
                  <p className="text-sm text-gray-500">Prize Pool Total</p>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    Assurez-vous d'avoir renseigné votre ID Free Fire dans votre profil avant de vous inscrire.
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={handleRegister}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  disabled={loading}
                >
                  {loading ? "Inscription..." : "S'inscrire au Tournoi"}
                </Button>

                <p className="text-xs text-gray-500 text-center">Le paiement se fait via Mobile Money (MTN/Moov)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
