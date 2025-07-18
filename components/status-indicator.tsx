"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, Database, Mail, Shield, CreditCard } from "lucide-react"

interface ServiceStatus {
  name: string
  status: "operational" | "degraded" | "down"
  description: string
  icon: React.ReactNode
}

export function StatusIndicator() {
  const [services, setServices] = useState<ServiceStatus[]>([
    {
      name: "Base de Données",
      status: "down",
      description: "Supabase non configuré",
      icon: <Database className="w-4 h-4" />,
    },
    {
      name: "Authentification",
      status: "down",
      description: "Dépend de la base de données",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      name: "Emails",
      status: "down",
      description: "SMTP non configuré",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      name: "Paiements",
      status: "down",
      description: "API Mobile Money non intégrée",
      icon: <CreditCard className="w-4 h-4" />,
    },
  ])

  useEffect(() => {
    // Vérifier le statut des services
    const checkServices = async () => {
      const updatedServices = [...services]

      // Vérifier Supabase
      try {
        const hasSupabase = !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

        if (hasSupabase) {
          updatedServices[0].status = "operational"
          updatedServices[0].description = "Supabase configuré et opérationnel"
          updatedServices[1].status = "operational"
          updatedServices[1].description = "Inscription et connexion fonctionnelles"
        }
      } catch (error) {
        console.error("Erreur vérification Supabase:", error)
      }

      // Vérifier SMTP
      const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD)

      if (hasSmtp) {
        updatedServices[2].status = "operational"
        updatedServices[2].description = "SMTP configuré pour l'envoi d'emails"
      }

      setServices(updatedServices)
    }

    checkServices()
  }, [])

  const getStatusBadge = (status: ServiceStatus["status"]) => {
    switch (status) {
      case "operational":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Opérationnel
          </Badge>
        )
      case "degraded":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <AlertCircle className="w-3 h-3 mr-1" />
            Dégradé
          </Badge>
        )
      case "down":
        return (
          <Badge variant="destructive">
            <XCircle className="w-3 h-3 mr-1" />
            Hors ligne
          </Badge>
        )
    }
  }

  const operationalCount = services.filter((s) => s.status === "operational").length
  const totalServices = services.length
  const overallStatus = operationalCount === totalServices ? "operational" : operationalCount > 0 ? "degraded" : "down"

  return (
    <div className="space-y-6">
      {/* Statut global */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Statut Global de la Plateforme</span>
            {getStatusBadge(overallStatus)}
          </CardTitle>
          <CardDescription>
            {operationalCount}/{totalServices} services opérationnels
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Détail des services */}
      <div className="grid gap-4">
        {services.map((service, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {service.icon}
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
                {getStatusBadge(service.status)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>🚀 Pour activer l'inscription dynamique</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">1. Configurer Supabase</h4>
            <p className="text-sm text-gray-600 mb-2">
              Créez un projet sur{" "}
              <a href="https://supabase.com" className="text-blue-600 underline">
                supabase.com
              </a>
            </p>
            <code className="text-xs bg-gray-100 p-2 rounded block">
              NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
              <br />
              NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
              <br />
              JWT_SECRET=your-secret-key
            </code>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2. Créer les tables</h4>
            <p className="text-sm text-gray-600">
              Exécutez le script <code>scripts/create-database.sql</code> dans Supabase
            </p>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">3. Redémarrer</h4>
            <p className="text-sm text-gray-600">
              Redémarrez le serveur : <code>npm run dev</code>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
