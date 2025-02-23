import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Logo */}
      <img
        src="/ruta-del-logo.png"
        alt="Logo"
        className="h-24 w-auto"
      />

      {/* Botón */}
      <Link to={"/buscar-boleta"}>
        <button className="bg-[#919191] mr-30 text-white font-semibold px-6 py-4 rounded-md cursor-pointer text-lg">
          Buscar boleta
        </button>
      </Link>
    </div>
  )
}
