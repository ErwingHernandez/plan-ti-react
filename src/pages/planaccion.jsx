import { useState } from "react";
import { Link } from 'react-router-dom'
import '../styles/planaccion.css'


const datosPerspectivas = {
    financiera: {
        img: "/public/finanzas.png",
        objetivos: ["Reducir el costo total de mantenimiento correctivo.",
            "Aumentar el retorno de inversión del sistema de gestión tecnológica. ",
            "Disminuir el costo promedio por equipo fuera de servicio. ",
            "Generar ahorros sostenidos mediante el mantenimiento preventivo. ",
        ],
        indicadores: ["% costo (mensual, semestral, anual) por mantenimiento correctivo.",
            "Cálculo de retorno de inversión (Beneficio-Inversión)",
            "Costo promedio por equipo fuera de servicio.",
            "Ahorro generado por mantenimiento preventivo."]
    },

    aprendizaje: {
        img: "/public/aprendizaje y feedback.jpg",
        objetivos: ["Implementar un plan de formación continua para el personal que trabaja en los laboratorios del pabellón 16, iniciando en el segundo semestre de 2025, con capacitaciones semestrales sobre el uso, mantenimiento y cuidado de los equipos, así como medidas básicas de seguridad informática, con el fin de fortalecer sus habilidades técnicas de forma progresiva durante un período de cinco años. "],
        indicadores: ["Tasa de participación en capacitaciones. ",
            "Nivel de satisfacción del personal capacitado. ",
            "Porcentaje de mejora técnica detectada.",
            "Avance en cumplimiento del plan de formación a 5 años. "]
    },

    clientes: {
        img: "/public/cliente.webp",
        objetivos: ["Aumentar en un 20% la percepción de confiabilidad del servicio tecnológico ofrecido.",
            "Promover el uso responsable y adecuado de los recursos tecnológicos, reduciendo un 90% en número de incidentes.",
            "Garantizar la actualización de software educativo según necesidades requeridas por los usuarios.",
            "Mejorar en un 80% la disponibilidad de equipos y conectividad durante el horario académico.",
        ],
        indicadores: ["% de satisfacción del usuario en encuestas semestrales.",
            "Nº de incidencias por mal uso / Nº total de sesiones registradas.",
            "% de softwares requeridos que están disponibles y actualizados.",
            "% de disponibilidad de equipos funcionales durante el horario de clase.",
        ]
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
                        <img id="img1" src="/finanzas.png" alt="Finanzas" />
                    </div>

                    <div className="cmi-box right" onClick={() => abrirModal("aprendizaje")}>
                        <h3>Aprendizaje y Feedback</h3>
                        <img id="img2" src="/aprendizaje y feedback.jpg" alt="Aprendizaje y Feedback" />
                    </div>

                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button className="btn-volver" >Pagina Principal</button>
                    </Link>
                    
                    <div className="cmi-box left" onClick={() => abrirModal("clientes")}>
                        <h3>Perspectiva de los Clientes</h3>
                        <img id="img3" src="/cliente.webp" alt="Clientes" />
                    </div>

                    <div className="cmi-box bottom" onClick={() => abrirModal("procesos")}>
                        <h3>Procesos Internos</h3>
                        <img id="img4" src="/procesos internos.jpg" alt="Procesos" />
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
                            <div className="modal-scrollable">
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
                        </div>
                        <button className="close-button" onClick={cerrarModal}>X</button>
                    </div>
                </div>
            )}



        </div>

    );
}

export default Planaccion;