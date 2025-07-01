"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Copy, CheckCircle, Smartphone, CreditCard } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderNumber, setOrderNumber] = useState("")
  const [paymentConfirmed, setPaymentConfirmed] = useState(false)
  const [loading, setLoading] = useState(false)

  const type = searchParams.get("type")
  const amount = searchParams.get("amount")
  const diamonds = searchParams.get("diamonds")
  const tournamentId = searchParams.get("id")

  useEffect(() => {
    // Générer un numéro de commande unique
    const generateOrderNumber = () => {
      const timestamp = Date.now().toString().slice(-6)
      const random = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")
      return `FF${timestamp}${random}`
    }
    setOrderNumber(generateOrderNumber())
  }, [])

  const getOrderDescription = () => {
    const name = searchParams.get("name")
    if (name) {
      return name
    }

    if (type === "tournament") {
      return "Inscription au Tournoi"
    } else if (type === "diamonds") {
      return `Achat de ${diamonds} Diamants`
    } else if (type === "battlepass") {
      return "Achat Battle Pass"
    } else if (type === "memberships") {
      return "Achat Membership"
    } else if (type === "bundles") {
      return "Achat Pack Bundle"
    }
    return "Commande"
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handlePaymentConfirmation = async () => {
    setLoading(true)

    try {
      // Simulation de l'enregistrement de la commande
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulation de l'envoi d'email à l'admin
      console.log("Email envoyé à l'administrateur pour la commande:", orderNumber)

      setPaymentConfirmed(true)
    } catch (error) {
      alert("Erreur lors de la confirmation. Veuillez réessayer.")
    } finally {
      setLoading(false)
    }
  }

  if (paymentConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <CardTitle className="text-2xl text-green-600">Paiement Confirmé !</CardTitle>
            <CardDescription>Votre commande a été enregistrée avec succès</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Numéro de commande</p>
              <p className="font-bold text-lg">#{orderNumber}</p>
            </div>
            <Alert>
              <AlertDescription>
                Votre commande est en attente de validation. Vous recevrez une notification par email une fois le
                paiement vérifié.
              </AlertDescription>
            </Alert>
            <div className="space-y-2">
              <Button onClick={() => router.push("/dashboard")} className="w-full bg-orange-600 hover:bg-orange-700">
                Voir mes Commandes
              </Button>
              <Button onClick={() => router.push("/")} variant="outline" className="w-full">
                Retour à l'Accueil
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-2xl py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Finaliser votre Commande</CardTitle>
            <CardDescription className="text-center">
              Suivez les instructions ci-dessous pour effectuer votre paiement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Récapitulatif de la commande */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Récapitulatif de la Commande</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Produit/Service:</span>
                  <span className="font-semibold">{getOrderDescription()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Montant Total:</span>
                  <span className="font-bold text-orange-600 text-lg">{amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Numéro de Commande:</span>
                  <Badge variant="outline" className="font-mono">
                    #{orderNumber}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Instructions de paiement */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Instructions de Paiement</h3>
              <Alert>
                <AlertDescription>
                  <strong>Important:</strong> N'oubliez pas de mentionner le numéro de commande{" "}
                  <strong>#{orderNumber}</strong> dans la référence de votre transfert.
                </AlertDescription>
              </Alert>

              {/* MTN Money */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Smartphone className="h-5 w-5 text-yellow-600" />
                    <span>MTN Mobile Money</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600">Numéro Marchand</p>
                      <p className="font-mono font-bold">+226 70 XX XX XX</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard("+226 70 XX XX XX")}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>1. Composez *555#</p>
                    <p>2. Choisissez "Transfert d'argent"</p>
                    <p>3. Entrez le numéro marchand</p>
                    <p>
                      4. Montant: <strong>{amount}</strong>
                    </p>
                    <p>
                      5. Référence: <strong>#{orderNumber}</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Moov Money */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <span>Moov Money</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600">Numéro Marchand</p>
                      <p className="font-mono font-bold">+226 60 XX XX XX</p>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard("+226 60 XX XX XX")}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>1. Composez *555#</p>
                    <p>2. Choisissez "Transfert"</p>
                    <p>3. Entrez le numéro marchand</p>
                    <p>
                      4. Montant: <strong>{amount}</strong>
                    </p>
                    <p>
                      5. Référence: <strong>#{orderNumber}</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bouton de confirmation */}
            <div className="pt-4">
              <Button
                onClick={handlePaymentConfirmation}
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={loading}
                size="lg"
              >
                {loading ? "Traitement en cours..." : "J'ai effectué le paiement"}
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Cliquez seulement après avoir effectué le transfert
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
