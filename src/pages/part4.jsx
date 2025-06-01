import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/document.css';
import '../styles/etiquetas.css';
import '../styles/postyles.css';
import '../styles/tablas.css';
import { div } from "framer-motion/client";

function Part4() {


    const infoparrafos = [{
        titulo: "PO1",

        indicadores: ["% de equipos funcionales disponibles por semana",
            "Tiempo promedio de resolución de incidencias",
        ],

        contenido: [
            {
                subtema: "PO1.1 Administración del Valor de TI",
                parrafo: "El plan estratégico de TI deberá asegurar que cada proyecto tecnológico que se realiza en el pabellón 16 pase por un filtro que garantice la factibilidad de la inversión, es decir que no será solo un gasto sino un aporte al desarrollo de los estudiantes que utilicen los laboratorios."
            },
            {
                subtema: "PO1.2 Alineación de TI con el Negocio",
                parrafo: "Asegurar que el Plan Estratégico de TI este alineado a los objetivos de la universidad, tomando en cuenta el estado actual de los laboratorios y las necesidades de los usuarios de tal modo que se pueda establecer prioridades que cumplan las metas a mediano y largo plazo"
            },

        ]
    }

    ]


    const [seleccardpoIndex, setSeleccardpoIndex] = useState(null);

    const cardpoClick = (index) => {
        setSeleccardpoIndex(index);
    }

    return (
        <>
            <div className="contenedor-general">

                <div className="contenedor-tarjetaspo">

                    {infoparrafos.map((po, index) => (
                        <div className={`card-PO ${seleccardpoIndex === index ? "selecc" : ""}`} key={index}
                            onClick={() => cardpoClick(index)}>
                            <span>{po.titulo}</span>
                        </div>
                    ))}
                </div>

                <div className="contenedor-infotarjetas">
                    {infoparrafos.map((info, index) => (
                        <div className={`info-tarjeta ${seleccardpoIndex === index ? "selecc" : ""}`} key={index}>
                            <h2>{info.titulo}</h2>

                            {info.indicadores.map((indicador, indIndex) => (
                                <li key={indIndex} className="indicador">{indicador}</li>
                            ))}

                            {info.contenido.map((contenido, contIndex) => (
                                <div key={contIndex} className="seccion-subtema-parrafo">
                                    <h3>{contenido.subtema}</h3>
                                    <p>{contenido.parrafo}</p>
                                </div>
                            ))}
                        </div>
                    ))}


                    <div>
                        <h1>Directrices Gerenciales</h1>
                    </div>

                    <div className="contenedor-directrices">
                        {/* Tabla de Entradas y Salidas */}
                        <div className="tabla-entradas-salidas-container">
                            <h3 className="titulo-tabla">P01 Definir un Plan Estratégico de TI.</h3>
                            <div className="table-wrapper"> {/* Un wrapper para overflow si la tabla es grande */}
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="header-desde" colSpan="2">Desde</th>
                                            <th className="header-salidas" colSpan="2">Salidas</th>
                                            <th className="header-hacia" colSpan="4">Hacia</th> {/* Ajusta el colSpan según el número de columnas reales */}
                                        </tr>
                                        <tr>
                                            <th>Entradas</th>
                                            <th></th> {/* Columna vacía para la segunda parte de "Desde" si es necesario */}
                                            <th></th> {/* Columna vacía para la segunda parte de "Salidas" */}
                                            <th></th> {/* Columna vacía para la segunda parte de "Salidas" */}
                                            <th></th> {/* Columna vacía para la segunda parte de "Hacia" */}
                                            <th></th> {/* Columna vacía para la segunda parte de "Hacia" */}
                                            <th></th> {/* Columna vacía para la segunda parte de "Hacia" */}
                                            <th></th> {/* Columna vacía para la segunda parte de "Hacia" */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Fila de "Desde" y "Entradas" */}
                                        <tr>
                                            <td>P05</td>
                                            <td>Reportes de costo / beneficio</td>
                                            <td>Plan estratégico de TI</td>
                                            <td>PO2..PO6</td>
                                            <td>PO8</td>
                                            <td>PO9</td>
                                            <td>AI1</td>
                                            <td>DS1</td>
                                        </tr>
                                        <tr>
                                            <td>P09</td>
                                            <td>Evaluación de riesgo</td>
                                            <td>Plan táctico de TI</td>
                                            <td>PO2..PO6</td>
                                            <td>PO9</td>
                                            <td>AI1</td>
                                            <td>DS1</td>
                                        </tr>
                                        {/* ... (añade el resto de filas de "Desde" y "Entradas" aquí) */}
                                        <tr>
                                            <td>*</td>
                                            <td>Estrategia y prioridades del negocio</td>
                                            <td>Estrategia de contratación externa de TI</td>
                                            <td>DS2</td>
                                            <td></td><td></td><td></td><td></td>
                                        </tr>
                                        <tr>
                                            <td>ME1</td>
                                            <td>Entradas a desempeño de planeación de TI</td>
                                            <td>Estrategia de adquisición de TI</td>
                                            <td>AI5</td>
                                            <td></td><td></td><td></td><td></td>
                                        </tr>
                                        {/* ... (continúa con las filas que tienen solo una columna de "Salidas") */}
                                    </tbody>
                                </table>
                                <p className="nota-tabla">* Entradas provenientes de fuentes externas a COBIT</p>
                            </div>
                        </div>

                        {/* Matriz RACI */}
                        <div className="matriz-raci-container">
                            <h3 className="titulo-matriz">Matriz RACI</h3>
                            <p className="subtitulo-matriz">Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado</p>

                            <div className="table-raci-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th rowSpan="2" className="corner-cell"></th> {/* Celda superior izquierda vacía */}
                                            <th colSpan="8" className="funciones-header">Funciones</th> {/* "Funciones" abarca las columnas de abajo */}
                                        </tr>
                                        <tr>
                                            {/* Aquí irán los th para cada función con la transformación diagonal */}
                                            <th className="diagonal-header"><span>CEO</span></th>
                                            <th className="diagonal-header"><span>CIO</span></th>
                                            <th className="diagonal-header"><span>Ejecutivo del Negocio</span></th>
                                            <th className="diagonal-header"><span>Dueño de Proceso del Negocio</span></th>
                                            <th className="diagonal-header"><span>Jefe de Operaciones</span></th>
                                            <th className="diagonal-header"><span>Arquitecto en Jefe</span></th>
                                            <th className="diagonal-header"><span>Jefe de Desarrollo</span></th>
                                            <th className="diagonal-header"><span>PMO</span></th>
                                            <th className="diagonal-header"><span>Cumplimiento, Auditoría, Riesgo y Seguridad</span></th> {/* Esta es la más larga */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="actividades-header">Actividades</th>
                                            {/* Celda vacía en la imagen después de Actividades */}
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        {/* Filas de Actividades */}
                                        <tr>
                                            <td>Relacionar las metas del negocio con las de TI</td>
                                            <td>C</td>
                                            <td>I</td>
                                            <td>A/R</td>
                                            <td>R</td>
                                            <td>C</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Identificar dependencias intrínsecas y desempeño actual</td>
                                            <td>C</td>
                                            <td>C</td>
                                            <td>R</td>
                                            <td>A/C</td>
                                            <td>C</td>
                                            <td>C</td>
                                            <td>C</td>
                                            <td>C</td>
                                            <td>C</td>
                                        </tr>
                                        {/* ... (añade el resto de filas de Actividades aquí) */}
                                        <tr>
                                            <td>Analizar portafolios de programas y administrar portafolios de servicios y proyectos</td>
                                            <td>C</td>
                                            <td>I</td>
                                            <td>I</td>
                                            <td>A</td>
                                            <td>R</td>
                                            <td>R</td>
                                            <td>C</td>
                                            <td>R</td>
                                            <td>C</td>
                                            <td>I</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    );


}

export default Part4;