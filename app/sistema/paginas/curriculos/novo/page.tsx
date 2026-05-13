"use client"

export default function NovoCurriculoPage() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        Cadastro de Currículo
      </h1>

      <form className="space-y-10">

        {/* DADOS PESSOAIS */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Dados Pessoais
          </h2>

          <div>
            <label className="block text-sm font-medium mb-1">
              Nome completo
            </label>
            <input
              type="text"
              className="w-full border rounded-md p-3"
              placeholder="Ex: João da Silva"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-md p-3"
              placeholder="email@exemplo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Telefone
            </label>
            <input
              type="tel"
              className="w-full border rounded-md p-3"
              placeholder="(11) 99999-9999"
            />
          </div>
        </section>

        {/* RESUMO */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Resumo Profissional
          </h2>

          <textarea
            rows={5}
            className="w-full border rounded-md p-3"
            placeholder="Escreva um resumo sobre sua experiência, perfil e objetivos profissionais..."
          />
        </section>

        {/* EXPERIÊNCIA */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Experiência Profissional
          </h2>

          <textarea
            rows={6}
            className="w-full border rounded-md p-3"
            placeholder="Descreva suas experiências profissionais, cargos, empresas e responsabilidades..."
          />
        </section>

        {/* FORMAÇÃO */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Formação Acadêmica
          </h2>

          <textarea
            rows={5}
            className="w-full border rounded-md p-3"
            placeholder="Cursos, faculdades, instituições, anos de conclusão..."
          />
        </section>

        {/* HABILIDADES */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Habilidades
          </h2>

          <textarea
            rows={4}
            className="w-full border rounded-md p-3"
            placeholder="Ex: JavaScript, React, Node.js, Comunicação, Trabalho em equipe..."
          />
        </section>

        {/* BOTÕES */}
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
          >
            Cancelar
          </button>
        </div>

      </form>
    </main>
  )
}