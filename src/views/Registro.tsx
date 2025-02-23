import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import RegistroExitoso from "../components/RegistroExitoso";
type IFormInput = {
  nombre: string;
  curp: string;
  email: string;
  telefono: string;
  edad: number;
};

export default function Registro() {
  const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm<IFormInput>();
  const [isRegistered, setIsRegistered] = useState(false);
  const onSubmit: SubmitHandler<IFormInput> = () => setIsRegistered(true);
  const inputStyle = "border-b p-1 outline-0 border-indigo-700";
  return (
    <>
    {!isRegistered ? (
      <div className="flex flex-col justify-center items-center gap-4 text-center w-full max-w-3xl">
      
      <h3 className="text-2xl text-indigo-700 font-semibold shadow rounded-md p-2 w-full border border-indigo-700">Formulario de Registro</h3>
      <form className=" text-left flex flex-col gap-4 w-full shadow rounded-md p-3 border border-indigo-700" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="text-zinc-800 font-semibold">Nombre Completo</label>
          <input type="text" className={inputStyle} {...register("nombre", { required: true })} placeholder="Nombre Completo" />
          {isSubmitted && errors.nombre && <span className="text-red-500 text-left text-xs">Este campo es requerido</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-zinc-800 font-semibold">CURP</label>
          <input type="text" id="CURP" className={inputStyle} placeholder="CURP" {...register('curp', { required: true, pattern: /^[A-Z]{4}\d{6}[A-Z]{6}\d{2}$/ })} />
          {isSubmitted && errors.curp && errors.curp.type === "required" && <span className="text-red-500 text-left text-xs">Este campo es requerido</span>}
          {isSubmitted && errors.curp && errors.curp.type === "pattern" && <span className="text-red-500 text-left text-xs">Formato de CURP inválido</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-zinc-800 font-semibold">Edad</label>
          <input type="number" className={inputStyle} {...register("edad", { required: true, min: 18 })} placeholder="Edad" />
          {isSubmitted && errors.edad && errors.edad.type === "required" && <span className="text-red-500 text-left text-xs">Este campo es requerido</span>}
          {isSubmitted && errors.edad && errors.edad.type === "min" && <span className="text-red-500 text-left text-xs">Debes ser mayor de edad</span>}
        </div>
        <div className="flex flex-col">
          <label className="text-zinc-800 font-semibold">Correo Electrónico</label>
          <input type="text" className={inputStyle} {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} placeholder="Correo Electrónico" />
          {isSubmitted && errors.email && errors.email.type === "required" && <span className="text-red-500 text-left text-xs">Este campo es requerido</span>}
          {isSubmitted && errors.email && errors.email.type === "pattern" && <span className="text-red-500 text-left text-xs">Formato de correo inválido</span>}
        </div>
        <button type="submit" className="p-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 cursor-pointer">
          Enviar
        </button>
      </form>
    </div> 
    ) : 
    (
        <RegistroExitoso titulo="¡Te has registrado con Exito!" mensaje="Numero de Registro" detalle="123456"  />
    ) 

    }
  </>
    
  )
}
