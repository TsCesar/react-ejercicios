import { useState } from 'react'

function Ejercicio4() {
  const [busqueda, setBusqueda] = useState('')

  const elementos = ['Perro', 'Gato', 'Pez', 'Caballo', 'Conejo']

  const elementosFiltrados = elementos.filter((elemento) =>
    elemento.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div>
      <h1>Filtro de búsqueda</h1>

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {elementosFiltrados.map((elemento, indice) => (
          <li key={indice}>{elemento}</li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio4