"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { useCurriculos } from "@/hooks/useCurriculos"

export default function NovoCurriculoPage() {
  const router = useRouter()
  const { addCurriculo } = useCurriculos()
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [cargo, setCargo] = useState("")
  const [resumo, setResumo] = useState("")
  const [experiencia, setExperiencia] = useState("")
  const [formacao, setFormacao] = useState("")
  const [habilidades, setHabilidades] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!nome.trim() || !cargo.trim() || !resumo.trim()) {
      return
    }

    addCurriculo({
      nome: nome.trim(),
      email: email.trim() || undefined,
      telefone: telefone.trim() || undefined,
      cargo: cargo.trim(),
      resumo: resumo.trim(),
      experiencias: experiencia
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((descricao) => ({ descricao })),
      formacoes: formacao
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((descricao) => ({ descricao })),
      habilidades: habilidades
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    })

    router.push("/sistema/paginas/curriculos")
  }

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Cadastro de Currículo</h1>

      <form onSubmit={handleSubmit} className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Dados Pessoais</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Nome completo</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className="w-full border rounded-md p-3 bg-zinc-950 text-white"
              placeholder="Ex: João da Silva"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border rounded-md p-3 bg-zinc-950 text-white"
              placeholder="email@exemplo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Cargo</label>
            <input
              type="text"
              value={cargo}
              onChange={(event) => setCargo(event.target.value)}
              className="w-full border rounded-md p-3 bg-zinc-950 text-white"
              placeholder="Ex: Desenvolvedor Front-end"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Telefone</label>
            <input
              type="tel"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
              className="w-full border rounded-md p-3 bg-zinc-950 text-white"
              placeholder="(11) 99999-9999"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Resumo Profissional</h2>

          <textarea
            rows={5}
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
            className="w-full border rounded-md p-3 bg-zinc-950 text-white"
            placeholder="Escreva um resumo sobre sua experiência, perfil e objetivos profissionais..."
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Experiência Profissional</h2>

          <textarea
            rows={6}
            value={experiencia}
            onChange={(event) => setExperiencia(event.target.value)}
            className="w-full border rounded-md p-3 bg-zinc-950 text-white"
            placeholder="Escreva cada experiência em uma linha separada..."
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Formação Acadêmica</h2>

          <textarea
            rows={5}
            value={formacao}
            onChange={(event) => setFormacao(event.target.value)}
            className="w-full border rounded-md p-3 bg-zinc-950 text-white"
            placeholder="Escreva cada formação em uma linha separada..."
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Habilidades</h2>

          <textarea
            rows={4}
            value={habilidades}
            onChange={(event) => setHabilidades(event.target.value)}
            className="w-full border rounded-md p-3 bg-zinc-950 text-white"
            placeholder="Ex: JavaScript, React, Node.js, Comunicação..."
          />
        </section>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800"
          >
            Salvar Currículo
          </button>

          <button
            type="button"
            className="border px-6 py-3 rounded-md"
            onClick={() => router.push('/sistema/paginas/curriculos')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </main>
  )
}
