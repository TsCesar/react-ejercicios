import { useEffect, useState } from 'react'

function Ejercicio6() {
  const [segundos, setSegundos] = useState(0)
  const [activo, setActivo] = useState(false)

  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval> | undefined

    if (activo) {
      intervalo = setInterval(() => {
        setSegundos((segundosActuales) => segundosActuales + 1)
      }, 1000)
    }

    return () => {
      if (intervalo) {
        clearInterval(intervalo)
      }
    }
  }, [activo])

  const iniciar = () => {
    setActivo(true)
  }

  const pausar = () => {
    setActivo(false)
  }

  const reiniciar = () => {
    setActivo(false)
    setSegundos(0)
  }

  const horas = Math.floor(segundos / 3600)
  const minutos = Math.floor((segundos % 3600) / 60)
  const segundosRestantes = segundos % 60

  const formatoTiempo = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`

  return (
    <div>
      <h1>Temporizador</h1>

      <h2>{formatoTiempo}</h2>

      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default Ejercicio6