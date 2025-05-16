import { useState } from "react";
import '../styles/planaccion.css'


const datosPerspectivas = {
    financiera: {
        img: "/public/finanzas.png",
        objetivos: ["Mejorar rentabilidad", "Reducir costos operativos"],
        indicadores: ["ROI", "Margen de beneficio neto"]
    },
    aprendizaje: {
        img: "/public/aprendizaje y feedback.jpg",
        objetivos: ["Capacitar al personal", "Fomentar innovación"],
        indicadores: ["Horas de capacitación", "Número de mejoras implementadas"]
    },
    clientes: {
        img: "/public/cliente.webp",
        objetivos: ["Aumentar satisfacción", "Fidelizar clientes"],
        indicadores: ["NPS", "Tasa de retención"]
    },
    procesos: {
        img: "/public/procesos internos.jpg",
        objetivos: ["Optimizar procesos", "Reducir errores"],
        indicadores: ["Tiempo de ciclo", "Tasa de error"]
    }
};

function Planaccion() {

    const [modalVisible, setModalVisible] = useState(false);
    const [contenidoActual, setContenidoActual] = useState(null);

    const abrirModal = (clave) => {
        setContenidoActual(datosPerspectivas[clave]);
        setModalVisible(true);
    };

    const cerrarModal = () => {
        setModalVisible(false);
        setContenidoActual(null);
    };

    return (
        <div className="cmi-container">
            <div className="cmi-wrapper">
                <div className="cmi-grid">
                    <div className="cmi-box top" onClick={() => abrirModal("financiera")}>
                        <h3>Perspectiva Financiera</h3>
                        <img id="img1" src="/public/finanzas.png" alt="Finanzas" />
                    </div>

                    <div className="cmi-box right" onClick={() => abrirModal("aprendizaje")}>
                        <h3>Aprendizaje y Feedback</h3>
                        <img id="img2" src="/public/aprendizaje y feedback.jpg" alt="Aprendizaje y Feedback" />
                    </div>

                    <div className="cmi-box left" onClick={() => abrirModal("clientes")}>
                        <h3>Perspectiva de los Clientes</h3>
                        <img id="img3" src="/public/cliente.webp" alt="Clientes" />
                    </div>

                    <div className="cmi-box bottom" onClick={() => abrirModal("procesos")}>
                        <h3>Procesos Internos</h3>
                        <img id="img4" src="/public/procesos internos.jpg" alt="Procesos" />
                    </div>
                </div>
            </div>

            {modalVisible && contenidoActual && (
                <div className="modal-overlay" onClick={cerrarModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-left">
                            <img src={contenidoActual.img} alt="Perspectiva" />
                        </div>
                        <div className="modal-right">
                            <h3>Objetivos</h3>
                            <ul>
                                {contenidoActual.objetivos.map((obj, index) => (
                                    <li key={index}>{obj}</li>
                                ))}
                            </ul>
                            <h3>Indicadores</h3>
                            <ul>
                                {contenidoActual.indicadores.map((ind, index) => (
                                    <li key={index}>{ind}</li>
                                ))}
                            </ul>
                        </div>
                        <button className="close-button" onClick={cerrarModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Planaccion;