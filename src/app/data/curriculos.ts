export type Curriculo = {
  id: string
  nome: string
  cargo: string
  resumo: string
  email?: string
  telefone?: string
  habilidades?: string[]
  experiencias: { descricao: string }[]
  formacoes: { descricao: string }[]
}

export const curriculos: Curriculo[] = [
  {
    id: "1",
    nome: "Julia Beatriz Almeida de Souza",
    cargo: "Desenvolvedora Front-end",
    resumo: "Experiência com React, Next.js e Tailwind.",
    experiencias: [
      { descricao: "Desenvolvimento de interfaces com React" },
      { descricao: "Criação de layouts responsivos com Tailwind" }
    ],
    formacoes: [{ descricao: "ADS - IFSC" }]
  },
  {
    id: "2",
    nome: "Carlos Souza",
    cargo: "Analista de Sistemas",
    resumo: "Atuação com levantamento de requisitos e testes.",
    experiencias: [
      { descricao: "Levantamento de requisitos com clientes" },
      { descricao: "Testes funcionais e documentação" }
    ],
    formacoes: [{ descricao: "Sistemas de Informação" }]
  },
  {
    id: "3",
    nome: "Marina Oliveira",
    cargo: "UI/UX Designer",
    resumo: "Foco em experiência do usuário e design systems.",
    experiencias: [
      { descricao: "Criação de wireframes e protótipos" },
      { descricao: "Design System no Figma" }
    ],
    formacoes: [{ descricao: "Design Gráfico" }]
  }
]