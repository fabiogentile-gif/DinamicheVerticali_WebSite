import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function CardCorsi() {
  return (
    <Card className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md">

      {/* Header / Logo */}
      <div className="flex justify-center items-center py-6">
        <div className="h-12 w-32 bg-muted rounded-md flex items-center justify-center text-sm">
          LOGO
        </div>
      </div>

      <CardContent className="space-y-4">
        {/* Tags */}
        <div className="flex justify-between">
          <Badge variant="secondary">IRATA</Badge>
          <Badge variant="outline">LUGLIO</Badge>
        </div>

        {/* Titolo */}
        <div>
          <h3 className="text-lg font-semibold">
            Certificazione IRATA L1/L2/L3
          </h3>
        </div>

        {/* Descrizione */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          Descrizione in due righe del corso con informazioni principali e focus
          sull’esperienza formativa.
        </p>

        {/* Info */}
        <div className="space-y-1 text-sm">
          <p>📅 13 Lug 2026</p>
          <p>⏱ 4 gg + 1 esame</p>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-between items-center">
        <Button variant="link" className="px-0">
          Leggi il corso
        </Button>
        <span className="text-lg">→</span>
      </CardFooter>
    </Card>
  )
}