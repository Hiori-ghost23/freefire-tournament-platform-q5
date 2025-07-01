"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, DollarSign, Clock } from "lucide-react"
import Link from "next/link"

export default function TournamentsPage() {
  const tournaments = [
    {
      id: 1,
      name: "Warzone Lundi",
      date: "2024-01-22",
      time: "20:00",
      format: "Solo",
      entryFee: "5000 CFA",
      prizePool: "50000 CFA",
      participants: 24,
      maxParticipants: 50,
      status: "open",
    },
    {
      id: 2,
      name: "Squad Battle Royale",
      date: "2024-01-25",
      time: "19:00",
      format: "Squad",
      entryFee: "8000 CFA",
      prizePool: "100000 CFA",
      participants: 12,
      maxParticipants: 20,
      status: "open",
    },
    {
      id: 3,
      name: "Championship Final",
      date: "2024-01-28",
      time: "18:00",
      format: "Solo",
      entryFee: "10000 CFA",
      prizePool: "200000 CFA",
      participants: 45,
      maxParticipants: 50,
      status: "filling_fast",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-green-100 text-green-800">Ouvert</Badge>
      case "filling_fast":
        return <Badge className="bg-orange-100 text-orange-800">Se remplit vite</Badge>
      case "full":
        return <Badge variant="destructive">Complet</Badge>
      default:
        return <Badge variant="secondary">Fermé</Badge>
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
            <Link href="/shop" className="text-gray-600 hover:text-orange-600">
              Diamants
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tournois Free Fire</h1>
          <p className="text-gray-600">Participez aux tournois les plus excitants et gagnez des prix incroyables</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament) => (
            <Card key={tournament.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{tournament.name}</CardTitle>
                  {getStatusBadge(tournament.status)}
                </div>
                <CardDescription className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{tournament.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{tournament.time}</span>
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Format</p>
                    <p className="font-semibold">{tournament.format}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Frais d'inscription</p>
                    <p className="font-semibold text-orange-600">{tournament.entryFee}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Prize Pool</span>
                    <span className="font-bold text-green-600 flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {tournament.prizePool}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Participants</span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {tournament.participants}/{tournament.maxParticipants}
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href={`/tournaments/${tournament.id}`}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Trophy className="w-4 h-4 mr-2" />
                      Voir Détails
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
