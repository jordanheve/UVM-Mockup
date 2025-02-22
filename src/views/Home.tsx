import { Link } from "react-router"
export default function Home() {
  return (
    <>
        <div className="flex justify-evenly items-center gap-8 max-lg:flex-col-reverse" >
            <div className="flex flex-col  justify-center items-center gap-4 text-center">
                <h1 className="text-4xl text-indigo-700 font-bold max-w-[40rem]">Bienvenido a tu Plataforma de Vacunación</h1>
                <p className="max-w-[40rem] text-lg mb-6">Tu salud y seguridad son nuestra prioridad. Aseguramos una distribución eficiente, incluyente y ecológica de las vacunas. Regístrate, agenda tu cita y recibe información actualizada sobre tu proceso de vacunación</p>

                <h2 className="font-semibold text-xl text-indigo-700 ">¿Cómo funciona?</h2>
                <ol className="text-left">
                    <li>
                        <strong className="text-zinc-700">Regístrate:</strong> Completa el formulario con tus datos personales
                    </li>
                    <li>
                        <strong  className="text-zinc-700">Agenda tu cita:</strong> Selecciona la fecha y hora de tu cita
                    </li>
                    <li>
                        <strong  className="text-zinc-700">Recibe tu vacuna:</strong> Acude a tu cita y recibe tu vacuna
                    </li>
                    <li>
                        <strong  className="text-zinc-700">Seguimiento:</strong> Consulta tu historial de vacunación
                    </li>
                    
                </ol>
                <Link to="/Registro" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2 text-lg">
                    Registrarse
                </Link>
            </div>
            <img className="rounded-full shadow-xl w-1/2" src="vacuna.avif" alt="vacunarse" />
        </div>
    
      
    </>
  )
}
