import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='documento'>
        <div className='card' id='Card1' >
          1 part
        </div>

        <div className='card' id='Card2'>
          2 part
        </div>

        <div className='card' id='Card3'>
          3 part
        </div>

        <div className='card' id='Card4'>
          4 part
        </div>
    </div>
      
      <div id='accion'>
        <div id='Card5'>
          Plan de Acción
        </div>
      </div>
    </>
  )
}

export default App
