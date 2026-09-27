import { useState } from 'react'

function Ejercicio8() {
  const [texto, setTexto] = useState('')

  const palabras =
    texto.trim() === ''
      ? 0
      : texto.trim().split(/\s+/).length

  const caracteres = texto.replace(/\s/g, '').length

  return (
    <div>
      <h1>Contador de palabras y caracteres</h1>

      <textarea
        placeholder="Escribe un párrafo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={6}
        cols={40}
      />

      <p>Palabras: {palabras}</p>
      <p>Caracteres: {caracteres}</p>
    </div>
  )
}

export default Ejercicio8