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
                            <li><a href="#Introducción">Introduccion</a></li>
                            <li><a href="#Antecedentes">Antecedentes</a></li>
                            <li><a href="#Alcance2">1.3 Alcance</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="scroll-container">


                    <div className="part-container">
                        <h1 id="Introducción">Introducción</h1>

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


                    </div>

                </div>
            </div>
        </>

    );
}

export default Part1;