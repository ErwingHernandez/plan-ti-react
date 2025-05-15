import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Part1 from './pages/part1'
import Part2 from './pages/part2'
import Part3 from './pages/part3'
import Part4 from './pages/part4'
import Inventario from './pages/inventario'
import Planaccion from './pages/planaccion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part1" element={<Part1 />} />
        <Route path="/part2" element={<Part2 />} />
        <Route path="/part3" element={<Part3 />} />
        <Route path="/part4" element={<Part4 />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/planaccion" element={<Planaccion />} />
        
      </Routes>
    </Router>
  )
}

export default App
