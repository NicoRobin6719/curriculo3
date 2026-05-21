type Props = {
  value: string
  onChange: (value: string) => void
}

export function CurriculoFiltro({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Buscar por nome ou cargo..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full rounded-lg border border-zinc-800 bg-zinc-900
        py-2 px-4 text-zinc-100
        placeholder:text-zinc-500
        transition
        focus:border-indigo-500 focus:outline-none
        focus:ring-2 focus:ring-indigo-500/30
      "
    />
  )
}