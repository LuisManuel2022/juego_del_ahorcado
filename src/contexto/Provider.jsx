import { useState } from "react"
import Contexto from "./Contexto"

const Provider = ({ children }) => {
    const [laCorrecta, setLaCorrecta] = useState("")

    const escribirCorrecta = (guardar = "") => {
        setLaCorrecta(guardar)
    }
    return (
        <Contexto.Provider value={{
            escribirCorrecta, laCorrecta
        }}>
            {children}
        </Contexto.Provider>
    )
}

export default Provider