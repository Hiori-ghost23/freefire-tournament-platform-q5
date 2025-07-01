"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Users, ShoppingCart, Trophy, CheckCircle, XCircle, Clock, Plus, Eye } from "lucide-react"

export default function AdminPage() {
  const [orders, setOrders] = useState([
    {
      id: "#FF1024",
      user: "ProGamer123",
      type: "tournament",
      description: "Inscription Tournoi 'Warzone Lundi'",
      amount: "5000 CFA",
      status: "pending",
      date: "2024-01-16 14:30",
      userEmail: "progamer@email.com",
      freeFireId: "123456789",
    },
    {
      id: "#FF1025",
      user: "FireKing",
      type: "diamonds",
      description: "Achat de 520 Diamants",
      amount: "6000 CFA",
      status: "pending",
      date: "2024-01-16 15:45",
      userEmail: "fireking@email.com",
      freeFireId: "987654321",
    },
    {
      id: "#FF1023",
      user: "BattleQueen",
      type: "tournament",
      description: "Inscription Tournoi 'Squad Battle'",
      amount: "8000 CFA",
      status: "validated",
      date: "2024-01-15 10:20",
      userEmail: "battlequeen@email.com",
      freeFireId: "456789123",
    },
  ])

  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      name: "Warzone Lundi",
      date: "2024-01-22",
      time: "20:00",
      format: "Solo",
      entryFee: "5000 CFA",
      prizePool: "50000 CFA",
      maxParticipants: 50,
      participants: 24,
    },
    {
      id: 2,
      name: "Squad Battle Royale",
      date: "2024-01-25",
      time: "19:00",
      format: "Squad",
      entryFee: "8000 CFA",
      prizePool: "100000 CFA",
      maxParticipants: 20,
      participants: 12,
    },
  ])

  const [stats] = useState({
    totalUsers: 156,
    pendingOrders: 2,
    totalRevenue: "245000 CFA",
    activeTournaments: 3,
  })

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

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

  const pendingOrders = orders.filter((order) => order.status === "pending")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">FF Arena Admin</span>
          </div>
          <Button variant="outline" size="sm">
            Déconnexion
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Panneau d'Administration</h1>
          <p className="text-gray-600">Gérez les tournois, commandes et utilisateurs</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commandes en Attente</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.pendingOrders}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenus Total</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.totalRevenue}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tournois Actifs</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeTournaments}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Gestion des Commandes</span>
            </TabsTrigger>
            <TabsTrigger value="tournaments" className="flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>Gestion des Tournois</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Commandes à Valider</CardTitle>
                <CardDescription>Validez ou refusez les commandes après vérification des paiements</CardDescription>
              </CardHeader>
              <CardContent>
                {pendingOrders.length === 0 ? (
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>Aucune commande en attente de validation.</AlertDescription>
                  </Alert>
                ) : (
                  <div className="space-y-4">
                    {pendingOrders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-lg">{order.id}</span>
                            <Badge variant="outline" className="capitalize">
                              {order.type}
                            </Badge>
                            {getStatusBadge(order.status)}
                          </div>
                          <span className="text-sm text-gray-500">{order.date}</span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Utilisateur</p>
                            <p className="font-semibold">{order.user}</p>
                            <p className="text-sm text-gray-500">{order.userEmail}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">ID Free Fire</p>
                            <p className="font-mono">{order.freeFireId}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-gray-600">Description</p>
                          <p>{order.description}</p>
                          <p className="font-bold text-orange-600 text-lg">{order.amount}</p>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            onClick={() => updateOrderStatus(order.id, "validated")}
                            className="bg-green-600 hover:bg-green-700"
                            size="sm"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Valider
                          </Button>
                          <Button
                            onClick={() => updateOrderStatus(order.id, "rejected")}
                            variant="destructive"
                            size="sm"
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Refuser
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Historique des commandes */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Historique Complet</h3>
                  <div className="space-y-2">
                    {orders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div className="flex items-center space-x-4">
                          <span className="font-mono text-sm">{order.id}</span>
                          <span className="text-sm">{order.user}</span>
                          <span className="text-sm text-gray-500">{order.description}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="font-semibold">{order.amount}</span>
                          {getStatusBadge(order.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tournaments">
            <div className="space-y-6">
              {/* Créer un nouveau tournoi */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Créer un Nouveau Tournoi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tournamentName">Nom du Tournoi</Label>
                      <Input id="tournamentName" placeholder="Ex: Warzone Mercredi" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tournamentDate">Date</Label>
                      <Input id="tournamentDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tournamentTime">Heure</Label>
                      <Input id="tournamentTime" type="time" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tournamentFormat">Format</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisir le format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solo">Solo</SelectItem>
                          <SelectItem value="duo">Duo</SelectItem>
                          <SelectItem value="squad">Squad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="entryFee">Frais d'inscription (CFA)</Label>
                      <Input id="entryFee" type="number" placeholder="5000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prizePool">Prize Pool (CFA)</Label>
                      <Input id="prizePool" type="number" placeholder="50000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxParticipants">Participants Max</Label>
                      <Input id="maxParticipants" type="number" placeholder="50" />
                    </div>
                  </div>
                  <Button className="mt-4 bg-orange-600 hover:bg-orange-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Créer le Tournoi
                  </Button>
                </CardContent>
              </Card>

              {/* Liste des tournois existants */}
              <Card>
                <CardHeader>
                  <CardTitle>Tournois Existants</CardTitle>
                  <CardDescription>Gérez vos tournois actifs et à venir</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tournaments.map((tournament) => (
                      <div key={tournament.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{tournament.name}</h3>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-1" />
                              Voir
                            </Button>
                            <Button size="sm" variant="outline">
                              Modifier
                            </Button>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Date & Heure</p>
                            <p className="font-semibold">
                              {tournament.date} à {tournament.time}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Format</p>
                            <p className="font-semibold">{tournament.format}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Participants</p>
                            <p className="font-semibold">
                              {tournament.participants}/{tournament.maxParticipants}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500">Prize Pool</p>
                            <p className="font-semibold text-green-600">{tournament.prizePool}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
