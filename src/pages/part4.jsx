import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/postyles.css';
import '../styles/tablas.css';

import Modal from '../components/modal.jsx';
import Allinfo from '../pages/poData.js';



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



    const infoparrafos = Allinfo.infoparrafos;

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

                                {currentPOData.meetasymetricas && currentPOData.meetasymetricas.map((meta, index) => (
                                    <div key={index} className="ficha-metas">
                                        <h3>{meta.titulo}</h3>
                                        <p className="subtema-metas">{meta.subtema}</p>
                                        <ul className="lista-metricas">
                                            {meta.metricas.map((metrica, idx) => (
                                                <li key={idx}>{metrica}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}


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

            {isModalOpen && <Modal data={currentPOData} onClose={handleCloseModal} />}
        </>
    );
}

export default Part4;