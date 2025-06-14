import React from 'react';
import '../styles/Modal.css'; 

const Modal = ({ data, onClose }) => {
    if (!data) {
        return null; // Si no hay datos, no renderizamos nada
    }
    return (
        <div className="modal-overlaypo" onClick={onClose}>

            <div className="modal-contentpo" onClick={(e) => e.stopPropagation()}>

                <button className="modal-close-buttonpo" onClick={onClose}>X</button>

                <div className='tituloslateral1po'>Metas</div>
                <div className='tituloslateral2po'>Metricas</div>
                <div className="modal-sections-containerpo">
                    <div className="modal-columnpo">
                        <div className="modal-sectionpo modal-metaspo">
                            <h3>TI</h3>
                            <ul>
                                {data.metas.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-sectionpo modal-metricas-tipo">
                            {/*Métricas */}

                            <ul>
                                {data.metricas_ti.map((metrica, index) => (
                                    <li key={index}>{metrica}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                  

                    <div className="modal-columnpo">
                        <div className="modal-sectionpo modal-procesospo">
                            <h3>Procesos</h3>
                            <ul>
                                {data.procesos.map((proceso, index) => (
                                    <li key={index}>{proceso}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-sectionpo modal-metricas-procesospo">
                            {/*Métricas */}
                            <ul>
                                {data.metricas_procesos.map((metrica, index) => (
                                    <li key={index}>{metrica}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    

                    <div className="modal-columnpo">
                        <div className="modal-sectionpo modal-actividadespo">
                            <h3>Actividades</h3>
                            <ul>
                                {data.actividades.map((actividad, index) => (
                                    <li key={index}>{actividad}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="modal-sectionpo modal-metricas-actividadespo">
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