import { useNavigate } from "react-router-dom"

const Portada = () => {

    const navegacion = useNavigate()

    return (
        <div className="principal">
            <h1>BIENVENIDO</h1>
            <button className="boton" onClick={() => navegacion("/juego")}>Jugar</button>
        </div>
    )
}

export default Portada