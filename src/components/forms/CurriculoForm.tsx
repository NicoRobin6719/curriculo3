"use client"

export function CurriculoForm() {
  return (
    <form className="space-y-10">

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dados Pessoais</h2>

        <input
          type="text"
          placeholder="Nome completo"
          className="w-full border rounded-md p-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md p-3"
        />

        <input
          type="tel"
          placeholder="Telefone"
          className="w-full border rounded-md p-3"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Resumo Profissional</h2>
        <textarea rows={5} className="w-full border rounded-md p-3" />
      </section>

      <button
        type="submit"
        className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800"
      >
        Salvar Currículo
      </button>

    </form>
  )
}