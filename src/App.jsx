import { Route, Routes } from "react-router-dom"
import Portada from "./componentes/Portada"
import Juego from "./componentes/Juego"
import Provider from "./contexto/Provider"
import Ganado from "./componentes/Ganado"
import Final from "./componentes/Final"

function App() {

  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/ganado" element={<Ganado/>} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Provider>
  )
}

export default App
