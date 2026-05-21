import { Curriculo } from "@/app/data/curriculos"

type Props = {
  curriculo: Curriculo
}

export function CurriculoDetalhe({ curriculo }: Props) {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{curriculo.nome}</h1>
        <p className="text-gray-600">{curriculo.cargo}</p>
      </div>

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