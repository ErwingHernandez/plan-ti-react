
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
    faClipboardList,
    faCircleNodes,
    faShareNodes,
    faArrowsRotate,
    faPlug,
    faNetworkWired,
    faSitemap
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

                                <FontAwesomeIcon icon={faBookOpen}  size="2x" className="icon-hover-bounce" />
                                <span>Introducción</span>
                            </div>

                            <div className='card card-styled' onClick={() => handleCardClick("/part2")}>
                                <FontAwesomeIcon icon={faLightbulb}  size="2x" />
                                <span>Marco Teórico</span>
                            </div>

                            <div className='card card-styled' onClick={() => handleCardClick("/part3")}>
                                <FontAwesomeIcon icon={faCode}  size="2x" />
                                <span>Desarrollo</span>
                            </div>

                            <div className='card card-styled' onClick={() => handleCardClick("/part4")}>
                                <FontAwesomeIcon icon={faLayerGroup}  size="2x" />
                                <span>PO</span>
                            </div>



                        </div>


                        <div id='accion' onClick={() => handleCardClick("/planaccion")}>
                            <FontAwesomeIcon icon={faSitemap}  size="2x" />
                            <span>Plan de Acción</span>
                        </div>
                    </div>
                    {/*Contenedor de las partes */}


                    {/*Contenedor del panel de la derecha */}
                    <div className='right-panel'>
                        <div className='card card-styled' onClick={() => handleCardClick("/objetivosti")}>
                            <FontAwesomeIcon icon={faBullseye}  size="2x" />
                            <span>Objetivos TI</span>
                        </div>

                        <div className='card card-styled' onClick={() => handleCardClick("/anexos")}>
                            <FontAwesomeIcon icon={faPaperclip}  size="2x" />
                            <span>Anexos</span>
                        </div>

                    </div>

                    {/*Contenedor del panel de la derecha */}
                </div>

                <div className='left-panel'>

                    <div className='card card-styled' onClick={() => handleCardClick("/Objtiypdc")}>
                        <FontAwesomeIcon icon={faShareNodes}  size="2x" />
                        <span>OBTI & PDC</span>
                    </div>

                </div>

            </motion.div>

        </>

    )
}

export default Home
