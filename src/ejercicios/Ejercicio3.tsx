import { useState } from 'react'

function Ejercicio3() {
  const [texto, setTexto] = useState('')
  const [lista, setLista] = useState<string[]>([])

  const agregarElemento = () => {
    if (texto.trim() === '') {
      return
    }

    setLista([...lista, texto])
    setTexto('')
  }

  const eliminarElemento = (indice: number) => {
    const nuevaLista = lista.filter((_, i) => i !== indice)
    setLista(nuevaLista)
  }

  return (
    <div>
      <h1>Lista dinámica</h1>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo"
      />

      <button onClick={agregarElemento}>
        Agregar
      </button>

      <ul>
        {lista.map((elemento, indice) => (
          <li key={indice}>
            {elemento}

            <button onClick={() => eliminarElemento(indice)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio3