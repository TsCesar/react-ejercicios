import { useState } from 'react'

function Ejercicio5() {
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState<string | number>('')

  const validarCampos = () => {
    if (numero1 === '' || numero2 === '') {
      setResultado('Error: completa los dos campos')
      return false
    }

    return true
  }

  const sumar = () => {
    if (!validarCampos()) return

    setResultado(Number(numero1) + Number(numero2))
  }

  const restar = () => {
    if (!validarCampos()) return

    setResultado(Number(numero1) - Number(numero2))
  }

  const multiplicar = () => {
    if (!validarCampos()) return

    setResultado(Number(numero1) * Number(numero2))
  }

  const dividir = () => {
    if (!validarCampos()) return

    if (Number(numero2) === 0) {
      setResultado('Error: no se puede dividir entre cero')
      return
    }

    setResultado(Number(numero1) / Number(numero2))
  }

  return (
    <div>
      <h1>Calculadora sencilla</h1>

      <input
        type="number"
        placeholder="Primer número"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Segundo número"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />

      <div>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
      </div>

      <p>Resultado: {resultado}</p>
    </div>
  )
}

export default Ejercicio5