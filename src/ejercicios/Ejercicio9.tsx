import { useEffect, useState } from 'react'

type Tarea = {
  texto: string
  completada: boolean
}

function Ejercicio9() {
  const [texto, setTexto] = useState('')

  const [tareas, setTareas] = useState<Tarea[]>(() => {
    const tareasGuardadas = localStorage.getItem('tareas')

    return tareasGuardadas ? JSON.parse(tareasGuardadas) : []
  })

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const agregarTarea = () => {
    if (texto.trim() === '') {
      return
    }

    const nuevaTarea: Tarea = {
      texto: texto,
      completada: false,
    }

    setTareas([...tareas, nuevaTarea])
    setTexto('')
  }

  const cambiarEstado = (indice: number) => {
    const nuevasTareas = tareas.map((tarea, i) => {
      if (i === indice) {
        return {
          ...tarea,
          completada: !tarea.completada,
        }
      }

      return tarea
    })

    setTareas(nuevasTareas)
  }

  const limpiarCompletadas = () => {
    const tareasPendientes = tareas.filter(
      (tarea) => !tarea.completada
    )

    setTareas(tareasPendientes)
  }

  return (
    <div>
      <h1>Lista de tareas</h1>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button onClick={agregarTarea}>
        Agregar tarea
      </button>

      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => cambiarEstado(indice)}
            />

            {tarea.texto}
          </li>
        ))}
      </ul>

      <button onClick={limpiarCompletadas}>
        Limpiar tareas completadas
      </button>
    </div>
  )
}

export default Ejercicio9