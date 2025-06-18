import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/planaccion.css'


const datosPerspectivas = {
    financiera: {
        img: "/finanzas.png",
        objetivos: ["Optimizar el uso de los recursos tecnológicos para reducir costos operativos.",
            "Garantizar que las inversiones en la infraestructura tecnológica aporten de forma medible a la eficiencia operativa. ",

        ],
        indicadores: ["% de reducción de pérdidas por activos no registrados",
            "% de cumplimiento del mantenimiento programado",
            "% de incidentes resueltos de forma remota",
            "% de disponibilidad de equipos monitoreados",
            "% de actualización en tiempo real de indicadores(dashboard)",
            "Tiempo promedio de atención a incidencias (minutos)"
        ]
    },

    aprendizaje: {
        img: "/aprendizaje y feedback.jpg",
        objetivos: ["Capacitar al personal técnico y usuarios en nuevas tecnologías y políticas. ",
            "Fomentar la cultura de mejora continua y adopción tecnológica."
        ],
        indicadores: ["Nº de sesiones de capacitación realizadas. ",
            "% de personal capacitado en uso de la herramienta ",
            "Nivel de satisfacción del personal técnico (%)",
            "Frecuencia de actualización de políticas",
            "Nº de mejoras aplicadas a partir de datos del dashboard",
            "% de días con registros completos en bitácora",]
    },

    clientes: {
        img: "/cliente.webp",
        objetivos: ["Mejorar la satisfacción y experiencia de los usuarios en la gestión de laboratorios.",
            "Garantizar la seguridad y acceso controlado a los laboratorios."
        ],
        indicadores: ["Nivel de satisfacción de usuarios (% en encuesta)",
            "Tiempo promedio de resolución de incidencias",
            "Nivel de cumplimiento de políticas de acceso (%)",
            "Nº de accesos no autorizados detectados",
            "% de cumplimiento con software legal y actualizado"
        ]
    },

    procesos: {
        img: "/procesos internos.jpg",
        objetivos: ["Automatizar y optimizar el control de inventarios, reservas, mantenimiento e incidencias.",
            "mplementar sistemas de monitoreo y reporte en tiempo real."],

        indicadores: ["Reducción de conflictos en asignación de espacios",
            "Reducción de fallos por falta de mantenimiento (%)",
            "% de incidencias resueltas",
            "Nº de alertas generadas automáticamente",
            "Tiempo promedio de detección de fallos (min)"]
    }
};

function Planaccion() {
    const navigate = useNavigate();
    const [perspectivaActiva, setPerspectivaActiva] = useState(null);
    const [animarSalida, setAnimarSalida] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [contenidoActual, setContenidoActual] = useState(null);

    const abrirModal = (clave) => {
        setContenidoActual(datosPerspectivas[clave]);
        setModalVisible(true);
        setPerspectivaActiva(clave);
    };

    const cerrarModal = () => {
        setModalVisible(false);
        setContenidoActual(null);
        setPerspectivaActiva(null);
    };

    return (
        <div className={`cmi-container ${modalVisible ? "modal-activo" : ""}`}>
            <div className="cmi-wrapper">

                <div >
                    <button
                        className="btn-volver"
                        onClick={() => {
                            setAnimarSalida(true);
                            setTimeout(() => {
                                navigate('/');
                            }, 700);
                        }}
                    >
                        Página Principal
                    </button>
                </div>



                <div className="cmi-grid">

                    <div className={`cmi-box top ${perspectivaActiva === "financiera" ? "activo" : ""} ${animarSalida ? "salida" : ""}`} onClick={() => abrirModal("financiera")}>

                        <h3>Perspectiva Financiera</h3>
                        <img id="img1" src="/finanzas.png" alt="Finanzas" />
                    </div>



                    <div className={`cmi-box right ${perspectivaActiva === "aprendizaje" ? "activo" : ""} ${animarSalida ? "salida" : ""}`} onClick={() => abrirModal("aprendizaje")}>
                        <h3>Aprendizaje y Feedback</h3>
                        <img id="img2" src="/aprendizaje y feedback.jpg" alt="Aprendizaje y Feedback" />
                    </div>




                    <div className={`cmi-box left ${perspectivaActiva === "clientes" ? "activo" : ""} ${animarSalida ? "salida" : ""}`} onClick={() => abrirModal("clientes")}>
                        <h3>Perspectiva de los Clientes</h3>
                        <img id="img3" src="/cliente.webp" alt="Clientes" />
                    </div>



                    <div className={`cmi-box bottom ${perspectivaActiva === "procesos" ? "activo" : ""} ${animarSalida ? "salida" : ""}`} onClick={() => abrirModal("procesos")}>
                        <h3>Procesos Internos</h3>
                        <img id="img4" src="/procesos internos.jpg" alt="Procesos" />
                    </div>
                </div>
            </div>

            {modalVisible && contenidoActual && (
                <div className="modal-overlayplanac" onClick={cerrarModal}>
                    <div className="modal-contentplanac" onClick={e => e.stopPropagation()}>
                        <div className="modal-leftplanac ">
                            <img src={contenidoActual.img} alt="Perspectiva" />
                        </div>
                        <div className="modal-rightplanac">
                            <h3>Objetivos</h3>
                            <div className="modal-scrollableplanac">
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
                        <button className="close-buttonplanac" onClick={cerrarModal}>X</button>
                    </div>
                </div>
            )}



        </div>

    );
}

export default Planaccion;