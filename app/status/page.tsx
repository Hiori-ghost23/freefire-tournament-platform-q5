import { StatusIndicator } from "@/components/status-indicator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">FF Arena</span>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Statut de la Plateforme</h1>
          <p className="text-gray-600">Vérification en temps réel des services et fonctionnalités</p>
        </div>

        <StatusIndicator />

        {/* Informations supplémentaires */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>📋 Résumé Technique</CardTitle>
            <CardDescription>État actuel du développement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ Fonctionnel</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Interface utilisateur complète</li>
                  <li>• Navigation et routing</li>
                  <li>• Design responsive</li>
                  <li>• Boutique e-commerce</li>
                  <li>• Panel administrateur</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">⚠️ En attente de configuration</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Base de données Supabase</li>
                  <li>• Authentification réelle</li>
                  <li>• Envoi d'emails SMTP</li>
                  <li>• Paiements Mobile Money</li>
                  <li>• API Free Fire</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
