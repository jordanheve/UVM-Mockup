
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./views/Home";
import Header from "./Header";
import Registro from "./views/Registro";
import Contacto from "./views/Contacto";
import Seguimiento from "./views/Seguimiento";

function App() {


  return (
    <>
      <BrowserRouter>
          <Header />
          <div className="container mx-auto min-h-[calc(100vh-3.5rem)] flex items-center justify-center p-4">
            <Routes>
              <Route path="/" element={<Home />} />      
              <Route path="/Registro" element={<Registro />} /> 
              <Route path="/Contacto" element={<Contacto/>} />
              <Route path="/Seguimiento" element={<Seguimiento/>} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
