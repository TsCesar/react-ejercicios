import { useState } from "react";

function Ejercicio2() {
    const[clicks, setClicks] = useState(0)

    const contarClicks = () => {
        setClicks(clicks + 1)
    }

    return (
        <div>
            <h1>Contador de clics</h1>

            <p>Clics: {clicks}</p>

            <button onClick={contarClicks}>Contar clics</button>
    </div>
    )
}

export default Ejercicio2
