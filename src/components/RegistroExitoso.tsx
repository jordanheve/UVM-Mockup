import {useEffect, useState} from 'react'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/16/solid'
export default function RegistroExitoso() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Pequeño retraso para activar la animación
  }, []);
  return (
    <div className={`transition-opacity duration-1000 ease ${isVisible ? "opacity-100 mb-10" : "opacity-0"}`}>
      <h4 className='text-4xl text-indigo-700 font-semibold text-center'>¡Te has registrado con Exito!</h4>
      <ClipboardDocumentCheckIcon className="text-indigo-500 h-40 mx-auto my-4" />
      <p className='text-center'>Numero de Registro: <span className='font-semibold text-zinc-700'>123456</span></p>
    </div>
  )
}
