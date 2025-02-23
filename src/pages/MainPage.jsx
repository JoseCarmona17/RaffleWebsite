import { Link } from "react-router-dom"

export const MainPage = () => {

  const packages = [
    { quantity: "x3", price: "$21,000" },
    { quantity: "x5", price: "$35,000" },
    { quantity: "x10", price: "$70,000" },
    { quantity: "x20", price: "$140,000" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between p-4 bg-[#c8d0d0] h-200">
        {/* Logo */}
        <div>
          <img
            src="../../public/Picanto_Sparkling.png"
            alt="Logo"
            className="h-100 w-auto"
          />
          <p className="text-center text-lg" >Juega hasta completar el 70% del objetivo con la loteria de boyaca, boleta de 4 cifras</p>
        </div>

        <section>
          <div className="bg-white p-15 mr-10 rounded-2xl h-120">
            <h1 className="text-5xl font-bold">NEW PICANTO <br /> 2025 // 2026 <br />+ 3.000.000</h1>
            <br />
            <p className="text-lg font-bold text-center">2.000.000 millones de pesos para la persona
              que compre mas boletas</p>
            <br />
            <Link to={"/compra-boleta"}>
              <button className="bg-[#919191] text-black font-semibold px-6 py-4 rounded-md cursor-pointer text-3xl w-full">
                PARTICIPAR
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Tarjetas */}
      <div>
        <p className="font-bold text-5xl text-center mt-8 mb-8">GENERA TUS NUMEROS ALEATORIOS</p>

        <div>
          <div className="grid grid-cols-3 gap-6 p-6 justify-center mr-40 ml-40">
            {packages.slice(0, 3).map((pkg, index) => (
              <div
                key={index}
                className="bg-[#c8d0d0] text-center text-black p-6 rounded-2xl shadow-lg h-70"
              >
                <p className="text-4xl">{pkg.quantity}</p><br />
                <p className="text-6xl font-extrabold">{pkg.price}</p><br />
                <p className="text-black text-lg">Pesos colombianos</p>
                <button className="bg-lime-400 text-black font-bold mt-4 py-2 px-4 rounded">
                  COMPRAR
                </button>
              </div>
            ))}

            {/* Tarjeta inferior centrada */}
            <div className="col-span-3 flex justify-center h-70 w-full">
              <div className="bg-[#c8d0d0] text-center text-black p-6 rounded-2xl shadow-lg w-98">
                <p className="text-4xl">{packages[3].quantity}</p><br />
                <p className="text-6xl font-extrabold">{packages[3].price}</p><br />
                <p className="text-black text-lg">Pesos colombianos</p>
                <button className="bg-lime-400 text-black font-bold mt-4 py-2 px-4 rounded">
                  COMPRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
