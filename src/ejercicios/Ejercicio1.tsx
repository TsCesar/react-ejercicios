import { useState } from 'react';

function App() {
  const[color, setColor] = useState('#ffffff')

  const cambiaColor = () => {
    const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')

    setColor(colorAleatorio)
  }

  return (
    <div style={{
      backgroundColor: color,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <button onClick={cambiaColor}>Cambia de color</button>
    </div>
  )
}

export default App
