import { useEffect, useState } from 'react';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/16/solid';

interface ExitoProps {
  titulo: string;
  mensaje: string;
  detalle?: string;
}

export default function RegistroExitoso({ titulo, mensaje, detalle }: ExitoProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ease ${isVisible ? "opacity-100 mb-10" : "opacity-0"}`}>
      <h4 className='text-4xl text-indigo-700 font-semibold text-center'>{titulo}</h4>
      <ClipboardDocumentCheckIcon className="text-indigo-500 h-40 mx-auto my-4" />
      <p className='text-center'>{mensaje} {detalle && <span className='font-semibold text-zinc-700'>{detalle}</span>}</p>
    </div>
  );
}
