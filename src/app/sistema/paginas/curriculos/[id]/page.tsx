import { curriculos } from "@/app/data/curriculos"

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function CurriculoDetalhes({ params }: PageProps) {
  const { id } = await params

  const curriculo = curriculos.find(c => c.id === id)

  if (!curriculo) {
    return (
      <div className="p-8">
        <h1 className="text-xl font-bold">
          Currículo não encontrado
        </h1>
        <p>ID recebido: {id}</p>
      </div>
    )
  }

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">{curriculo.nome}</h1>
      <p className="text-gray-600">{curriculo.cargo}</p>
      <p>{curriculo.resumo}</p>

      <div>
        <strong>Experiências</strong>
        <ul className="list-disc ml-6">
          {curriculo.experiencias.map((e, i) => (
            <li key={i}>{e.descricao}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Formações</strong>
        <ul className="list-disc ml-6">
          {curriculo.formacoes.map((f, i) => (
            <li key={i}>{f.descricao}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}