"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { FiSearch, FiUser } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useCurriculos } from '@/hooks/useCurriculos'

export default function ListaCurriculosPage() {
  const [busca, setBusca] = useState('')
  const { curriculos } = useCurriculos()

  const curriculosFiltrados = useMemo(
    () =>
      curriculos.filter((curriculo) =>
        curriculo.nome.toLowerCase().includes(busca.toLowerCase()) ||
        curriculo.cargo.toLowerCase().includes(busca.toLowerCase())
      ),
    [busca, curriculos]
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-zinc-950 p-8 text-zinc-100"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <h1 className="text-3xl font-bold tracking-tight">Currículos</h1>

        <Link
          href="/sistema/paginas/curriculos/novo"
          className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-500 hover:scale-105"
        >
          + Novo Currículo
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative mb-8 max-w-md"
      >
        <FiSearch className="absolute left-3 top-3 text-zinc-400" />
        <input
          type="text"
          placeholder="Buscar por nome ou cargo..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-2 pl-10 pr-4 text-zinc-100 placeholder:text-zinc-500 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        />
      </motion.div>

      {curriculosFiltrados.length === 0 ? (
        <p className="text-zinc-400">Nenhum currículo encontrado.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curriculosFiltrados.map((curriculo, index) => (
            <motion.div
              key={curriculo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={`/sistema/paginas/curriculos/${curriculo.id}`}
                className="block rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <div className="mb-3 flex items-center gap-2 text-indigo-400">
                  <FiUser />
                  <h2 className="text-lg font-semibold text-zinc-100">{curriculo.nome}</h2>
                </div>
                <p className="font-medium text-zinc-300">{curriculo.cargo}</p>
                <p className="mt-2 text-sm text-zinc-400">{curriculo.resumo}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
