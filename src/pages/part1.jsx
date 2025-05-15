import { useState } from "react";
import '../styles/document.css';
import '../styles/etiquetas.css';

function Part1() {

    return (
        <>

            <div className="principal-container">
                <div className="container-titulos">
                    <nav>
                        <ul>
                            {/*aqui se realiza las etiquetas siempre se inicia con # que hace referencia a los titulos
                            tienen que ser los mismos nombres para que funcione */}
                            <li><a href="#Introducción">Introduccion</a></li>
                            <li><a href="#Antecedentes">Antecedentes</a></li>
                            <li><a href="#Justificacion">Justificación</a></li>
                            <li><a href="#Planteamiento del Problema">Planteamiento del Problema</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="scroll-container">


                    <div className="part-container">

                        {/*a los h1 denles el id correspodiente a la parte del documento */}
                        <h1 id="Introducción">Introducción</h1>
                        {/*los dividien por secciones */}
                        {/*fijense en el documento al para saber donde meter los <br/> que son saltos de linea */}
                        <section>
                            <p>
                                El estudio se centra en el análisis de la planificación estratégica de las Tecnologías de la Información (TI) y la gestión del Sistema de Información Universitario para el Desarrollo Tecnológico (SIUDT) de la UNAN-Managua. Estos elementos se articulan dentro del entorno de los laboratorios del pabellón 16, en el primer semestre del año 2025, donde se evidencia la necesidad de reforzar la etapa de planificación para garantizar la eficiencia y sostenibilidad del sistema. La investigación se desarrolla dentro del dominio “Planear” de COBIT 4.1, el cual aborda componentes esenciales como la alineación estratégica, la gestión de recursos y la formulación de objetivos tecnológicos alineados a las metas institucionales.
                                La planificación estratégica de las Tecnologías de la Información (TI) es esencial para el desarrollo efectivo de las instituciones educativas, permitiendo optimizar recursos, mejorar la toma de decisiones y garantizar la alineación con los objetivos institucionales (BerryDunn, s.f.).

                                <br /> La presente investigación se enfoca en el análisis del SIUDT de la UNAN-Managua, específicamente en los laboratorios del pabellón 16, donde se busca fortalecer la fase de planificación estratégica para mejorar la operatividad del sistema. La importancia de este estudio radica en la necesidad de alinear los procesos tecnológicos con las metas institucionales, considerando que el buen uso de las TI puede potenciar la eficiencia administrativa y académica. A través de este análisis, se pretende identificar las causas que dificultan la implementación efectiva de la planificación estratégica de TI en el contexto universitario y proponer soluciones que aseguren la sostenibilidad y continuidad del sistema. Este trabajo se desarrolla bajo un enfoque mixto y un paradigma socio-crítico, analizando tanto aspectos cuantitativos como cualitativos que permitan comprender las problemáticas y proponer mejoras concretas en la gestión del SIUDT.

                            </p>
                        </section>

                        <h1 id="Antecedentes">Antecedentes</h1>

                        <section>
                            <p>
                                Los laboratorios del pabellón 16 del Sistema de Información Universitario para el Desarrollo Tecnológico (SIUDT) de la UNAN-Managua son espacios importantes para el desarrollo académico y práctico de los estudiantes. Sin embargo, hasta el momento no cuentan con un Plan Estratégico de Tecnologías de la Información (PETI) que ayude a organizar y mejorar el uso de los recursos tecnológicos que se utilizan en ellos.

                                <br /> Actualmente, no se han encontrado estudios ni documentos previos que analicen o propongan una planificación clara sobre cómo deben gestionarse las tecnologías en estos laboratorios. Esta falta de información muestra una necesidad importante de mejorar la forma en que se manejan las tecnologías en este espacio.

                                <br />Por esta razón, se considera útil aplicar un enfoque basado en buenas prácticas, como el que ofrece COBIT 4.1, especialmente en su dominio “Planear”. Esto permitirá desarrollar un plan estratégico que sirva como guía para mejorar el uso de la tecnología, y que esté en sintonía con los objetivos de la institución y las necesidades de los estudiantes.

                                <br />A nivel nacional, aunque son pocos los estudios que abordan específicamente el uso de COBIT 4.1 en instituciones educativas, se han realizado trabajos relevantes en el ámbito de la gestión tecnológica. Por ejemplo, en la Universidad Nacional Autónoma de Nicaragua (UNAN-Managua), se desarrolló una auditoría de seguridad informática aplicando COBIT 4.1 en la empresa MS-América Central, lo cual permitió evaluar procesos clave como dirección informática y gestión de riesgos (Molina Gutiérrez, González Urroz, & Munguía Alfaro, 2017).

                                <br />Asimismo, se elaboró un plan estratégico de tecnología de información aplicando el dominio “Planear y Organizar” de COBIT 4.1 en la Dirección General de Función Pública del Ministerio de Hacienda, lo cual demuestra que este marco puede ser aplicado en contextos institucionales públicos similares (Vanegas Balmaceda, 2021).

                                <br /> A nivel internacional, se identifican antecedentes más cercanos al entorno académico. En Ecuador, por ejemplo, la Universidad Técnica del Norte evaluó las vulnerabilidades en ciberseguridad de sus laboratorios de computación usando COBIT como base para definir mejoras (Pantoja Mejía, 2023).
                                <br /> De igual forma, en la Universidad Técnica de Cotopaxi se desarrolló una planificación estratégica informática para la Escuela Técnica de la Fuerza Aérea, también basada en COBIT, con el objetivo de mejorar la gestión tecnológica institucional (Chiriboga Molina & Valencia Bedon, 2014).

                                <br /> Otro caso relevante es el de la Escuela Politécnica Nacional de Ecuador, donde se propuso mejorar la gestión de los laboratorios de la Facultad de Ingeniería de Sistemas utilizando el modelo COBIT, enfocado en analizar procesos y proponer soluciones prácticas (Lorena, 2010).

                                <br /> Estos antecedentes muestran que aplicar un plan estratégico de tecnología, usando una guía como COBIT, es útil para mejorar cómo se gestionan los recursos tecnológicos. Aunque en Nicaragua aún hay pocos ejemplos, las experiencias de otros países demuestran que este tipo de proyectos puede ser beneficioso, sobre todo en instituciones educativas como el SIUDT.

                            </p>
                        </section>

                        <h1 id="Justificacion">Justificación</h1>
                        <section>
                            <p>
                                El desarrollo y fortalecimiento de la infraestructura tecnológica es fundamental para garantizar una educación de calidad en las instituciones de educación superior. En el caso del Sistema de Información y Desarrollo Tecnológico (SIUDT) de la UNAN-Managua, específicamente los laboratorios del pabellón 16, se identifican desafíos que comprometen su operatividad y el aprovechamiento académico. Esta propuesta se justifica en la necesidad de transformar estos espacios mediante la implementación de un Plan Estratégico de Tecnología de la Información (PETI), apoyado en el dominio “Planear” del marco COBIT 4.1, que permitirá gestionar de forma integral y sostenible los recursos tecnológicos, promoviendo la eficiencia y actualización constante a través de herramientas como plataformas de monitoreo, software de gestión de aulas y sistemas de reserva digital.

                                <br />Uno de los beneficios más significativos del PETI será la mejora continua en la disponibilidad y operatividad de los equipos informáticos, mediante políticas de renovación tecnológica y mantenimiento oportuno. Esto permitirá garantizar un entorno moderno, estable y funcional que facilite el proceso de enseñanza-aprendizaje. Además, el uso de herramientas de monitoreo y control optimizará la administración de los recursos y mejorará la toma de decisiones basadas en datos reales.

                                <br />La aplicación del PETI también facilitará la capacitación tecnológica de docentes, estudiantes y personal técnico, permitiendo un mayor aprovechamiento de las plataformas y recursos digitales. Esto contribuirá al desarrollo de competencias digitales, fortalecerá la innovación pedagógica y fomentará una cultura institucional más abierta al cambio tecnológico. Asimismo, la estandarización de procesos y políticas contribuirá a una gestión más eficiente, transparente y resiliente ante posibles riesgos tecnológicos o presupuestarios.

                                <br />Los principales beneficiarios de la ejecución de este PETI serán los estudiantes, al contar con laboratorios funcionales y actualizados que potencien su aprendizaje práctico y digital. También se verán favorecidos los docentes, al disponer de recursos confiables y capacitaciones que mejoren sus metodologías. El personal técnico y administrativo dispondrá de lineamientos claros que facilitarán la gestión de los recursos, mientras que la universidad, en general, podrá garantizar una oferta académica más competitiva, moderna y alineada con los avances tecnológicos.

                            </p>
                        </section>

                        <h1 id="Planteamiento del Problema">Planteamiento del problema</h1>
                        <h2>Caracterización del problema.</h2>
                        <section>
                            <p>Los laboratorios ubicados en el Pabellón 16, pertenecientes al Sistema de Información y Desarrollo Tecnológico (SIUDT), de la UNAN-Managua enfrentan una variedad de impedimentos que afectan su operatividad, sostenibilidad y aprovechamiento académico. A pesar de ser de importancia para la formación de sus estudiantes estos espacios presentan debilidades en cuanto al cumplimiento en mantenimiento, gestión, administración y actualización de recursos tecnológicos.</p>
                        </section>

                        <h2>Delimitacion del problema.</h2>
                        <section>
                            <p>Actualmente, la poca frecuencia con la que se realiza el mantenimiento preventivo ha provocado el deterioro progresivo de más de la mitad de los equipos de cómputo disminuyendo su vida útil, lo cual a largo plazo generara mayores costos al realizar el mantenimiento correspondiente. Otras de las debilidades detectadas están relacionadas con la falta de organización por parte de los responsables para ejecutar de forma eficiente las actividades que aseguren el buen funcionamiento de los laboratorios, como la gestión de inventarios, el seguimiento de incidencias y la planificación operativa. Todo esto se ve agravado por el limitado acceso de la herramienta actualmente usada porque no facilita una administración efectiva a las necesidades actuales de los laboratorios provocando que algunos laboratorios queden vacíos sin que los encargados o docentes se den cuenta, lo que impide que puedan ser aprovechados por otros grupos que los necesitan.</p>
                        </section>

                        <h2>Formulación del problema.</h2>
                        <section>
                            <p>¿Cómo puede mejorarse la operatividad, sostenibilidad y aprovechamiento académico fortaleciendo el cumplimiento en mantenimiento, gestión, administración y actualización de recursos tecnológicos de los laboratorios del Pabellón 16 de la UNAN-Managua mediante un plan estratégico de la información?</p>
                        </section>

                        <h2>Sistematización del problema</h2>
                        <section>
                            <p>Identificado los factores que inciden en la gestión y aprovechamiento de los laboratorios del Pabellón 16 de la UNAN-Managua y orientado por la formulación del problema, se plantean las siguientes preguntas de sistematización para resolver el problema objeto de investigación. </p>
                            <div className="pregunta-card">
                                ¿Qué debilidades presenta actualmente la herramienta utilizada para monitorear y gestionar los laboratorios?
                            </div>
                            <div className="pregunta-card">
                                ¿Cómo influye la falta de organización en tareas como la gestión de inventarios, atención de incidencias y planificación operativa?
                            </div>
                            <div className="pregunta-card">
                                ¿Qué elementos debe contemplar un plan estratégico de tecnologías de información para responder de forma efectiva a las necesidades de gestión de estos espacios?
                            </div>
                            <div className="pregunta-card">
                                ¿Qué procesos del marco COBIT 4.1 podrían fortalecer la administración para una gestión más eficiente y alineada a los objetivos del SIUDT?
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Part1;