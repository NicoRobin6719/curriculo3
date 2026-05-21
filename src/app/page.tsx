import Link from "next/link"

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-180px)] flex flex-col items-center justify-center gap-8 py-16 text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Bem-vindo ao Sistema de Currículos
        </h1>
        <p className="mt-4 text-lg text-zinc-300">
          Visualize, cadastre e gerencie currículos usando um banco de dados local dentro do navegador.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/sistema/paginas/curriculos"
          className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Ver Currículos
        </Link>
        <Link
          href="/sistema/paginas/curriculos/novo"
          className="rounded-full border border-zinc-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Cadastrar Novo
        </Link>
      </div>
    </section>
  )
}
