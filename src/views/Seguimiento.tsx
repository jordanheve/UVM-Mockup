import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
export default function Seguimiento() {
  const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm<{ seguimiento: string }>();
  const [submit, setSubmit] = useState(false);
  const onsubmit: SubmitHandler<{ seguimiento: string }> = () => setSubmit(true);
  return (
    <div>
      <h3 className="text-center text-3xl text-indigo-700 font-semibold">
      Seguimiento de Vacunación
      </h3>
    <p className="pb-4">Consulta el estado de tu vacunación ingresando tu número de seguimiento</p>
    {submit ? (
      <div className="flex flex-col gap-2 w-full max-w-3xl">
        <h4 className="text-2xl text-indigo-700 font-semibold shadow rounded-md p-2 w-full border border-indigo-700 text-center">Estado de Vacunación</h4>
        <div className="flex flex-col gap-4 w-full shadow rounded-md p-3 border border-indigo-700">
          <h5 className="text-xl text-indigo-700 font-semibold">Estatus</h5>
          <p className="text-zinc-800">Vacunado / Pendiente</p>
          <h5 className="text-xl text-indigo-700 font-semibold">📅 Fecha de última dosis</h5>
          <p className="text-zinc-800">XX/XX/XXXX</p>
          <h5 className="text-xl text-indigo-700 font-semibold">💉 Tipo de vacuna aplicada</h5>
          <p className="text-zinc-800">Nombre de la vacuna</p>
          <h5 className="text-xl text-indigo-700 font-semibold">📍 Centro de vacunación</h5>
          <p className="text-zinc-800">Nombre y dirección</p>
          <h5 className="text-xl text-indigo-700 font-semibold">📞 Contacto en caso de efectos secundarios</h5>
          <p className="text-zinc-800">Teléfono de atención</p>
        </div>
      </div>
    ) : (
      <form className="flex flex-col gap-4 w-full shadow rounded-md p-3 border border-indigo-700" onSubmit={handleSubmit(onsubmit)}>
      
      <div className="flex flex-col">
        <label className="text-zinc-800 font-semibold">Número de Seguimiento</label>
        <input className="border-b p-1 outline-0 border-indigo-700" type="text" {...register("seguimiento", { required: true })} />
        {isSubmitted && errors.seguimiento && <span className="text-xs text-red-500">Este campo es requerido</span>} 
      </div>
      <button className="p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 cursor-pointer" type="submit">Consultar</button>
    </form>
    )  
    }
    
    </div>
    
  )
}
