import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/document.css';
import '../styles/etiquetas.css';

function Part2() {

    const [seleccionado, setSeleccionado] = useState(null);
    const [exiting, setExiting] = useState(false);
    const navigate = useNavigate();

    const titulos = [
        "Conceptos Básicos",
        "PETI en los Laboratorios del SIUDT",
        "Gobierno de TI y COBIT 4.1",
        "Aplicación del Dominio PO en el SIUDT",
        "Estrategias Tecnológicas",
        "Evaluación de la factibilidad"
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
                        <h1 id="Conceptos Básicos" className="section-fade" style={{ animationDelay: '0.3s' }}>Conceptos Básicos de Planificación Estratégica</h1>
                        {/*los dividien por secciones */}
                        {/*fijense en el documento al para saber donde meter los <br/> que son saltos de linea */}
                        <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                            <h2>¿Qué es la Planificación?</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                <p>
                                    Según (Azkue, 2018) la planificación es un modelo o plan que se utiliza como guía para implementar diversos proyectos y objetivos. Es un listado que detalla de forma ordenada los procesos, los recursos y el tiempo que serán necesarios para solucionar un problema determinado o para alcanzar los objetivos de negocio.
                                
                                    <br /> Por otro lado, (Westreicher, 2020) dice La planificación es la creación, asignación y distribución temporal de unas tareas para conseguir un objetivo. La planificación se convierte en una guía con los pasos a seguir para llegar a la meta propuesta.
                                </p>
                            </section>
                            <h2>Tipos de Planificación</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                <p>
                                    Según (Azkue, 2018) los principales tipos de planificación son:
                                
                                    <br />
                                    <ul>
                                        <li><strong>Planificación estratégica: </strong>Consiste en un plan integral de negocio que permite el funcionamiento de una organización. Su ejecución depende de la toma de decisiones de la gerencia, y contempla los aspectos financieros, la misión y visión, los objetivos a largo plazo y la estructura de la empresa.</li>
                                        <li><strong>Planificación táctica: </strong>Consiste en repasar las metas generales para definir objetivos específicos. Su ejecución depende de cada responsable o cada área correspondiente de una organización, que debe cumplir con sus respectivas tareas y funciones.</li>
                                        <li><strong>Planificación operativa: </strong>Consiste en una serie de acciones básicas o fundamentales para garantizar el desempeño de una organización o un proyecto en el corto o mediano plazo. La planificación operativa se centra en los recursos disponibles, la manera en que se hará uso de los recursos y en las tareas necesarias para alcanzar los objetivos. Depende los directores o responsables de área, que contribuyen a implementar y controlar un plan operativo.</li>
                                        <li><strong>Planificación normativa: </strong>Consiste en una serie de reglas y normas que la gerencia de una organización establece durante un período determinado para alcanzar sus objetivos.</li>
                                    </ul>
                                </p>
                            </section>

                            <h2>¿Qué es Estrategia?</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                <p>
                                    Según (Merino, 2008) Estrategia proviene del griego “strategos”, se entiende como el arte de lograr los objetivos trazados. La estrategia comprende el propósito general de una organización, en términos de objetivos de largo plazo, programas de acción y prioridades en la asignación de recursos (personas, dineros esfuerzos, etc.). En este sentido, se convierte en un marco conceptual fundamental que le permite a una institución permanecer en el tiempo y adaptarse a un medio altamente cambiante.                
                                </p>
                            </section>

                            <h2>Planificación Estratégica</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                <p>
                                    La Planificación Estratégica (PE) es una herramienta de gestión que permite apoyar la toma de decisiones de las organizaciones en torno al quehacer actual y al camino que deben recorrer en el futuro para adecuarse a los cambios y a las demandas que les impone el entorno y lograr la mayor eficiencia, eficacia y calidad en los bienes y servicios que se proveen (Armijo, 2011).
                                </p>
                            </section>

                            <h2>Propósito de la Planificación Estratégica</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                <p>
                                    Establecer una planificación estratégica tiene como propósito brindar una guía sobre las acciones que se deben llevar a cabo en un tiempo definido, identificando el entorno y el funcionamiento interno de la organización con el fin de identificar aspectos negativos que sean subsanables mediante las estrategias propuestas y permitiendo identificar los objetivos, misión y visión. Permitiendo establecer una dirección clara con prioridades y una asignación responsable de los recursos (Vanegas Balmaceda, Repositorio UNAN Managua, 2020).
                                </p>
                            </section>

                            <h2>Importancia de la Planificación Estratégica</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                <p>
                                    La planificación permite mantener el equilibrio entre las tareas que la empresa puede coordinar y los imprevistos o problemas que escapan de su control, pero que se debe afrontar porque interfieren en su actividad (Azkue, 2018).  
                                </p>
                            </section>

                            <h2>Objetivo de la Planificación Estratégica</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                <p>
                                    El objetivo de la planificación estratégica es lograr una ventaja competitiva sostenible que arroje un buen nivel de utilidades, analiza la óptima combinación entre los recursos y las oportunidades del negocio; además toma en cuenta de qué manera se adaptará la empresa al desafío que propone el entorno competitivo. La planificación estratégica se enfoca en un horizonte de mediano y largo plazo, generalmente de 3 a 10 años (Vanegas Balmaceda, Repositorio UNAN Managua, 2020).
                                </p>
                            </section>

                            <h2>Visión de la Planificación Estratégica</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                <p>
                                    La visión, de manera simple, es el sueño de la organización, la inspiración máxima a la cual se quiere llegar, la meta ambiciosa por alcanzar en el futuro. Los planes de la organización apuntan al logro, en el largo plazo, de dicha visión. Dicho de otro modo, la visión es la manera como se ve la organización en sí misma en un plazo de diez, veinte o más años, en la cúspide de éxito (Hamel & Prahalad, 1989).
                                </p>
                            </section>

                            <h2>Misión de la Planificación Estratégica</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                <p>
                                    La misión es el reflejo del esfuerzo por traducir la visión en un gran objetivo general de la organización. La misión expone el porqué de la organización y lo que debe hacer. Es a partir de la misión que se generan las estrategias correspondientes a cada uno de los planes operativos. La misión es la piedra angular del planteamiento estratégico (Hamel & Prahalad, 1989).
                                </p>
                            </section>

                            <h2>Modelos de Procesos de Planificación Estratégica</h2>
                            <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                                
                                <p>
                                    El modelo de procesos de planificación estratégica contiene las siguientes fases:
                                    <img src="public/fases.png" id="fase"/>
                                    <ul>
                                        <li><strong>Fase I.-</strong>El Rol de la institución; donde se presenta una breve reseña de la Dirección General de Función Pública, describiendo sus servicios, estructura organizacional, misión, visión, valores y objetivos institucionales.</li>
                                        <li><strong>Fase II.-</strong>Análisis de la Situación Actual TI; presenta la revisión de la situación actual tomando como referencia (i) el entorno de la institución con respecto a las TI, (ii) las plataformas tecnológicas utilizadas, (iii) y la situación actual de la infraestructura TI.</li>
                                        <li><strong>Fase III.-</strong>Análisis FODA</li>
                                        <li><strong>Fase IV.-</strong>Definición de Componentes Estratégicos TI; presenta la definición de lineamientos estratégicos TI y la definición de los objetivos y estrategias TI.</li>
                                        <li><strong>Fase V.-</strong>Portafolio de Proyectos TI; presenta la elaboración del portafolio de proyectos, el análisis de brechas entre la Arquitectura de Sistemas y la Plataforma Tecnología.</li>
                                        <li><strong>Fase IV.-</strong>Comprende evaluar el grado de aceptación del plan estratégico de tecnología de información y comunicación</li>
                                    </ul>
                                </p>
                            </section>

                        </section>

                        <h1 id="PETI en los Laboratorios del SIUDT" className="section-fade" style={{ animationDelay: '0.3s' }}>Planificación Estratégica de las Tecnologías de la Información en los Laboratorios del SIUDT.</h1>

                        <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                            <p>
                                En el contexto del pabellón 16, donde se ubican diversos laboratorios de informática, una planificación estratégica adecuada ayudaría a identificar qué tipo de tecnología es realmente necesaria, cómo debe organizarse su mantenimiento y qué prioridades deben atenderse primero, ya sea en términos de renovación de equipos, conectividad de red, licencias de software o seguridad informática.

                                <br />Además, esta planificación permite tomar decisiones informadas sobre futuras inversiones, considerando tendencias tecnológicas relevantes para la educación superior. Como señalan Salcedo Guzmán, San Martín Rebolloso y Andrade Vallejo (2022), la planeación estratégica actúa como una palanca de alineación entre las tecnologías de información y la competitividad, facilitando la adaptación de las organizaciones a un entorno globalizado y cambiante.

                                <br />Al igual que con el dominio "Planear y Organizar" (PO) de COBIT 4.1, la planificación estratégica en este contexto no busca simplemente añadir más computadoras o programas, sino establecer una ruta clara que permita usar los recursos de manera más inteligente, evitando la improvisación y asegurando que cada acción tecnológica tenga un propósito claro y medible.

                                <br />En resumen, aplicar una planificación estratégica de TI en los laboratorios del SIUDT no solo optimiza el uso de la infraestructura actual, sino que también fortalece la capacidad de la universidad para adaptarse a los cambios, mejorar los servicios y ofrecer un entorno más moderno y funcional para toda la comunidad universitaria.
                            </p>
                        </section>

                        <h1 id="Gobierno de TI y COBIT 4.1" className="section-fade" style={{ animationDelay: '0.3s' }}>Gobierno de TI y COBIT 4.1</h1>
                        <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                            <p>
                                En el contexto actual, la sociedad se caracteriza cada vez más por la competencia, la eficiencia, la velocidad y el manejo ético de los recursos públicos. Esta transformación hace que la economía se vuelva más dinámica lo que implica reconfigurar las organizaciones para adaptarse a los intereses de una ciudadanía global, que participa activamente y exige mayor transparencia y eficacia en la gestión ( Navarra & Cornford, 2009).

                                <br />Dentro de este marco, el gobierno de Tecnologías de la Información (TI) emerge como una respuesta a los cambios derivados del dinamismo de la economía, caracterizado por la expansión de datos masivos, analítica de datos avanzada, datos abiertos y tecnologías como la web semántica. Estos desarrollos han generado nuevas demandas sociales, sobre todo cuando se trata de temas de privacidad y ciberseguridad, que requieren un reajuste en las políticas, normativas, estructuras internas y sistemas tecnológicos. (Janssen & Voort, 2016) (Twinomurinzi, Phahlamohlaka, & Byrne, 2012).

                                <br />En este mismo sentido, el gobierno de TI se orienta al desarrollo estratégico de la tecnología alineada a los objetivos de la organización, diferenciándose de la gestión de TI, que se enfoca en la operación y administración cotidiana de los sistemas tecnológicos. Según (Juiz, Gómez, & Barceló, 2012) y (Welch & Feeney, 2014), este enfoque busca evidenciar que las TI constituyen un activo estratégico que genera valor, impulsando mecanismos de alineación entre las decisiones tecnológicas y los propósitos del negocio. Entonces, se puede decir que el gobierno de TI, IT Governance o ITG (Information Technology Governance) se define como los procesos que aseguran el uso efectivo y eficiente de TI para permitir que una organización logre sus objetivos estratégicos.

                                <br />Uno de los marcos más reconocidos por la comunidad académica y profesional para definir los componentes esenciales del gobierno de Tecnologías de la Información (TI) es el modelo propuesto por el IT Governance Institute en su versión COBIT 4.1 (2007). Este marco establece cinco dimensiones fundamentales para un gobierno efectivo de TI: alineación estratégica, que busca garantizar que las iniciativas tecnológicas estén en concordancia con los objetivos del negocio; la entrega de valor, que se refiere a asegurar que los servicios y soluciones de TI generen beneficios concretos a través de un ciclo eficiente de prestación; gestión de riesgos, que contempla la protección de los activos tecnológicos, la preparación ante desastres y el cumplimiento normativo; administración de recursos, que tiene como fin optimizar el uso y desarrollo de los recursos disponibles en TI y por último la medición del desempeño que permite evaluar resultados, identificar desviaciones y aplicar mejoras cuando sea necesario (Valencia, Marulanda, & López, 2018).

                            </p>
                        </section>

                        <h1 id="Aplicación del Dominio PO en el SIUDT" className="section-fade" style={{ animationDelay: '0.3s' }}>Aplicación del Dominio PO en el SIUDT, UNAN-Managua</h1>
                        <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                            <p>
                                La aplicación del dominio <strong>"Planear y Organizar"</strong> (PO) del marco COBIT 4.1 en los laboratorios del <strong>pabellón 16 del SIUDT</strong>, UNAN-Managua, busca mejorar la manera en que se manejan y planifican los recursos tecnológicos dentro de la universidad.

                                <br />Este conjunto de buenas prácticas ayuda a que las decisiones sobre tecnología estén bien pensadas, estén alineadas con las metas de la universidad y respondan realmente a las necesidades de los estudiantes, docentes y personal administrativo.

                                <br />Al aplicar este dominio, se comienza por revisar cómo están actualmente los laboratorios en cuanto a computadoras, redes, programas, soporte técnico y seguridad. Con base en ese diagnóstico, se proponen ideas claras para mejorar.

                                <br />Por ejemplo, se sugiere crear un plan estratégico que guíe el uso de la tecnología, definir qué equipos y programas se necesitan, pensar a futuro qué tecnologías podrían implementarse, y establecer cómo se organizará el equipo encargado de la gestión tecnológica.

                                <br />Este proceso no busca simplemente implementar más tecnología, sino usarla mejor, de forma planificada, ordenada y sostenible, para que los laboratorios funcionen de forma más eficiente, segura y con mejor servicio para toda la comunidad universitaria.

                                <br />En resumen, este enfoque ayuda a que los recursos tecnológicos se usen de manera más inteligente, con objetivos claros y beneficios reales para el aprendizaje y la gestión académica
                            </p>
                        </section>

                        <h1 id="Estrategias Tecnológicas" className="section-fade" style={{ animationDelay: '0.3s' }}>Estrategias Tecnológicas en la Planificación y Gestión de TI</h1>
                        <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                            <p>
                                La planificación estratégica de las Tecnologías de la Información (TI) es un proceso fundamental en el cual se alinean los recursos tecnológicos de una organización con los objetivos estratégicos de la misma. En un entorno educativo como el de la UNAN-Managua, donde los laboratorios del pabellón 16 desempeñan un papel crucial en el aprendizaje y la gestión académica, una adecuada planificación estratégica de las TI no solo optimiza la infraestructura tecnológica, sino que también asegura que las necesidades de los estudiantes, docentes y personal administrativo sean adecuadamente atendidas.

                                <br />De acuerdo con Salcedo Guzmán, San Martín Rebolloso y Andrade Vallejo (2022), la planificación estratégica de TI actúa como una palanca de alineación entre las tecnologías de la información y la competitividad institucional. Esto es especialmente relevante en el contexto de la educación superior, donde las instituciones deben adaptarse constantemente a un entorno globalizado y dinámico. La correcta planificación estratégica permite prever las necesidades futuras de TI, garantizando que las decisiones tecnológicas sean acertadas y estén en consonancia con las metas a largo plazo de la institución.

                                <br />Este proceso de planificación debe incluir varios componentes esenciales, tales como la renovación de equipos, la actualización de software, la mejora de la conectividad y la implementación de políticas de seguridad informática. Según estos autores, una de las características más importantes de la planificación estratégica es la capacidad de la organización para prever las tendencias tecnológicas emergentes y las necesidades cambiantes del entorno académico. Esto asegura que la infraestructura tecnológica esté preparada para soportar nuevas metodologías de enseñanza y gestión administrativa, permitiendo a la universidad mantenerse a la vanguardia en el uso de tecnologías.

                                <br />La planificación estratégica en TI también juega un papel crucial en la gestión de recursos. Tal como lo destaca Ward y Peppard (2016), la correcta asignación de recursos tecnológicos y humanos es fundamental para maximizar la eficiencia de las inversiones realizadas en TI.
                            </p>
                        </section>

                        <h1 id="Evaluación de la factibilidad" className="section-fade" style={{ animationDelay: '0.3s' }}>Evaluación de la factibilidad económica de las iniciativas tecnológicas</h1>
                        <section className="section-fade" style={{ animationDelay: '0.5s' }}>
                            <p>
                                La factibilidad económica es un aspecto crucial cuando se evalúa la viabilidad de cualquier proyecto tecnológico, especialmente en el contexto de los laboratorios del SIUDT en la UNAN-Managua. Es necesario realizar un análisis exhaustivo de los costos, beneficios, retorno de inversión (ROI) y sostenibilidad financiera para determinar si las propuestas de mejora tecnológica son viables desde el punto de vista económico. Este tipo de análisis permite a las instituciones tomar decisiones informadas sobre la asignación de recursos y la priorización de proyectos tecnológicos, garantizando que las inversiones realizadas en TI sean rentables y estén alineadas con los objetivos institucionales a largo plazo.

                                <br />En este sentido, los estudios sobre la factibilidad económica subrayan la importancia de no solo evaluar los costos directos, sino también los beneficios a largo plazo que pueden generar mejoras en los procesos educativos y administrativos. Según Schwalbe (2015), un análisis adecuado de factibilidad económica debe incluir una evaluación detallada de los costos iniciales y operativos, así como un cálculo preciso del retorno de inversión, para asegurar que cada proyecto tecnológico contribuya positivamente al rendimiento de la organización.

                            </p>
                        </section>

                    </div>

                </div>
            </div>
        </>

    );
}


export default Part2;