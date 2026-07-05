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
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function Filters() {
  const router = useRouter()
  const params = useSearchParams()

  const [name, setName] = useState(params.get("name") ?? "")
  const [category, setCategory] = useState(params.get("category") ?? "")
  const [duration, setDuration] = useState(params.get("duration") ?? "")

  function applyFilters() {
    const query = new URLSearchParams()

    if (name) query.set("name", name)
    if (category) query.set("category", category)
    if (duration) query.set("duration", duration)

    router.push(`?${query.toString()}`)
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 items-end p-4 border rounded-xl bg-white">

      {/* Nome */}
      <div className="flex flex-col w-full md:w-1/3">
        <Input
          placeholder="Cerca corso..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Categoria */}
      <div className="w-full md:w-1/4">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fitness">Fitness</SelectItem>
            <SelectItem value="yoga">Yoga</SelectItem>
            <SelectItem value="boxe">Boxe</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Durata */}
      <div className="w-full md:w-1/4">
        <Select value={duration} onValueChange={setDuration}>
          <SelectTrigger>
            <SelectValue placeholder="Durata" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30">30 min</SelectItem>
            <SelectItem value="60">60 min</SelectItem>
            <SelectItem value="90">90 min</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={applyFilters}>
        Filtra
      </Button>
    </div>
  )
}