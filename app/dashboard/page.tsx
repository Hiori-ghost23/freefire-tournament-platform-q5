"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, User, Settings, ShoppingCart, Clock, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [profile, setProfile] = useState({
    pseudo: "ProGamer123",
    email: "progamer@email.com",
    freeFireId: "123456789",
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "validated":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Validée
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            En attente
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="w-3 h-3 mr-1" />
            Refusée
          </Badge>
        )
      default:
        return <Badge variant="secondary">Inconnue</Badge>
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
              Tournois
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-orange-600">
              Diamants
            </Link>
            <Button variant="outline" size="sm">
              Déconnexion
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de Bord</h1>
          <p className="text-gray-600">Bienvenue, {profile.pseudo} !</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Mon Profil</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Mes Commandes</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Informations du Profil</span>
                </CardTitle>
                <CardDescription>Gérez vos informations personnelles et votre ID Free Fire</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pseudo">Pseudo</Label>
                    <Input
                      id="pseudo"
                      value={profile.pseudo}
                      onChange={(e) => setProfile({ ...profile, pseudo: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="freeFireId">ID Free Fire *</Label>
                  <Input
                    id="freeFireId"
                    placeholder="Votre ID de joueur Free Fire"
                    value={profile.freeFireId}
                    onChange={(e) => setProfile({ ...profile, freeFireId: e.target.value })}
                  />
                  <p className="text-sm text-gray-500">
                    Cet ID est obligatoire pour participer aux tournois et recevoir vos diamants
                  </p>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700">Sauvegarder les Modifications</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Historique des Commandes</span>
                </CardTitle>
                <CardDescription>
                  Suivez le statut de vos inscriptions aux tournois et achats de diamants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">{order.id}</span>
                          <Badge variant="outline">{order.type}</Badge>
                        </div>
                        {getStatusBadge(order.status)}
                      </div>
                      <p className="text-gray-600 mb-2">{order.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{order.date}</span>
                        <span className="font-semibold text-gray-900">{order.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
