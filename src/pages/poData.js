const infoparrafos = [
    {
        titulo: "PO1",
        indicadores: [
            "% de equipos funcionales disponibles por semana",
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
        ],

        metas: [
            "Responder a los requerimientos del negocio en alineación con la estrategia del negocio",
            "Responder a los requerimientos de gobierno alineados con la dirección del consejo directivo"
        ],
        procesos: [
            "Definir cómo los requerimientos de negocio se traducen en ofertas de servicio",
            "Definir la estrategia para la entrega de las ofertas de servicio",
            "Contribuir a la gestión del portafolio de inversiones de negocio de TI",
            "Establecer claridad del impacto de los riesgos en los objetivos y en los recursos",
            "Proporcionar transparencia y entendimiento de costos, beneficios, estrategias, políticas y niveles de servicio de TI"
        ],
        actividades: [
            "Involucrarse con la alta gerencia y la gerencia del negocio para alinear los planes estratégicos de TI con las necesidades del negocio actuales y futuras",
            "Entender las capacidades actuales de TI",
            "Traducir el plan estratégico de TI a planes tácticos",
            "Brindar un esquema de prioridades para los objetivos del negocio que cuantifiquen los requerimientos del negocio"
        ],
        metricas_ti: [
            "Grado de aprobación de los Dueños del negocio de los planes estratégicos/tácticos de TI",
            "Grado de cumplimiento de requerimientos de gobierno y de negocio",
            "Nivel de satisfacción del negocio con el estado actual del portafolio de proyectos y aplicaciones (número, alcance, etc.)"
        ],
        metricas_procesos: [
            "% de objetivos de TI en el plan estratégico de TI que dan soporte al plan estratégico del negocio",
            "% de iniciativas de TI en el plan táctico de TI que da soporte al plan táctico del negocio",
            "% de proyectos de TI en el portafolio de proyectos de TI que se pueden rastrear de forma directa al plan táctico de TI"
        ],
        metricas_actividades: [
            "Retrasos existentes entre las actualizaciones del plan estratégico/táctico del negocio y las actualizaciones del plan estratégico/táctico de TI",
            "% de reuniones de planeación estratégica/táctica de TI donde los representantes del negocio participaron de forma activa",
            "Retraso entre actualizaciones de planes estratégicos de TI y actualizaciones de planes tácticos de TI",
            "% de planes tácticos de TI con el contenido/estructura predefinida de esos planes",
            "% de iniciativas/proyectos TI dirigidos por Dueños del negocio"
        ],

        // Tablas que contienen la informacion de los PO
        tablas: [
            {
                titulo: "Tabla de Entradas y Salidas",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 5, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", "", "", "", ""],
                data: [
                    {
                        desde: "P05",
                        entradas: "Reportes de costo / beneficio",
                        salidas: "Plan estratégico de TI",
                        hacia: ["PO2..PO6", "PO8", "PO9", "AI1", "DS1"]
                    },
                    {
                        desde: "P09",
                        entradas: "Evaluación de riesgo",
                        salidas: "Plan táctico de TI",
                        hacia: ["PO2..PO6", "PO9", "AI1", "DS1", ""]
                    },
                    {
                        desde: "*",
                        entradas: "Estrategia y prioridades del negocio",
                        salidas: "Estrategia de contratación externa de TI",
                        hacia: ["DS2", "", "", "", ""]
                    },
                    {
                        desde: "ME1",
                        entradas: "Entradas a desempeño de planeación de TI",
                        salidas: "Estrategia de adquisición de TI",
                        hacia: ["AI5", "", "", "", ""]
                    }
                ],

            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishel Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermudez S.",
                    "Erwing A. Hernandez G."
                ],
                data: [
                    { actividad: "Crear un catálogo de riesgos tecnológicos por laboratorio.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Definir tipos de riesgos (técnicos, legales, operativos).", raci: ["A", "R", "C", "I"] },
                    { actividad: "Establecer criterios para evaluar impacto y probabilidad.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Implementar matriz de riesgos TI.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diseñar planes de mitigación por riesgo identificado.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Elaborar bitácoras de eventos y acciones de respuesta.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Revisar periódicamente la matriz de riesgos.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Asociar riesgos a cada etapa de los proyectos tecnológicos.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Aplicar controles preventivos para evitar obsolescencia.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Integrar riesgos en las decisiones presupuestarias y de planificación.", raci: ["A", "R", "C", "I"] },
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ]
    },
    {
        titulo: "PO2",
        indicadores: [],
        contenido: [
            {
                subtema: "PO2.X Subtema 1 de PO2",
                parrafo: "Párrafo sobre el subtema 1 de PO2. Rellena con la descripción correspondiente."
            },

        ],

        metas: [
            "Meta de PO2 - Requerimiento del negocio",
            "Meta de PO2 - Requerimiento de gobierno",
        ],
        procesos: [
            "Proceso de PO2 - Definir la oferta de servicio",
            "Proceso de PO2 - Estrategia de entrega",
        ],
        actividades: [
            "Actividad de PO2 - Involucramiento con la gerencia",
            "Actividad de PO2 - Entender capacidades de TI",
        ],
        metricas_ti: [
            "Métrica TI de PO2 - Aprobación del negocio",
            "Métrica TI de PO2 - Cumplimiento de requerimientos",
        ],
        metricas_procesos: [
            "Métrica de Procesos de PO2 - % de objetivos de TI",
            "Métrica de Procesos de PO2 - % de iniciativas de TI",
        ],
        metricas_actividades: [
            "Métrica de Actividades de PO2 - Retrasos en actualizaciones",
            "Métrica de Actividades de PO2 - % de reuniones con participación del negocio",
        ],


        tablas: [
            // Ejemplo de Tabla de Entradas y Salidas para PO2 (puedes copiar y modificar la de PO1)

            {
                titulo: "Tabla de Entradas y Salidas de PO2",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 5, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", "", "", "", ""],
                data: [
                    {
                        desde: "POX",
                        entradas: "Entrada específica de PO2",
                        salidas: "Salida específica de PO2",
                        hacia: ["POY", "POZ", "", "", ""]
                    },

                ],
            },


            // Ejemplo de Matriz RACI 

            {
                titulo: "Matriz RACI de PO2",
                tipo: "raci",
                headersPersonas: [
                    "Mishel Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermudez S.",
                    "Erwing A. Hernandez G."
                ],
                data: [
                    { actividad: "Actividad 1 de PO2 para RACI", raci: ["R", "A", "C", "I"] },
                    { actividad: "Actividad 2 de PO2 para RACI", raci: ["A", "R", "I", "C"] },

                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado para PO2."
            }

        ]

    }
];

const planAccion = [
    {
        perspectiva: "Financiero",
        objetivosNegocio: [
            {
                objetivo: "Optimizar el uso de los recursos tecnológicos para reducir costos operativos.",
                objetivosTI: [
                    "Obj4. Implementar un sistema automatizado de control de inventario por laboratorio en el pabellón 16 del SIUDT, que permita registrar, monitorear y actualizar en tiempo real los activos tecnológicos para una gestión más precisa y eficiente.",
                    "Objt10. Diseñar un módulo automatizado para la planificación y notificación del mantenimiento preventivo de equipos tecnológicos en los laboratorios del pabellón 16 del SIUDT.",
                    "Obj9. Implementar la herramienta Beyond para automatizar el control, monitoreo y soporte remoto de los equipos de los laboratorios del pabellón 16 del SIUDT, con el fin de mejorar la eficiencia operativa, reducir tiempos de respuesta y garantizar la seguridad en la gestión técnica."
                ]
            },
            {
                objetivo: "Garantizar que las inversiones en la infraestructura tecnológica aporten de forma medible a la eficiencia operativa.",
                objetivosTI: [
                    "Obj2. Implementar un sistema automatizado de reservas para los laboratorios del pabellón 16 del SIUDT, que permita gestionar de forma eficiente la asignación de espacios y recursos tecnológicos.",
                    "Obj6. Implementar un sistema de monitoreo automatizado con Nagios para supervisar en tiempo real el estado, disponibilidad y rendimiento de los equipos de los laboratorios del pabellón 16 del SIUDT, con el fin de detectar fallos, prevenir interrupciones y optimizar la gestión técnica.",
                    "Obj5. Diseñar e implementar un Dashboard automatizado para los laboratorios del pabellón 16 del SIUDT, que permita visualizar en tiempo real indicadores clave sobre el estado de equipos, uso de recursos, incidencias y disponibilidad de espacios.",
                    "Obj9. Implementar la herramienta Beyond para automatizar el control, monitoreo y soporte remoto de los equipos de los laboratorios del pabellón 16 del SIUDT, con el fin de mejorar la eficiencia operativa, reducir tiempos de respuesta y garantizar la seguridad en la gestión técnica."
                ]
            }
        ]
    },
    {
        perspectiva: "Clientes",
        objetivosNegocio: [
            {
                objetivo: "Mejorar la satisfacción y experiencia de los usuarios en la gestión de laboratorios.",
                objetivosTI: [
                    "Obj2. Implementar un sistema automatizado de reservas para los laboratorios del pabellón 16 del SIUDT, que permita gestionar de forma eficiente la asignación de espacios y recursos tecnológicos.",
                    "Obj7. Diseñar e implementar un módulo de gestión de incidencias técnicas en los laboratorios del pabellón 16 del SIUDT, que permita el reporte, seguimiento y resolución de problemas técnicos de forma ágil y centralizada.",
                    "Obj5. Diseñar e implementar un Dashboard automatizado para los laboratorios del pabellón 16 del SIUDT, que permita visualizar en tiempo real indicadores clave sobre el estado de equipos, uso de recursos, incidencias y disponibilidad de espacios."
                ]
            },
            {
                objetivo: "Garantizar la seguridad y acceso controlado a los laboratorios.",
                objetivosTI: [
                    "Obj1. Definir políticas institucionales sobre el uso, mantenimiento y seguridad de la infraestructura tecnológica.",
                    "Obj9. Implementar la herramienta Beyond para automatizar el control, monitoreo y soporte remoto de los equipos de los laboratorios del pabellón 16 del SIUDT, con el fin de mejorar la eficiencia operativa, reducir tiempos de respuesta y garantizar la seguridad en la gestión técnica.",
                    "Obj3. Desarrollar e implementar un sistema automatizado para el control y monitoreo de los programas instalados en los laboratorios del pabellón 16 del SIUDT, que permita garantizar la integridad, legalidad y actualización del software."
                ]
            }
        ]
    },
    {
        perspectiva: "Procesos Internos",
        objetivosNegocio: [
            {
                objetivo: "Automatizar y optimizar el control de inventarios, reservas, mantenimiento e incidencias.",
                objetivosTI: [
                    "Obj2. Implementar un sistema automatizado de reservas para los laboratorios del pabellón 16 del SIUDT, que permita gestionar de forma eficiente la asignación de espacios y recursos tecnológicos.",
                    "Obj4. Implementar un sistema automatizado de control de inventario por laboratorio en el pabellón 16 del SIUDT, que permita registrar, monitorear y actualizar en tiempo real los activos tecnológicos para una gestión más precisa y eficiente.",
                    "Obj7. Diseñar e implementar un módulo de gestión de incidencias técnicas en los laboratorios del pabellón 16 del SIUDT, que permita el reporte, seguimiento y resolución de problemas técnicos de forma ágil y centralizada.",
                    "Objt10. Diseñar un módulo automatizado para la planificación y notificación del mantenimiento preventivo de equipos tecnológicos en los laboratorios del pabellón 16 del SIUDT."
                ]
            },
            {
                objetivo: "Implementar sistemas de monitoreo y reporte en tiempo real.",
                objetivosTI: [
                    "Obj5. Diseñar e implementar un Dashboard automatizado para los laboratorios del pabellón 16 del SIUDT, que permita visualizar en tiempo real indicadores clave sobre el estado de equipos, uso de recursos, incidencias y disponibilidad de espacios.",
                    "Obj6. Implementar un sistema de monitoreo automatizado con Nagios para supervisar en tiempo real el estado, disponibilidad y rendimiento de los equipos de los laboratorios del pabellón 16 del SIUDT, con el fin de detectar fallos, prevenir interrupciones y optimizar la gestión técnica.",
                    "Obj9. Implementar la herramienta Beyond para automatizar el control, monitoreo y soporte remoto de los equipos de los laboratorios del pabellón 16 del SIUDT, con el fin de mejorar la eficiencia operativa, reducir tiempos de respuesta y garantizar la seguridad en la gestión técnica."
                ]
            }
        ]
    },
    {
        perspectiva: "Aprendizaje y Feedback",
        objetivosNegocio: [
            {
                objetivo: "Capacitar al personal técnico y usuarios en nuevas tecnologías y políticas.",
                objetivosTI: [
                    "Obj1. Definir políticas institucionales sobre el uso, mantenimiento y seguridad de la infraestructura tecnológica.",
                    "Obj9. Implementar la herramienta Beyond para automatizar el control, monitoreo y soporte remoto de los equipos de los laboratorios del pabellón 16 del SIUDT, con el fin de mejorar la eficiencia operativa, reducir tiempos de respuesta y garantizar la seguridad en la gestión técnica.",
                    "Obj10. Diseñar un módulo automatizado para la planificación y notificación del mantenimiento preventivo de equipos tecnológicos en los laboratorios del pabellón 16 del SIUDT."
                ]
            },
            {
                objetivo: "Fomentar la cultura de mejora continua y adopción tecnológica.",
                objetivosTI: [
                    "Obj1. Definir políticas institucionales sobre el uso, mantenimiento y seguridad de la infraestructura tecnológica.",
                    "Obj5. Diseñar e implementar un Dashboard automatizado para los laboratorios del pabellón 16 del SIUDT, que permita visualizar en tiempo real indicadores clave sobre el estado de equipos, uso de recursos, incidencias y disponibilidad de espacios.",
                    "Obj8. Implementar un módulo de bitácora digital para los laboratorios del pabellón 16 del SIUDT, destinado exclusivamente a los responsables y al Jefe del SIUDT, que permita registrar diariamente actividades realizadas, observaciones relevantes y estado general de los recursos."
                ]
            }
        ]
    }
];




export default {infoparrafos, planAccion}; // Exporta la constante