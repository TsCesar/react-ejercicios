import { useState } from 'react'

function Ejercicio7() {
  const [longitud, setLongitud] = useState('')
  const [resultado, setResultado] = useState('')

  const generarContrasena = () => {
    if (longitud === '' || Number(longitud) < 4) {
      setResultado('Error: la longitud debe ser mayor o igual a 4')
      return
    }

    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-='

    let contrasena = ''

    for (let i = 0; i < Number(longitud); i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length)
      contrasena += caracteres[indiceAleatorio]
    }

    setResultado(contrasena)
  }

  return (
    <div>
      <h1>Generador de contraseñas</h1>

      <input
        type="number"
        placeholder="Longitud de la contraseña"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
      />

      <button onClick={generarContrasena}>
        Generar contraseña
      </button>

      <p>{resultado}</p>
    </div>
  )
}

export default Ejercicio7