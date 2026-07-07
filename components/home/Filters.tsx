"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { Corsi } from "@/data/data"


export default function Filters() {
  const router = useRouter()
  const params = useSearchParams()

  const parsed = Number(params.get("duration"));

  const [name, setName] = useState(params.get("name") ?? "")
  const [category, setCategory] = useState(params.get("category") ?? "")
  const [duration, setDuration] = useState<number[]>([Number.isFinite(parsed) && parsed > 0 ? parsed : 10,]);

  function applyFilters() {
    const query = new URLSearchParams()

    if (name) query.set("name", name)
    if (category) query.set("category", category)
    if (duration) { query.set("duration", String(duration[0]))}

    router.push(`?${query.toString()}`, { scroll: false })
  }

  function cleanFilters() {
    setName("")
    setCategory("")
    setDuration([0])

    router.push("?page=1", { scroll: false })

  }


  return (
    <div className="w-full flex flex-col md:flex-row gap-4 items-end p-4 border rounded-xl bg-white">

      {/* Ricerca per titolo */}
      <div className="flex-2">
        <Input
          placeholder="Cerca corso..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-11"
        />
      </div>

      {/* Categoria */}
      <div className="flex-1">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>

          <SelectContent>
            {Corsi.map((cat) => (
              <SelectItem key={cat.title} value={cat.title}>
                {cat.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Durata */}
      <div className="flex-1">
        <div className="flex flex-col gap-1">
          <span className="text-l text-muted-foreground">
            Durata: {duration[0]} giorni
          </span>

          <Slider
            value={duration}
            min={1}
            max={10}
            step={1}
            onValueChange={setDuration}
          />
        </div>
      </div>

      {/* Bottoni */}
      <div className="flex gap-2">
        <Button onClick={applyFilters} className="h-11 px-5">
          Filtra
        </Button>

        <Button
          onClick={cleanFilters}
          variant="outline"
          className="h-11 px-5"
        >
          Pulisci
        </Button>
      </div>

    </div >
  )
}