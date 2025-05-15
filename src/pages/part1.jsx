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
                            <li><a href="#Introducción">1. Introduccion</a></li>
                            <li><a href="#objetivo-general">1.2 Objetivo General</a></li>
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
                                La planificación estratégica de las Tecnologías de la Información (TI) es esencial para el desarrollo efectivo de las instituciones educativas, permitiendo optimizar recursos, mejorar la toma de decisiones y garantizar la alineación con los objetivos institucionales (BerryDunn, s.f.). <br/> <br/> La presente investigación se enfoca en el análisis del SIUDT de la UNAN-Managua, específicamente en los laboratorios del pabellón 16, donde se busca fortalecer la fase de planificación estratégica para mejorar la operatividad del sistema. La importancia de este estudio radica en la necesidad de alinear los procesos tecnológicos con las metas institucionales, considerando que el buen uso de las TI puede potenciar la eficiencia administrativa y académica. A través de este análisis, se pretende identificar las causas que dificultan la implementación efectiva de la planificación estratégica de TI en el contexto universitario y proponer soluciones que aseguren la sostenibilidad y continuidad del sistema. Este trabajo se desarrolla bajo un enfoque mixto y un paradigma socio-crítico, analizando tanto aspectos cuantitativos como cualitativos que permitan comprender las problemáticas y proponer mejoras concretas en la gestión del SIUDT.

                            </p>
                        </section>

                        <section>
                            <h2>1.2 Objetivo General</h2>
                            <p>
                                Diseñar e implementar un plan estratégico de tecnologías de información para
                                mejorar la eficiencia de los procesos de la organización.
                            </p>
                        </section>

                        
                    </div>

                </div>
            </div>
        </>

    );
}

export default Part1;