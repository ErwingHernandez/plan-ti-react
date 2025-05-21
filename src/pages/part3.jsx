import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/document.css';
import '../styles/etiquetas.css';

function Part3() {

   const [seleccionado, setSeleccionado] = useState(null);
    const [exiting, setExiting] = useState(false);
    const navigate = useNavigate();

    const titulos = [
        "Analisis de situacion actual",
        "Matriz Foda",
        "Foda ponderado",
        "Factores criticos de exito",
        "Estrategia de negocio",
        "Prioridades estrategicas",
        "Dominio planear y organizar (PO)",
        "Referencias"

    ];

    const handleSeleccion = (titulo) => {
        setSeleccionado(titulo);
        const elemento = document.getElementById(titulo);
        if (elemento) {
            elemento.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleGoHome = () => {
        setExiting(true);
        setTimeout(() => {
            navigate("/");
        }, 500);
    };

    return (
        <>

            <div className={`principal-container ${exiting ? 'fade-out-down' : 'fade-in-up'}`}>
                <div className="container-titulos">
                    <nav>
                        <ul>
                            {/*aqui se realiza las etiquetas siempre se inicia con # que hace referencia a los titulos
                            tienen que ser los mismos nombres para que funcione */}
                            {titulos.map((titulo) => (
                                <li
                                    key={titulo}
                                    onClick={() => handleSeleccion(titulo)}
                                    className={seleccionado === titulo ? "seleccionado" : ""}
                                >
                                    <a href={`#${titulo}`}>{titulo}</a>
                                </li>
                            ))}
                            <li onClick={handleGoHome} style={{ cursor: 'pointer' }}>
                                Página Principal
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="scroll-container">


                    <div className="part-container">

                           {/*a los h1 denles el id correspodiente a la parte del documento */}
                        <h1 id="Analisis de situacion actual">Analisis de situacion actual</h1>
                        {/*los dividien por secciones */}
                        {/*fijense en el documento al para saber donde meter los <br/> que son saltos de linea */}
                        <section>
                            <p>
                                En los laboratorios del pabellón 16 de la UNAN-Managua, el área de Tecnologías de la información del SIUDT enfrenta desafíos importantes relacionados con la planificación, organización y uso eficiente de sus recursos tecnológicos. Aunque se cuenta con cierta infraestructura tecnológica, actualmente no existe una estrategia formal ni políticas claras que permitan alinear el uso de la tecnología con los objetivos académicos y administrativos de la institución. 

                                 <br /> Como primer paso en el proceso de diagnóstico, se realizó un inventario de los equipos disponibles en cada uno de los laboratorios del pabellón 16. Esta etapa permitió identificar el hardware y software instalado y estado funcional. Posteriormente, se elaboraron y aplicaron rúbricas de evaluación diseñadas para calificar el estado general de cada laboratorio. Estas rúbricas contemplaron criterios como el desempeño, la conectividad, el equipamiento y la disponibilidad de los equipos. 
                                 <br /> Toda esa información fue organizada utilizando formatos estructurados que facilitaron la visualización de las condiciones actuales de cada estación de trabajo. A partir de este análisis, se identificaron diversas limitaciones, entre ellas: equipos obsoletos, ausencia de inventario digital actualizado, falta de mantenimiento preventivo y una débil documentación de procesos tecnológicos. Estas condiciones representan una barrera para el buen funcionamiento los laboratorios y dificultan la proyección estratégica del área de TI. 
                            </p>
                        </section>

                        
                        <h1 id="Matriz Foda">Matriz Foda</h1>

                        <section>
                            <p>
                                <img src="public/Analisis foda peti.JPEG" alt=""/>
                            </p>
                        </section>


                         <h1 id="Foda ponderado">Foda ponderado</h1>

                        <section>
                            <p>
                                <img src="public/Foda ponderado.PNG" alt=""/>
                                <img src="public/Resultado.JPG" alt=""/>
                            </p>
                        </section>

                        
                        <h1 id="Factores criticos de exito">Factores criticos de exito</h1>
                        <section>
                            <p>
                                	F1: Disponibilidad de recursos 

                                <br />	F2: Acceso y tiempo suficiente para la revisión

                                <br />	F3: Presupuesto para renovación de equipos 

                                <br />	F4: Infraestructura tecnológica adecuada 

                                <br />	F5: Automatización de alertas

                                <br />	F6: Asignación eficiente de horarios

                                <br />	F7: Gestión de licencias 
                                
                            </p>
                        </section>

                        
                        <h1 id="Estrategia de negocio">Estrategia de negocio</h1>
                        <section>
                            <p>
                               Microsoft Intune
                            </p>
                        </section>


                         <h1 id="Prioridades estrategicas">Prioridades estrategicas</h1>
                         <h2> 1.	Mantenimiento y Actualización de Equipos (Físico)</h2>
                        <section>
                        
                            <p>
                               a.	Identificación y reemplazo inmediato y progresivo bajo criterios de obsolescencia.
                               b.	Planes preventivos.
                               c.	Supervision.
 
                            </p>
                        </section>
                        <h2>2.	Modernización Tecnológica y Gestión Eficiente de Recursos (Lógico)</h2>
                        <section>
                        
                            <p>
                                a.	Implementación de la plataforma Microsoft 365
                                   <br />   I.	Permitirá la optimización del Uso de los Laboratorios, teniendo como base: 
                                             <br />  1.	Para la gestión en tiempo real (Planner)
                                             <br />  2.	Para reservas en línea u Horario establecido (Booking)
                      <br />    b.	Capacitación al personal administrativo y docente

                            </p>
                        </section>
                            

                                
                        <h1 id="Dominio planear y organizar (PO)">Dominio planear y organizar (PO)</h1>
                        <h2> 1.	PO1 Definir un plan estratégico de TI</h2>
                        <section>
                            <p>
                                 Desarrollar un plan estratégico de TI que contemple la renovación tecnológica periódica, minimizando la dependencia del presupuesto (D1), anticipando la obsolescencia (D2) y alineando la infraestructura tecnológica a los procesos académicos del laboratorio.

                                <br/>Proceso vinculado: Mejora de infraestructura.
                            </p>
                           
                        </section>
                         <h2>	Objetivos de control.</h2>
                        <h3>PO1.1 Administración del Valor de TI:</h3>
                                <section>
                                    <p>
                                        El plan estratégico de TI deberá asegurar que cada proyecto tecnológico que se realiza en el pabellón 16 pase por un filtro que garantice la factibilidad de la inversión, es decir que no será solo un gasto sino un aporte al desarrollo de los estudiantes que utilicen los laboratorios.          
                                    </p>
                                </section> 
                         <h3>PO1.2 Alineación de TI con el Negocio: </h3>
                                <section>
                                    <p>
                                        Asegurar que el Plan Estratégico de TI este alineado a los objetivos de la universidad, tomando en cuenta el estado actual de los laboratorios y las necesidades de los usuarios de tal modo que se pueda establecer prioridades que cumplan las metas a mediano y largo plazo.
                                         </p>
                                </section>
                        
                        <h3>PO1.3 Evaluación del Desempeño y la Capacidad Actual:  </h3>
                                <section>
                                    <p>
                                        Realizar un monitoreo para determinar el estado actual de los laboratorios y el rendimiento actual de su sistema de monitoreo para identificar brechas tecnológicas.
                                   </p>
                                </section>
                            


                         <h3>PO1.4 Plan Estratégico de TI:  </h3>
                                <section>
                                    <p>
                                       Diseñar un Plan Estratégico para el pabellón 16 que detalle todo lo anteriormente mencionado presupuesto de la inversión/operativo, las fuentes de financiamiento, la estrategia de obtención, la estrategia de adquisición, y los requerimientos legales y regulatorios, alienado a los objetivos institucionales y recursos disponibles.
                                     </p>
                                </section>

                        <h2>2.	PO2 Definir la Arquitectura de la Información</h2>
                         <section>
                            <p>
                                 Establecer una arquitectura tecnológica que garantice la integración entre los sistemas de préstamo, reporte y seguimiento de incidencias, enfrentando limitaciones en el mantenimiento (D3) y el uso de herramientas obsoletas (D2).

                                <br/>Procesos vinculados: Préstamo de dispositivos, Informe de incidencias
                            </p>    
                        </section>

                         <h2>Objetivos de control.</h2>
                        <h3> PO2.1 Modelo de Arquitectura de Información Empresarial: </h3>
                        <section>
                            <p>
                                Desarrollar un modelo de arquitectura de información integra que facilite la toma de decisiones, consistente con los planes estratégicos de TI, es decir, que toda la información referente a los laboratorios esté bien claramente delimitada según roles, cuidada, sin errores, y siempre sea confiable, sin importar dónde esté guardada.
                            </p>
                        </section>
                        <h3>PO2.2 Administración de Integridad: </h3>
                        <section>
                            <p>
                                Realizar evaluaciones periódicas para para asegurar la integridad, consistencia y actualización de los datos relacionados con la infraestructura tecnológica y el uso de los laboratorios del pabellón 16. Esto incluye inventarios de hardware y software, registros de mantenimiento, control de licencias y respaldos de configuración.
                            </p>
                        </section>
                        <h2>PO3 Determinar la Dirección Tecnológica</h2>
                        
                        <section>
                            <p>
                                Establecer directrices tecnológicas que favorezcan la modernización continua, considerando amenazas como la falta de innovación (A1) y la desactualización tecnológica (A2), impulsando mejoras alineadas a las necesidades académicas.

                                <br/> Proceso vinculado: Mejora de infraestructura
                            </p>
                        </section>

                        <h2>Objetivos de control.</h2>
                        <h3>PO3.1 Planeación de la Dirección Tecnológica</h3>
                        <section>
                            <p>
                                tecnológico de los laboratorios del pabellón 16 en base a un análisis de situación actual que permita identificar las debilidades actuales y convertirlas en oportunidad para definir la dirección apropiada a tomar para materializar la estrategia de TI.
                            </p>
                        </section>

                        <h3>PO3.2 Monitoreo de Tendencias Y Regulaciones Futuras:</h3>
                        <section>
                            <p>
                                Establecer procesos que permitan identificar y evaluar la tendencias tecnológicas y normativas emergentes que puedan influir en el mejoramiento de la enseñanza en los laboratorios.
                            </p>
                        </section>

                        <h3>PO3.3 Estándares tecnológicos: </h3>
                        <section>
                            <p>
                                Establecer estándares tecnológicos claros y documentados para la adquisición, configuración y uso de equipos, software y servicios en los laboratorios. Estos estándares deben servir como base para asegurar la compatibilidad, eficiencia operativa y seguridad del entorno tecnológico, y estar alineados con las necesidades académicas.
                            </p>
                        </section>

                        <h2> 4.PO4 Definir los Procesos, Organización y Relaciones de TI</h2>
                        <section>
                            <p>
                                 Estructurar formalmente los procesos de préstamo, reporte y seguimiento de incidencias, minimizando el impacto de la falta de herramientas (D3) y asegurando la continuidad del servicio sin depender exclusivamente del personal técnico (D5).

                                <br/> Procesos vinculados: Préstamo de dispositivos, Reporte de actividades semanal, Informe de incidencias
                            </p>
                        </section>

                        <h2>Objetivos de control. </h2>
                        <h3> PO4.1 Marco de Trabajo de Procesos de TI: </h3>
                        <section>
                            <p>
                                Establecer una relación clara entre los procesos técnicos (mantenimiento, soporte, seguridad), los procesos académicos (docencia, uso de recursos, evaluación) y los procesos administrativos (planificación, adquisición, control).
                            </p>
                        </section>

                    <h3>PO4.2 Establecimiento de Roles y Responsabilidades: </h3>
                    <section>
                        <p>
                            Evaluar la distribución organizativa actual identificando brechas administrativas en cuanto a la delimitación de autoridad/responsabilidad según roles.
                        </p>
                    </section>

                    <h3>PO4.3 Propiedad de Datos y Sistemas: </h3>
                    <section>
                        <p>
                           Establecer roles y responsabilidades para cada proceso, minimizando la improvisación en la gestión operativa de los laboratorios.
                        </p>
                    </section>
                            
                    <h3>PO4.4 Relaciones: </h3>
                    <section>
                        <p>
                            Definir mecanismos de comunicación entre responsables de laboratorios y otras áreas para asegurar la integración de TI en los procesos institucionales.
                        </p>
                    </section>

                    <h2>PO5 Administrar la Inversión en TI</h2>
                    <section>
                        <p>
                             Definir mecanismos de priorización de inversión tecnológica, atendiendo amenazas como la falta de acceso a recursos de calidad (A6) y debilidades como la dependencia presupuestaria (D1).

                            <br/>Proceso vinculado: Mejora de infraestructura
                        </p>
                    </section>

                    <h2>Objetivos de control.</h2>
                    <h3>PO5.1 Marco de Trabajo para la Administración Financiera:</h3>
                    <section>
                    <p>
                        Definir n marco que planifique, priorice y justifique inversiones según impacto académico, dando preferencia a las áreas críticas para el aprendizaje.
                    </p>
                    </section>

                    <h3>PO5.2 Proceso Presupuestal: </h3>
                    <section>
                        <p>
                            Establecer un registro de necesidades tecnológicas incluyendo el gasto que representa, propiciando que estas adquisiciones se mantengan dentro del alcance presupuestario.
                        </p>
                    </section>

                    <h3>PO5.5 Administración de Beneficios: </h3>
                    <section>
                        <p>
                            Analizar y reportar el impacto de estas inversiones en el ámbito de los objetivos de la institución académica, lo cual permitirá ajustar el portafolio según resultados obtenidos.
                        </p>
                    </section>

                    <h2>PO6 Comunicar las Aspiraciones y la Dirección de la Gerencia</h2>
                    <section>
                        <p>
                            Establecer una estrategia de comunicación para socializar la importancia de adoptar nuevas herramientas tecnológicas, reduciendo la resistencia al cambio (D4) y alineando la visión de los actores involucrados.

                            <br/>Procesos vinculados: Mejora de infraestructura, Reporte de actividades semanal
                        </p>
                    </section>

                    <h2>Objetivos de control.</h2>
                    <h3>PO6.1 Riesgo Corporativo y Marco de Referencia de Control Interno de TI: </h3>
                    <section>
                        <p>
                            Asegurar que la visión, prioridades y planes estratégicos estén debidamente informados a todo el personal involucrado.
                        </p>

                    </section>

                    <h3>PO6.2 Administración de Políticas para TI: </h3>
                    <section>
                        <p>
                            Promover la mejora continua, el uso responsable de la tecnología y la participación activa en las políticas.
                        </p>
                    </section>

                    <h3>PO6.3 Implantación de Políticas de TI: </h3>
                    <section>
                        <p>
                            Involucrar a los actores clave en el diseño del PETI, creando un sentido de pertenencia sobre las decisiones tomadas.
                        </p>
                    </section>

                    <h2>PO7 Administrar Recursos Humanos de TI</h2>
                    <section>
                        <p>
                        	Desarrollar planes de capacitación técnica para asegurar que más personal pueda apoyar en el mantenimiento y uso de equipos (D5), garantizando la atención oportuna a los préstamos e incidencias.

                            <br/> Procesos vinculados: Préstamo de dispositivos, Informe de incidencias
                            
                        </p>
                    </section>

                    <h2>Objetivos de control</h2>
                    <h3>PO7.1 Competencias del Personal: </h3>
                    <section>
                        <p>
                             Verificar periódicamente que el personal técnico encargado de la gestión y mantenimiento de los laboratorios del pabellón 16 del SIUDT cuente con las habilidades necesarias para desempeñar sus funciones de manera eficiente, segura y alineada a las necesidades tecnológicas y académicas de la institución.
                        </p>
                    </section>

                    <h3>PO7.2 Entrenamiento del Personal de TI: </h3>
                   <section>
                    <p>
                        Proporcionar al personal técnico encargado de la gestión de los laboratorios del pabellón 16 del SIUDT orientación inicial al asumir el cargo, así como un plan de capacitación continua que garantice el mantenimiento y fortalecimiento de sus competencias. Este proceso busca asegurar que el personal esté preparado para atender los requerimientos operativos, académicos y tecnológicos de los usuarios, adaptarse a los cambios en infraestructura o software, y aportar valor mediante un servicio de soporte eficiente y actualizado

                    </p>
                   </section>

                   <h3>PO7.3 Evaluación del Desempeño del Empleado: </h3>
                   <section>
                    <p>
                        Asegurar que el desempeño del personal encargado de la gestión y mantenimiento de los laboratorios de cómputo del pabellón 16 del SIUDT sea evaluado de forma periódica, con base en los objetivos individuales que estén alineados al PETI, a los estándares de calidad establecidos por el SIUDT y a las funciones específicas asignadas dentro del área de soporte técnico.
                    </p>
                   </section>

                   <h2>PO8  Administrar la Calidad</h2>
                   <section>
                    <p>
                         Implementar controles para asegurar la calidad en la atención de incidencias y el uso de los equipos, enfrentando limitaciones por falta de mantenimiento y herramientas (D3, D2).

                        <br/>Procesos vinculados: Informe de incidencias, Préstamo de dispositivos
                    </p>
                   </section>

                   <h2>Objetivos de control.</h2>
                   <h3>PO8.1 Sistema de Administración de Calidad: </h3>
                   <section>
                    <p>
                        Establecer y mantener un Sistema de Administración de Calidad (QMS) formal, estructurado y continuo, específicamente aplicado a la gestión de los laboratorios de cómputo del pabellón 16 del SIUDT, con el fin de asegurar que los procesos de TI se alineen con los requerimientos institucionales, los objetivos estratégicos del PETI y las necesidades académicas de la comunidad universitaria.

                    </p>
                   </section>

                   <h3>PO8.2 Estándares y Prácticas de Calidad y Estándar es de Desarrollo y de Adquisición: </h3>
                   <section>
                    <p>
                        Establecer y aplicar estándares formales de calidad, desarrollo y adquisición de tecnologías que garanticen la eficiencia, seguridad y sostenibilidad de los recursos informáticos en los laboratorios de cómputo del pabellón 16 del SIUDT. Estos estándares estarán alineados con los lineamientos definidos en el PETI y permitirán asegurar que tanto la infraestructura como los servicios tecnológicos cumplan con criterios claros de rendimiento y utilidad académica.
                    </p>
                   </section>

                   <h3>PO8.3 Enfoque en el Cliente de TI: </h3>
                   <section>
                    <p>
                        Asegurar que la gestión de calidad de los servicios tecnológicos en los laboratorios de cómputo del pabellón 16 esté centrada en las necesidades de los usuarios "docentes, estudiantes y personal académico", identificando sus requerimientos, expectativas y problemas, y alineándolos con las prácticas y estándares definidos en el PETI.
                    </p>
                   </section>

                   <h3>PO8.4 Mejora Continua Medición, "Monitoreo y Revisión de la Calidad": </h3>
                   <section>
                    <p>
                        Establecer un enfoque sistemático de mejora continua en los servicios tecnológicos que se brindan en los laboratorios de cómputo del pabellón 16, mediante la medición, monitoreo y revisión constante de los procesos y resultados de calidad.
                    </p>
                   </section>

                   <h2>PO9 Evaluar y Administrar los Riesgos de TI</h2>
                   <section>
                    <p>
                    	Identificar y gestionar riesgos asociados a desactualización tecnológica "A2", resistencia al cambio "D4" y falta de planificación formal "D6", que puedan afectar el cumplimiento de las funciones del laboratorio.

                        <br/>Procesos vinculados: Todos "aplica transversalmente"
                    </p>
                   </section>

                   <h2>Objetivos de control. </h2>
                   <h3>PO9.1 Identificación de Eventos: </h3>
                   <section>
                    <p>
                        Establecer un proceso formal para la identificación y registro de eventos que representen amenazas reales o potenciales a la operación tecnológica de los laboratorios del pabellón 16 del SIUDT, incluyendo aquellos que puedan tener un impacto negativo en los objetivos académicos, técnicos, legales o administrativos definidos en el PETI.
                    </p>
                   </section>

                   <h3> PO9.2 Evaluación, Respuesta y Seguimiento de Riesgos de TI: </h3>
                   <section>
                    <p>
                        Implementar un proceso estructurado para la evaluación, respuesta y seguimiento de los riesgos tecnológicos que puedan afectar la operación de los laboratorios de cómputo del pabellón 16, con el fin de minimizar posibles impactos negativos sobre los objetivos estratégicos. Este proceso debe permitir identificar el nivel de riesgo, priorizar acciones correctivas o preventivas, y mantener un monitoreo constante que asegure la continuidad y calidad de los servicios de TI. 
                    </p>
                   </section>

                   <h2>PO10 Administrar Proyectos</h2>
                   <section>
                        <p>
                        Gestionar proyectos tecnológicos enfocados en la renovación de equipos y mejora de infraestructura, anticipando amenazas como la falta de planificación a largo plazo (A6) y debilidades como D1, D2 y D3.
                       
                    <br/>Proceso vinculado: Mejora de infraestructura
                     </p>
                   </section>

                   <h2>Objetivos de control.</h2>
                   <h3>PO10.1 Gestión de Proyectos tecnológicos:</h3>
                   <section>
                    <p>
                        Definir una metodología que permita gestionar los proyectos de mejora tecnológica priorizando los que tengan mayor retorno académico.
                    </p>
                   </section>

                   <h3>PO10.2 Asignación de Recursos y Avances: </h3>
                   <section>
                    <p>
                         Asignar responsables, cronogramas e indicadores para cada proyecto, garantizando un seguimiento efectivo de los avances.
                    </p>
                   </section>

                   <h3>PO10.3 Evaluación Post-Implementación y Cierre del Proyecto: </h3>
                   <section>
                    <p>
                        Analizar los resultados de cada proyecto después de su implementación cerciorando de que el proyecto haya proporcionado los resultados y los beneficios esperados para la mejora de la gestión futura.
                    </p>
                   </section>
                   
                        <h1 id="Referencias">Referencias</h1>
                        <section>
                            <p>
                                Navarra, D. D., & Cornford, T. (2009). Globalization, networks, and governance: Researching global ICT programs. Government Information Quarterly, 26(1), 35-41.
                            <br/>Chiriboga Molina, J. H., & Valencia Bedon, R. L. (5 de 08 de 2014). Universidad Tecnica de COTOPAXI. Obtenido de Universidad Tecnica de COTOPAXI: http://repositorio.utc.edu.ec/handle/27000/1911
                            <br/>Janssen, M., & Voort, H. (2016). Adaptive governance: Towards a stable, accountable and responsive government. Government Information Quarterly, 33, 1-5.
                            <br/>Juiz, C., Gómez, M., & Barceló, I. (2012). Business/IT Projects Alignment through the Project Portfolio Approval Process as IT Governance Instrument. Procedia - Social and Behavioral Sciences, 65, 70-75.
                            <br/>Lorena, C. P. (5 de julio de 2010). Repositorio Digital - EPN. Obtenido de Repositorio Digital - EPN: http://bibdigital.epn.edu.ec/handle/15000/2222
                            <br/>Molina Gutiérrez, K. V., González Urroz, C. R., & Munguía Alfaro, A. d. (30 de 08 de 2017). Repositorio Institucional de la UNAN-MANAGUA. Obtenido de Repositorio Institucional de la UNAN-MANAGUA: http://repositorio.unan.edu.ni/id/eprint/5844
                            <br/>Pantoja Mejía, M. C. (30 de 11 de 2023). Repositorio Digital Universidad Técnica del Norte. Obtenido de Repositorio Digital Universidad Técnica del Norte: https://repositorio.utn.edu.ec/handle/123456789/15300
                            <br/>Twinomurinzi, H., Phahlamohlaka, J., & Byrne, E. (2012). The small group subtlety of using ICT for participatory governance: A South African experience. Government Information Quarterly, 29, 203-211.
                            <br/>Valencia, F., Marulanda, C., & López, M. (2018). Gobierno de las Tecnologías de la Información. Uso y Prácticas en las Entidades Públicas del Triángulo del Café, Colombia. Información tecnológica [online], 29(3), 249-258.
                            <br/>Vanegas Balmaceda, K. B. (23 de 08 de 2021). Repositorio Institucional de la UNAN-MANAGUA. Obtenido de Repositorio Institucional de la UNAN-MANAGUA: http://repositorio.unan.edu.ni/id/eprint/15931
                            <br/>Welch, E. W., & Feeney, M. K. (2014). Technology in government: How organizational culture mediates information and communication technology outcomes. Government Information Quarterly, 31, 506-512.
                            <br/>Salcedo Guzmán, M. P., San Martín Rebolloso, F., & Andrade Vallejo, M. A. (2022). La planeación estratégica como palanca de alineación entre las tecnologías de información y la competitividad de los negocios globales. Revista Gestión y Estrategia, 32, 21–34. https://doi.org/10.24275/uam/azc/dcsh/gye/2007n32/Salcedo

                            </p>
                        </section>
                        

                    </div>

                </div>
            </div>
        </>

    );
}

export default Part3;