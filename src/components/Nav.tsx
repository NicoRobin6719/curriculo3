import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="flex gap-4">
      <Link href="/" className="hover:underline">
        Início
      </Link>

      <Link href="/sistema/paginas/curriculos" className="hover:underline">
        Currículos
      </Link>

      <Link href="/sistema/paginas/curriculos/novo" className="hover:underline">
        Novo Currículo
      </Link>
    </nav>
  )
}