 import { useNavigate } from 'react-router-dom'
//import homeImage from '../assets/el_ahorcado1.png'
const Ganado = () => {

  const navegacion = useNavigate()
  
  return (
    <>
    <h1>Muy bien, ganaste y evitaste la zoga al cuello</h1>
    <div className="imagen">
      <img src={`../assets/el_ahorcado1.png`} alt="" />
    </div>
    <button onClick={() => navegacion("/juego/")}>Volver a jugar</button>
    </>
  )
}

export default Ganado