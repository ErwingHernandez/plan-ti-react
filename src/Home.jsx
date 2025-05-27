
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBookOpen,
    faLightbulb,
    faCode,
    faLayerGroup,
    faBullseye,
    faPaperclip,
    faClipboardList
} from '@fortawesome/free-solid-svg-icons'

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
                <div className='contenedor-general'>


                    {/*Contenedor de las partes */}
                    <div className='contenedor-tarjetas'>
                        <div id='documento'>

                            <div className='card card-styled' onClick={() => handleCardClick("/part1")}>
                                
                                <FontAwesomeIcon icon={faBookOpen} bounce  size="2x" className="icon-hover-bounce"/>
                                <span>Introducción</span>
                            </div>

                            <div className='card card-styled' onClick={() => handleCardClick("/part2")}>
                                <FontAwesomeIcon icon={faLightbulb}  bounce  size="2x" />
                                <span>Marco Teórico</span>
                            </div>

                            <div className='card card-styled' onClick={() => handleCardClick("/part3")}>
                                <FontAwesomeIcon icon={faCode}  bounce  size="2x" />
                                <span>Desarrollo</span>
                            </div>

                            <div className='card card-styled' onClick={() => handleCardClick("/part4")}>
                                <FontAwesomeIcon icon={faLayerGroup}  bounce  size="2x" />
                                <span>Primera Parte</span>
                            </div>



                        </div>


                        <div id='accion' onClick={() => handleCardClick("/planaccion")}>
                            <div id='card5'>Plan de Acción</div>
                        </div>
                    </div>
                    {/*Contenedor de las partes */}


                    {/*Contenedor del panel de la derecha */}
                    <div className='right-panel'>
                        <div className='card card-styled' onClick={() => handleCardClick("/objetivosti")}>
                            <FontAwesomeIcon icon={faBullseye}  bounce  size="2x" />
                            <span>Objetivos TI</span>
                        </div>

                        <div className='card card-styled'>
                            <FontAwesomeIcon icon={faPaperclip}  bounce  size="2x" />
                            <span>Anexos</span>
                        </div>

                    </div>

                    {/*Contenedor del panel de la derecha */}
                </div>

            </motion.div>

        </>
    )
}

export default Home
