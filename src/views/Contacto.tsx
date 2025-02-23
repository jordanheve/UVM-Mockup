import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import RegistroExitoso from "../components/RegistroExitoso";
export default function Contacto() {

  type FormContacto = {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
  }
  
  const [submited, setSubmited] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm<FormContacto>();
  const onSubmit: SubmitHandler<FormContacto> = () => setSubmited(true);
  const inputStyle = "border-b p-1 outline-0 border-indigo-700";
  return (
    <div className="flex max-md:flex-col gap-4">
      <div className="md: w-1/2">
      <h4 className="text-3xl text-indigo-700 font-semibold">Contacto</h4>
      <p className="max-w-4xl">Estamos aquí para brindarte información sobre el proceso de vacunación. Si necesitas asistencia, ya sea para resolver dudas, agendar una cita o conocer más sobre los efectos de la vacuna, no dudes en contactarnos. Nuestro equipo está disponible para apoyarte y garantizar que el proceso sea accesible para todos.</p>
      <h6 className="text-xl font-semibold text-indigo-700 mt-10">Información de contacto</h6>
      <ul>
        <li>
          <strong className="text-zinc-700">Dirección:</strong> Calle Ficticia #123, Ciudad, Estado, C.P. 00000
        </li>
        <li>
          <strong className="text-zinc-700">Teléfono:</strong> 55 1234 5678
        </li>
        <li>
          <strong className="text-zinc-700">Correo electrónico:</strong> : contacto@vacunacionmx.com
        </li>
        <li>
          <strong className="text-zinc-700">Horario de atención:</strong> Lunes a viernes de 9:00 a 18:00 hrs.
        </li>
      </ul>
     
      </div>
      <div className="md: w-1/2">
        {!submited ? (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full shadow rounded-md p-3 border border-indigo-700">
            <div className="flex flex-col">
              <label className="text-zinc-800 font-semibold">Nombre Completo</label>
              <input type="text" className={inputStyle} {...register("nombre", { required: true })} placeholder="Nombre Completo" />
              {isSubmitted && errors.nombre && <span className="text-red-500 text-left text-xs">Este campo es requerido</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-zinc-800 font-semibold">Correo Electrónico</label>
              <input type="text" className={inputStyle} {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} placeholder="Correo Electrónico" />
              {isSubmitted && errors.email && errors.email.type === "required" && <span className="text-red-500 text-left text-xs">Este campo es requerido</span>}
              {isSubmitted && errors.email && errors.email.type === "pattern" && <span className="text-red-500 text-left text-xs">Formato de correo inválido</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-zinc-800 font-semibold">Teléfono</label>
              <input type="text" className={inputStyle} {...register("telefono", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Teléfono" />
              {isSubmitted && errors.telefono && errors.telefono.type === "required" && <span className="text-red-500 text-left text-xs">Este campo es requerido</span>}
              {isSubmitted && errors.telefono && errors.telefono.type === "pattern" && <span className="text-red-500 text-left text-xs">Formato de teléfono inválido</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-zinc-800 font-semibold">Mensaje</label>
              <textarea className={inputStyle} {...register("mensaje", { required: true })} placeholder="Mensaje" />
              {isSubmitted && errors.mensaje && <span className="text-red-500 text-left text-xs">Este campo es requerido</span>}
            </div>
            <button type="submit" className="p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 cursor-pointer">
              Enviar
            </button>
          </form>
        ) : (
          <RegistroExitoso titulo="¡Mensaje Enviado!" mensaje="En breve nos pondremos en contacto"  />
        )}
      </div>
    </div>
  )
}
