import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Part1 from './pages/part1'
import Part2 from './pages/part2'
import Part3 from './pages/part3'
import Part4 from './pages/part4'
import ObjetivosTi from './pages/objetivosti.jsx'
import Planaccion from './pages/planaccion'
import Anexos from './pages/anexos.jsx'
import Backgroundslides from './components/backgroundslides.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
           <Backgroundslides />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part1" element={<Part1 />} />
        <Route path="/part2" element={<Part2 />} />
        <Route path="/part3" element={<Part3 />} />
        <Route path="/part4" element={<Part4 />} />
        <Route path="/objetivosti" element={<ObjetivosTi />} />
        <Route path="/planaccion" element={<Planaccion />} />
        <Route path="/anexos" element={<Anexos />} />
        
      </Routes>
    </Router>
  )
}

export default App
