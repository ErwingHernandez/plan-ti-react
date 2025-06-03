import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/etiquetas.css';
import '../styles/postyles.css';
import '../styles/tablas.css';

import Modal from '../components/modal.jsx';
import infoparrafos from '../pages/poData.js';



function Part4() {

    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
     const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (index) => {
        setSelectedCardIndex(index);
    }

     const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const modalData = {
        metas: [
            "Responder a los requerimientos del negocio en alineación con la estrategia del negocio",
            "Responder a los requerimientos de gobierno alineados con la dirección del consejo directivo"
        ],
        procesos: [
            "Definir cómo los requerimientos de negocio se traducen en ofertas de servicio",
            "Definir la estrategia para la entrega de las ofertas de servicio",
            "Contribuir a la gestión del portafolio de inversiones de negocio de TI",
            "Establecer claridad del impacto de los riesgos en los objetivos y en los recursos",
            "Proporcionar transparencia y entendimiento de costos, beneficios, estrategias, políticas y niveles de servicio de TI"
        ],
        actividades: [
            "Involucrarse con la alta gerencia y la gerencia del negocio para alinear los planes estratégicos de TI con las necesidades del negocio actuales y futuras",
            "Entender las capacidades actuales de TI",
            "Traducir el plan estratégico de TI a planes tácticos",
            "Brindar un esquema de prioridades para los objetivos del negocio que cuantifiquen los requerimientos del negocio"
        ],
        metricas_ti: [
            "Grado de aprobación de los Dueños del negocio de los planes estratégicos/tácticos de TI",
            "Grado de cumplimiento de requerimientos de gobierno y de negocio",
            "Nivel de satisfacción del negocio con el estado actual del portafolio de proyectos y aplicaciones (número, alcance, etc.)"
        ],
        metricas_procesos: [
            "% de objetivos de TI en el plan estratégico de TI que dan soporte al plan estratégico del negocio",
            "% de iniciativas de TI en el plan táctico de TI que da soporte al plan táctico del negocio",
            "% de proyectos de TI en el portafolio de proyectos de TI que se pueden rastrear de forma directa al plan táctico de TI"
        ],
        metricas_actividades: [
            "Retrasos existentes entre las actualizaciones del plan estratégico/táctico del negocio y las actualizaciones del plan estratégico/táctico de TI",
            "% de reuniones de planeación estratégica/táctica de TI donde los representantes del negocio participaron de forma activa",
            "Retraso entre actualizaciones de planes estratégicos de TI y actualizaciones de planes tácticos de TI",
            "% de planes tácticos de TI con el contenido/estructura predefinida de esos planes",
            "% de iniciativas/proyectos TI dirigidos por Dueños del negocio"
        ]
    };



    // Obtener los datos del PO actualmente seleccionado
    const currentPOData = selectedCardIndex !== null ? infoparrafos[selectedCardIndex] : null;

    return (
        <>
            <div className="contenedor-general">

                <div className="contenedor-tarjetaspo">
                    {/* Renderiza las tarjetas de PO dinámicamente usando el título del infoparrafos */}
                    {infoparrafos.map((po, index) => (
                        <div
                            className={`card-PO ${selectedCardIndex === index ? "selecc" : ""}`}
                            key={index}
                            onClick={() => handleCardClick(index)} // Usa handleCardClick
                        >
                            <span>{po.titulo}</span>
                        </div>
                    ))}
                </div>

                <div className="contenedor-infotarjetas">

                    {currentPOData ? (
                        <>
                            {/* Información general del PO */}
                            <div className="info-po">
                                <h2>{currentPOData.titulo}</h2>
                                {currentPOData.indicadores && currentPOData.indicadores.length > 0 && (
                                    <>
                                        <h3>Indicadores:</h3>
                                        <ul>
                                            {currentPOData.indicadores.map((indicador, indIndex) => (
                                                <li key={indIndex} className="indicador">{indicador}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {currentPOData.contenido && currentPOData.contenido.length > 0 && (
                                    <div className="secciones-contenido">
                                        {currentPOData.contenido.map((contenido, contIndex) => (
                                            <div key={contIndex} className="seccion-subtema-parrafo">
                                                <h3>{contenido.subtema}</h3>
                                                <p>{contenido.parrafo}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>


                            <div className="contenedor-directrices">
                                <h1>Directrices Gerenciales</h1>


                                {currentPOData.tablas && currentPOData.tablas.map((tabla, indexTabla) => (
                                    <div key={indexTabla} className="tabla-dinamica-wrapper"> {/* Nuevo wrapper para cada tabla */}
                                        {tabla.titulo && <h3 className={tabla.tipo === "raci" ? "titulo-matriz" : "titulo-tabla"}>{tabla.titulo}</h3>}
                                        {tabla.subtitulo && <p className="subtitulo-matriz">{tabla.subtitulo}</p>}

                                        {/* Renderizar Tabla de Entradas y Salidas */}
                                        {tabla.tipo === "entradasSalidas" && (
                                            <div className="table-wrapper">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            {tabla.headers && Object.keys(tabla.headers).map((key, hIdx) => (
                                                                <th
                                                                    key={hIdx}
                                                                    colSpan={tabla.headers[key].colSpan}
                                                                    className={tabla.headers[key].className}
                                                                >
                                                                    {tabla.headers[key].text}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                        {tabla.subHeaders && tabla.subHeaders.length > 0 && (
                                                            <tr>
                                                                {tabla.subHeaders.map((subHeader, shIdx) => (
                                                                    <th key={shIdx}>{subHeader}</th>
                                                                ))}
                                                            </tr>
                                                        )}
                                                    </thead>
                                                    <tbody>
                                                        {tabla.data.map((fila, filaIdx) => (
                                                            <tr key={filaIdx}>
                                                                <td>{fila.desde}</td>
                                                                <td>{fila.entradas}</td>
                                                                <td>{fila.salidas}</td>
                                                                {/* Renderizar las columnas de 'hacia' individualmente */}
                                                                {Array.isArray(fila.hacia) ?
                                                                    fila.hacia.map((item, itemIdx) => <td key={itemIdx}>{item}</td>) :
                                                                    <td>{fila.hacia}</td> // Si no es un array (por ejemplo, un solo string)
                                                                }
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                {tabla.nota && <p className="nota-tabla">{tabla.nota}</p>}
                                            </div>
                                        )}

                                        {/* Renderizar Matriz RACI */}
                                        {tabla.tipo === "raci" && (
                                            <div className="table-raci-wrapper">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th rowSpan="2" className="corner-cell">Actividades</th> {/* Puse "Actividades" aquí para que aparezca en la esquina */}
                                                            <th colSpan={tabla.headersPersonas.length} className="funciones-header">Funciones</th>
                                                        </tr>
                                                        <tr>
                                                            {tabla.headersPersonas.map((persona, pIdx) => (
                                                                <th key={pIdx} className="diagonal-header"><span>{persona}</span></th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        
                                                        {tabla.data.map((fila, filaIdx) => (
                                                            <tr key={filaIdx}>
                                                                <td>{fila.actividad}</td>
                                                                {fila.raci.map((valRaci, valIdx) => (
                                                                    <td key={valIdx}>{valRaci}</td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                 <div className="modal-button-container">
                                    <button className="open-modal-button" onClick={handleOpenModal}>
                                        Ver Metas y Métricas
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="home-button-container">
                                <button className="home-button">
                                    Selecciona una tarjeta PO para ver su información detallada.
                                </button>
                            </div>
                        </>


                    )}

            
                </div>
            </div>

              {isModalOpen && <Modal data={modalData} onClose={handleCloseModal} />}
        </>
    );
}

export default Part4;