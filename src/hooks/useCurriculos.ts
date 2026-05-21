"use client"

import { useEffect, useMemo, useState } from "react"
import { curriculos as defaultCurriculos, Curriculo } from "@/app/data/curriculos"

const STORAGE_KEY = "@curriculo3/curriculos"

export function useCurriculos() {
  const [curriculos, setCurriculos] = useState<Curriculo[]>(() => {
    if (typeof window === "undefined") {
      return defaultCurriculos
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        return defaultCurriculos
      }

      return JSON.parse(stored) as Curriculo[]
    } catch {
      return defaultCurriculos
    }
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(curriculos))
  }, [curriculos])

  const addCurriculo = (data: Omit<Curriculo, "id">) => {
    setCurriculos((current) => {
      const nextId = current.length > 0
        ? String(Math.max(...current.map((item) => Number(item.id))) + 1)
        : "1"

      return [...current, { ...data, id: nextId }]
    })
  }

  const findCurriculoById = (id: string) => {
    return curriculos.find((item) => item.id === id)
  }

  return useMemo(() => ({ curriculos, addCurriculo, findCurriculoById }), [curriculos])
}
