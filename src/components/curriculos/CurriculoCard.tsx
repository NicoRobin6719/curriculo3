import Link from "next/link"
import { FiUser } from "react-icons/fi"
import { Curriculo } from "@/app/data/curriculos"

type Props = {
  curriculo: Curriculo
}

export function CurriculoCard({ curriculo }: Props) {
  return (
    <Link
      href={`/sistema/paginas/curriculos/${curriculo.id}`}
      className="
        block rounded-xl border border-zinc-800 bg-zinc-900 p-6
        transition-all duration-300
        hover:border-indigo-500
        hover:shadow-xl hover:shadow-indigo-500/20
      "
    >
      <div className="mb-3 flex items-center gap-2 text-indigo-400">
        <FiUser />
        <h2 className="text-lg font-semibold text-zinc-100">
          {curriculo.nome}
        </h2>
      </div>

      <p className="font-medium text-zinc-300">
        {curriculo.cargo}
      </p>

      <p className="mt-2 text-sm text-zinc-400">
        {curriculo.resumo}
      </p>
    </Link>
  )
}