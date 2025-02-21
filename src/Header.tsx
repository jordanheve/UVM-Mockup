import { Link } from "react-router"
export default function Header() {
    const styles = "text-white hover:text-gray-300"
  return (
    <header className="w-full bg-indigo-600 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center gap-4">
          <li className={styles}>
            <Link to="/">Inicio</Link>
          </li>
            <li className={styles}>
                <Link to="/Registro">Registro</Link>
            </li>
            <li className={styles}>
                <Link to="Contacto">
                    Contacto
                </Link>
            </li>
            <li className={styles}>
                <Link to="Seguimiento">
                    Seguimiento
                </Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}
