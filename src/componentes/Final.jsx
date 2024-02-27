import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Contexto from "../contexto/Contexto"

const Final = () => {  
  const { laCorrecta } = useContext(Contexto)
  const navegacion = useNavigate()
  return (
    <div className="final">
      <h1>Que mal! respuesta incorrecta</h1>
      <h2>La respuesta correcta era: <strong>{laCorrecta}</strong></h2>
      <div className="imagen">
        <img src='../assets/el_ahorcado6.png' alt="ahorca" />
      </div>
      <button onClick={() => navegacion("/juego")}>Volver a Jugar</button>
    </div>
  )
}

export default Final