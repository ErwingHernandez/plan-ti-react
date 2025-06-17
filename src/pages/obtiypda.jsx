import React, { use, useState } from 'react';
import '../styles/obtiypda.css';

import poData from '../pages/poData.js';


function Obtiypda() {
    const [seccionActiva, setSeccionActiva] = useState("financiero");

    const plan = poData.planAccion;

    return (
        <div className="contenedor-obtiypda">
            <section className="sectionbotones-obtiypda">

                <div className={`botonesobtiypda ${seccionActiva === "financiero" ? "activo" : ""}`} onClick={() => setSeccionActiva("financiero")}>
                    Financiero
                </div>

                <div className={`botonesobtiypda ${seccionActiva === "clientes" ? "activo" : ""}`} onClick={() => setSeccionActiva("clientes")}>
                    Clientes
                </div>

                <div className={`botonesobtiypda ${seccionActiva === "procesosinternos" ? "activo" : ""}`} onClick={() => setSeccionActiva("procesosinternos")}>
                    Procesos Internos
                </div>

                <div className={`botonesobtiypda ${seccionActiva === "aprendizajefeedback" ? "activo" : ""}`} onClick={() => setSeccionActiva("aprendizajefeedback")}>
                    Aprendizaje y Feedback
                </div>

            </section>

            <section className="sectioncontenido-obtiypda">

                {seccionActiva === "financiero" && (
                    <div className='conteneddoresallperspectiv'>
                        {plan
                            .find(p => p.perspectiva.toLowerCase() === "financiero")
                            ?.objetivosNegocio.map((objNeg, index) => (
                                <div key={index} className="fila-objetivo">
                                    <div className="columna-objetivo">
                                        <h4>{objNeg.objetivo}</h4>
                                    </div>
                                    <div className="columna-ti">
                                        <ul>
                                            {objNeg.objetivosTI.map((ti, i) => (
                                                <li key={i}>{ti}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}

                    </div>
                )}

                {seccionActiva === "clientes" && (
                    <div className='conteneddoresallperspectiv'>
                        {plan
                            .find(p => p.perspectiva.toLowerCase() === "clientes")
                            ?.objetivosNegocio.map((objNeg, index) => (
                                <div key={index} className="fila-objetivo">
                                    <div className="columna-objetivo">
                                        <h4>{objNeg.objetivo}</h4>
                                    </div>
                                    <div className="columna-ti">
                                        <ul>
                                            {objNeg.objetivosTI.map((ti, i) => (
                                                <li key={i}>{ti}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}

                    </div>
                )}

                {seccionActiva === "procesosinternos" && (
                    <div className='conteneddoresallperspectiv'>

                        {plan
                            .find(p => p.perspectiva.toLowerCase() === "procesos internos")
                            ?.objetivosNegocio.map((objNeg, index) => (
                                <div key={index} className="fila-objetivo">
                                    <div className="columna-objetivo">
                                        <h4>{objNeg.objetivo}</h4>
                                    </div>
                                    <div className="columna-ti">
                                        <ul>
                                            {objNeg.objetivosTI.map((ti, i) => (
                                                <li key={i}>{ti}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

                {seccionActiva === "aprendizajefeedback" && (
                    <div className='conteneddoresallperspectiv'>

                        {plan
                            .find(p => p.perspectiva.toLowerCase() === "aprendizaje y feedback")
                            ?.objetivosNegocio.map((objNeg, index) => (
                                <div key={index} className="fila-objetivo">
                                    <div className="columna-objetivo">
                                        <h4>{objNeg.objetivo}</h4>
                                    </div>
                                    <div className="columna-ti">
                                        <ul>
                                            {objNeg.objetivosTI.map((ti, i) => (
                                                <li key={i}>{ti}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}

            </section>


        </div>
    );
}

export default Obtiypda;