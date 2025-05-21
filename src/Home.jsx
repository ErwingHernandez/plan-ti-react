import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function Home() {

    const [animateOut, setAnimateOut] = useState(false)
    const navigate = useNavigate()

    const handleCardClick = (path) => {
        setAnimateOut(true)
        setTimeout(() => {
            navigate(path)
        }, 500) // Espera que termine la animación
    }

    return (
        <>

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={animateOut
                    ? { opacity: 0, scale: 0.9, x: 100 } // animación de salida personalizada
                    : { opacity: 1, scale: 1, x: 0 }     // animación de entrada
                }
                transition={{ duration: 0.5 }}
            >
                <div id='documento'>
                    <div className='card' id='Card1' onClick={() => handleCardClick("/part1")}>
                        Introducción
                    </div>

                    <div className='card' id='Card2' onClick={() => handleCardClick("/part2")}>
                        Marco Teórico
                    </div>

                    <div className='card' id='Card3' onClick={() => handleCardClick("/part3")}>
                        Desarrollo
                    </div>

                    <div className='card' id='Card4' onClick={() => handleCardClick("/part4")}>
                        1 part
                    </div>
                </div>

                <div id='accion' onClick={() => handleCardClick("/planaccion")}>
                    <div id='card5'>Plan de Acción</div>
                </div>

                <div id='inventario' onClick={() => handleCardClick("/inventario")}>
                    Inventario
                </div>
            </motion.div>

        </>
    )
}

export default Home
