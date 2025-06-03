import React from 'react';
import '../styles/Modal.css'; // Crearemos este archivo CSS en el siguiente paso

const Modal = ({ data, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="modal-close-button" onClick={onClose}>X</button>

                <div className='tituloslateral1'>Metas</div>
                <div className='tituloslateral2'>Metricas</div>
                <div className="modal-sections-container">
                    <div className="modal-column">
                        <div className="modal-section modal-metas">
                            <h3>TI</h3>
                            <ul>
                                {data.metas.map((meta, index) => (
                                    <li key={index}>{meta}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-section modal-metricas-ti">
                            {/*Métricas */}

                            <ul>
                                {data.metricas_ti.map((metrica, index) => (
                                    <li key={index}>{metrica}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="modal-arrow-container">
                        <span className="modal-arrow horizontal">→</span>
                        <span className="modal-arrow diagonales">↓</span>
                    </div>

                    <div className="modal-column">
                        <div className="modal-section modal-procesos">
                            <h3>Procesos</h3>
                            <ul>
                                {data.procesos.map((proceso, index) => (
                                    <li key={index}>{proceso}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-section modal-metricas-procesos">
                            {/*Métricas */}
                            <ul>
                                {data.metricas_procesos.map((metrica, index) => (
                                    <li key={index}>{metrica}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="modal-arrow-container">
                        <span className="modal-arrow horizontal">→</span>
                        <span className="modal-arrow abajo">↓</span>
                        <span className="modal-arrow abajo">↓</span>
                    </div>

                    <div className="modal-column">
                        <div className="modal-section modal-actividades">
                            <h3>Actividades</h3>
                            <ul>
                                {data.actividades.map((actividad, index) => (
                                    <li key={index}>{actividad}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-section modal-metricas-actividades">
                            {/*Métricas */}
                            <ul>
                                {data.metricas_actividades.map((metrica, index) => (
                                    <li key={index}>{metrica}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;