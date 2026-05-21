import Nav from './Nav'

export default function Header() {
  return (
    <header className="w-full border-b px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-xl font-bold">Sistema de Currículos</h1>
        <Nav />
      </div>
    </header>
  )
}