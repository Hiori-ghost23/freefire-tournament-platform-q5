"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator, Zap } from "lucide-react"

export function PriceCalculator() {
  const [targetDiamonds, setTargetDiamonds] = useState("")
  const [budget, setBudget] = useState("")
  const [result, setResult] = useState<any>(null)

  // Grille tarifaire pour les calculs
  const diamondPacks = [
    { diamonds: 110, price: 900 },
    { diamonds: 231, price: 1600 },
    { diamonds: 341, price: 2500 },
    { diamonds: 462, price: 3200 },
    { diamonds: 572, price: 3500 },
    { diamonds: 693, price: 4500 },
    { diamonds: 840, price: 6000 },
    { diamonds: 1000, price: 7300 },
    { diamonds: 1500, price: 10200 },
    { diamonds: 2000, price: 13600 },
    { diamonds: 2500, price: 18000 },
  ]

  const calculateBestCombination = () => {
    const target = Number.parseInt(targetDiamonds)
    const maxBudget = Number.parseInt(budget)

    if (!target && !maxBudget) return

    let bestCombination = []
    let bestValue = 0

    if (target) {
      // Trouver la meilleure combinaison pour atteindre le nombre de diamants
      const dp = Array(target + 1).fill(Number.POSITIVE_INFINITY)
      const combination = Array(target + 1).fill([])
      dp[0] = 0

      for (let i = 1; i <= target; i++) {
        for (const pack of diamondPacks) {
          if (pack.diamonds <= i && dp[i - pack.diamonds] + pack.price < dp[i]) {
            dp[i] = dp[i - pack.diamonds] + pack.price
            combination[i] = [...combination[i - pack.diamonds], pack]
          }
        }
      }

      bestCombination = combination[target]
      bestValue = dp[target]
    } else if (maxBudget) {
      // Trouver la meilleure combinaison dans le budget
      let maxDiamonds = 0
      for (const pack of diamondPacks) {
        if (pack.price <= maxBudget) {
          const quantity = Math.floor(maxBudget / pack.price)
          const totalDiamonds = quantity * pack.diamonds
          if (totalDiamonds > maxDiamonds) {
            maxDiamonds = totalDiamonds
            bestCombination = Array(quantity).fill(pack)
            bestValue = quantity * pack.price
          }
        }
      }
    }

    setResult({
      combination: bestCombination,
      totalPrice: bestValue,
      totalDiamonds: bestCombination.reduce((sum, pack) => sum + pack.diamonds, 0),
    })
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calculator className="w-5 h-5" />
          <span>Calculateur de Prix</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="diamonds">Diamants souhaités</Label>
          <Input
            id="diamonds"
            type="number"
            placeholder="Ex: 1000"
            value={targetDiamonds}
            onChange={(e) => setTargetDiamonds(e.target.value)}
          />
        </div>

        <div className="text-center text-sm text-gray-500">OU</div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget maximum (CFA)</Label>
          <Input
            id="budget"
            type="number"
            placeholder="Ex: 10000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <Button onClick={calculateBestCombination} className="w-full">
          <Zap className="w-4 h-4 mr-2" />
          Calculer
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-2">Meilleure combinaison :</h4>
            <div className="space-y-1 text-sm">
              {result.combination.map((pack: any, index: number) => (
                <div key={index} className="flex justify-between">
                  <span>{pack.diamonds} 💎</span>
                  <span>{pack.price} CFA</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-2 pt-2 font-semibold">
              <div className="flex justify-between">
                <span>Total: {result.totalDiamonds} 💎</span>
                <span>{result.totalPrice} CFA</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
