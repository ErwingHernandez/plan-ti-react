const infoparrafos = [
    {
        titulo: "PO1",
        indicadores: [
            "a.	Desarrollar un plan estratégico de TI que contemple la renovación tecnológica periódica, minimizando la dependencia del presupuesto (D1), anticipando la obsolescencia (D2) y alineando la infraestructura tecnológica a los procesos académicos del laboratorio. Proceso vinculado: Mejora de infraestructura",

            "b.	Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO1.1 Administración del Valor de TI",
                parrafo: "El plan estratégico de TI deberá asegurar que cada proyecto tecnológico que se realiza en el pabellón 16 pase por un filtro que garantice la factibilidad de la inversión, es decir que no será solo un gasto sino un aporte al desarrollo de los estudiantes que utilicen los laboratorios."
            },
            {
                subtema: "PO1.2 Alineación de TI con el Negocio",
                parrafo: "Asegurar que el Plan Estratégico de TI esté alineado a los objetivos de la universidad, tomando en cuenta el estado actual de los laboratorios y las necesidades de los usuarios de tal modo que se pueda establecer prioridades que cumplan las metas a mediano y largo plazo."
            },
            {
                subtema: "PO1.3 Evaluación del Desempeño y la Capacidad Actual",
                parrafo: "Realizar un monitoreo para determinar el estado actual de los laboratorios y el rendimiento actual de su sistema de monitoreo para identificar brechas tecnológicas."
            },
            {
                subtema: "PO1.4 Plan Estratégico de TI",
                parrafo: "Diseñar un Plan Estratégico para el pabellón 16 que detalle presupuesto de la inversión/operativo, fuentes de financiamiento, estrategia de obtención, estrategia de adquisición y los requerimientos legales y regulatorios, alineado a los objetivos institucionales y recursos disponibles."
            }


        ],

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
                ]
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
                    { actividad: "Recopilar información sobre el estado actual de la infraestructura tecnológica", raci: ["A", "R", "C", "I"] },
                    { actividad: "Identificar tendencias tecnológicas relevantes para la universidad", raci: ["A", "R", "C", "I"] },
                    { actividad: "Definir criterios para evaluación de inversiones tecnológicas", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diseñar el borrador inicial del desarrollo del plan estratégico TI", raci: ["A", "R", "C", "I"] },
                    { actividad: "Consultar riesgos TI asociados al plan", raci: ["A", "R", "C", "I"] },
                    { actividad: "Elaborar un marco para la visión tecnológica a futuro", raci: ["A", "R", "C", "I"] },
                    { actividad: "Definir estrategia de mitigación de riesgos", raci: ["A", "R", "C", "I"] },
                    { actividad: "Establecer la estrategia de adquisición de TI", raci: ["A", "R", "C", "I"] },
                    { actividad: "Alinear TI con los propósitos de la Institución", raci: ["A", "R", "C", "I"] },
                    { actividad: "Aprobación y comunicación del Plan Estratégico de TI a todos", raci: ["A", "R", "C", "I"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }

        ],
        meetasymetricas: [{
            titulo: "Metas y Metricas",
            subtema: "Alinear el plan estratégico de TI con los objetivos institucionales y asegurar su aprobación por la alta dirección.",

            metricas: [
                "% de objetivos de TI alineados con los objetivos institucionales",
                "Grado de aprobación del plan estratégico de TI por parte de las partes interesada.",
                "% de ejecución de las estrategias del plan dentro del primer año."
            ]
        }

        ],


    },

    {
        titulo: "PO2",
        indicadores: [
            "a. Establecer una arquitectura tecnológica que garantice la integración entre los sistemas de préstamo, reporte y seguimiento de incidencias, enfrentando limitaciones en el mantenimiento (D3) y el uso de herramientas obsoletas (D2). Procesos vinculados: Préstamo de dispositivos, Informe de incidencias.",
            "b. Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO2.1 Modelo de Arquitectura de Información Empresarial",
                parrafo: "Desarrollar un modelo de arquitectura de información integral que facilite la toma de decisiones, consistente con los planes estratégicos de TI, es decir, que toda la información referente a los laboratorios esté claramente delimitada según roles, cuidada, sin errores, y siempre sea confiable, sin importar dónde esté guardada."
            },
            {
                subtema: "PO2.2 Administración de Integridad",
                parrafo: "Realizar evaluaciones periódicas para asegurar la integridad, consistencia y actualización de los datos relacionados con la infraestructura tecnológica y el uso de los laboratorios del pabellón 16. Esto incluye inventarios de hardware y software, registros de mantenimiento, control de licencias y respaldos de configuración."
            }
        ],
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
                        desde: "PO3",
                        entradas: "Estándares tecnológicos documentados",
                        salidas: "Plan arquitectónico basado en tecnologías estratégicas.",
                        hacia: ["PO4", "PO3", "PO9", "", ""]
                    },
                    {
                        desde: "PO1",
                        entradas: "Plan Estratégico de TI",
                        salidas: "Sistemas de TI (conforme a los objetivos institucionales)",
                        hacia: ["PO3", "PO6", "PO7", "", ""]
                    },
                    {
                        desde: "PO9",
                        entradas: "Marco de riesgos potenciales de SI",
                        salidas: "Rúbricas técnicas anti obsolescencia",
                        hacia: ["PO2", "PO3", "PO9", "", ""]
                    }
                ]
            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishel Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermúdez S.",
                    "Erwing A. Hernández G."
                ],
                data: [
                    { actividad: "Realizar diagnóstico de los sistemas actuales de inventario, incidencias y reservas para evaluar su grado de integración.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diseñar un modelo de arquitectura tecnológica alineado al PETI del SIUDT.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Identificar y clasificar la información crítica por tipo de laboratorio y uso.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Diseñar e implementar un plan de actualización de datos institucionales en los sistemas.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Establecer políticas para acceso, actualización y eliminación de datos.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Crear lineamientos de respaldo y recuperación de datos.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Integrar bases de datos para seguimiento de incidencias y préstamos.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Establecer indicadores de calidad para evaluar la confiabilidad del modelo implementado.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Desarrollar una herramienta para visualización estructurada de datos.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Elaborar documentación técnica de la arquitectura.", raci: ["I", "R", "C", "C"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ],
        metricas_ti: [
            "% de procesos integrados bajo la nueva arquitectura.",
            "Nº de errores de datos detectados mensualmente.",
            "% de personal que comprende el modelo de arquitectura."
        ]
    },

    {
        titulo: "PO3",
        indicadores: [
            "a. Establecer directrices tecnológicas que favorezcan la modernización continua, considerando amenazas como la falta de innovación (A1) y la desactualización tecnológica (A2), impulsando mejoras alineadas a las necesidades académicas. Proceso vinculado: Mejora de infraestructura",
            "b. Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO3.1 Planeación de la Dirección Tecnológica",
                parrafo: "Definir el rumbo tecnológico de los laboratorios del pabellón 16 en base a un análisis de situación actual que permita identificar las debilidades actuales y convertirlas en oportunidad para definir la dirección apropiada a tomar para materializar la estrategia de TI."
            },
            {
                subtema: "PO3.2 Monitoreo de Tendencias Y Regulaciones Futuras",
                parrafo: "Establecer procesos que permitan identificar y evaluar la tendencias tecnológicas y normativas emergentes que puedan influir en el mejoramiento de la enseñanza en los laboratorios."
            },
            {
                subtema: "PO3.3 Estándares tecnológicos",
                parrafo: "Establecer estándares tecnológicos claros y documentados para la adquisición, configuración y uso de equipos, software y servicios en los laboratorios. Estos estándares deben servir como base para asegurar la compatibilidad, eficiencia operativa y seguridad del entorno tecnológico, y estar alineados con las necesidades académicas."
            }
        ],
        tablas: [
            {
                titulo: "Directrices Generales",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 4, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", ""],
                data: [
                    {
                        desde: "PO1",
                        entradas: "TI orientada a los objetivos institucionales",
                        salidas: "Portafolio de Proyectos",
                        hacia: ["PO1", "PO2", "PO4", "PO10"]
                    },
                    {
                        desde: "PO5",
                        entradas: "Registro de necesidades de TI",
                        salidas: "Marco de priorización de inversiones",
                        hacia: ["PO2", "PO7", "", ""]
                    },
                    {
                        desde: "PO9",
                        entradas: "Catálogo de tecnologías completas con baja obsolescencia o con soporte futuro.",
                        salidas: "Marco referencial de gestión de riesgos.",
                        hacia: ["PO5", "PO1", "", ""]
                    }
                ]
            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishell Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermúdez S.",
                    "Erwing A. Hernández G."
                ],
                data: [
                    { actividad: "Levantar diagnóstico tecnológico de los laboratorios.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Identificar debilidades tecnológicas actuales y documentarlas.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Analizar tendencias tecnológicas y normativas aplicables al contexto educativo.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Elaborar propuesta de dirección tecnológica alineada al PETI.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Definir estándares para adquisición y uso de tecnología.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Evaluar cumplimiento de estándares tecnológicos en cada laboratorio.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Identificar oportunidades de innovación con base en tendencias globales.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Diseñar matriz de compatibilidad tecnológica (hardware/software).", raci: ["C", "R", "C", "I"] },
                    { actividad: "Generar cronograma de renovación tecnológica priorizada.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Integrar los estándares tecnológicos en los procesos de adquisición.", raci: ["A", "R", "C", "I"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ],
        meetasymetricas: [
            {
                titulo: "Metas y Métricas",
                subtema: "Definir una dirección tecnológica clara, basada en estándares y tendencias, que guíe la adquisición y renovación de infraestructura en los laboratorios.",
                metricas: [
                    "% de adquisición de tecnología conforme a estándares definidos.",
                    "Nº de recomendaciones implementadas del diagnóstico tecnológico.",
                    "Nº de tendencias tecnológicas evaluadas y documentadas anualmente."
                ]
            }
        ]
    },

    {
        titulo: "PO4",
        indicadores: [
            "a. Estructurar formalmente los procesos de préstamo, reporte y seguimiento de incidencias, minimizando el impacto de la falta de herramientas (D3) y asegurando la continuidad del servicio sin depender exclusivamente del personal técnico (D5). Procesos vinculados: Préstamo de dispositivos, Reporte de actividades semanal, Informe de incidencias.",
            "b. Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO4.1 Marco de Trabajo de Procesos de TI",
                parrafo: "Establecer una relación clara entre los procesos técnicos (mantenimiento, soporte, seguridad), los procesos académicos (docencia, uso de recursos, evaluación) y los procesos administrativos (planificación, adquisición, control)."
            },
            {
                subtema: "PO4.2 Establecimiento de Roles y Responsabilidades",
                parrafo: "Evaluar la distribución organizativa actual identificando brechas administrativas en cuanto a la delimitación de autoridad/responsabilidad según roles."
            },
            {
                subtema: "PO4.3 Propiedad de Datos y Sistemas",
                parrafo: "Establecer roles y responsabilidades para cada proceso, minimizando la improvisación en la gestión operativa de los laboratorios."
            },
            {
                subtema: "PO4.4 Relaciones",
                parrafo: "Definir mecanismos de comunicación entre responsables de laboratorios y otras áreas para asegurar la integración de TI en los procesos institucionales."
            }
        ],
        tablas: [
            {
                titulo: "Directrices Generales",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 4, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", ""],
                data: [
                    {
                        desde: "PO1",
                        entradas: "Plan Estratégico de TI",
                        salidas: "Marco de Procesos de TI",
                        hacia: ["PO7", "PO6", "PO8", ""]
                    },
                    {
                        desde: "PO7",
                        entradas: "Plan Formación y Desarrollo de Competencias",
                        salidas: "Modelo de Roles y responsabilidades por proceso",
                        hacia: ["PO6", "PO10", "", ""]
                    },
                    {
                        desde: "PO8",
                        entradas: "Definición de Control de Calidad por Etapa",
                        salidas: "Prototipo de mejora de Procesos",
                        hacia: ["PO6", "PO7", "PO10", ""]
                    },
                    {
                        desde: "PO6",
                        entradas: "Estrategia de comunicación institucional TI",
                        salidas: "Diagramas de los procesos con comprensión clara.",
                        hacia: ["PO3", "PO7", "", ""]
                    }
                ]
            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishell Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermúdez S.",
                    "Erwing A. Hernández G."
                ],
                data: [
                    { actividad: "Identificar los procesos TI existentes en el SIUDT.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diagramar los procesos operativos, académicos y administrativos.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Crear un manual organizativo de procesos de TI.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Establecer reglas para la propiedad de los procesos.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Clarificar relaciones entre procesos TI y usuarios académicos.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Identificar puntos de contacto entre TI y otras áreas.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Proponer indicadores de desempeño por proceso.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diseñar flujos de procesos con herramientas visuales (diagramas).", raci: ["I", "R", "C", "C"] },
                    { actividad: "Establecer protocolos de escalamiento de problemas.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Implementar tablero de seguimiento de procesos clave.", raci: ["A", "R", "C", "I"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ],
        meetasymetricas: [
            {
                titulo: "Metas y Métricas",
                subtema: "Estructurar los procesos TI en los laboratorios con roles definidos y relaciones claras entre el personal académico, técnico y administrativo.",
                metricas: [
                    "% de procesos TI documentados y validados.",
                    "% de roles formalmente asignados y comprendidos.",
                    "Nº de incidencias por errores en procesos (antes vs. después de la implementación)."
                ]
            }
        ]
    },

    {
        titulo: "PO5",
        indicadores: [
            "a. Definir mecanismos de priorización de inversión tecnológica, atendiendo amenazas como la falta de acceso a recursos de calidad (A6) y debilidades como la dependencia presupuestaria (D1). Proceso vinculado: Mejora de infraestructura.",
            "b. Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO5.1 Marco de Trabajo para la Administración Financiera",
                parrafo: "Definir un marco que planifique, priorice y justifique inversiones según impacto académico, dando preferencia a las áreas críticas para el aprendizaje."
            },
            {
                subtema: "PO5.2 Proceso Presupuestal",
                parrafo: "Establecer un registro de necesidades tecnológicas incluyendo el gasto que representa, propiciando que estas adquisiciones se mantengan dentro del alcance presupuestario."
            },
            {
                subtema: "PO5.5 Administración de Beneficios",
                parrafo: "Analizar y reportar el impacto de estas inversiones en el ámbito de los objetivos de la institución académica, lo cual permitirá ajustar el portafolio según resultados obtenidos."
            }
        ],
        tablas: [
            {
                titulo: "Directrices Generales",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 4, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", ""],
                data: [
                    {
                        desde: "PO1",
                        entradas: "Situación Actual de TI",
                        salidas: "Borrador de Presupuesto de Prioridades Estratégicas.",
                        hacia: ["PO10", "PO3", "PO4", "PO6"]
                    },
                    {
                        desde: "PO10",
                        entradas: "Portafolio de Proyectos",
                        salidas: "Plan de Administración de Recursos por Etapa",
                        hacia: ["PO4", "PO9", "", ""]
                    },
                    {
                        desde: "PO3",
                        entradas: "Estándares tecnológicos documentados (Rubrica)",
                        salidas: "Modelo de Presupuesto de TI",
                        hacia: ["PO8", "", "", ""]
                    }
                ]
            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishell Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermúdez S.",
                    "Erwing A. Hernández G."
                ],
                data: [
                    { actividad: "Recopilar necesidades tecnológicas de cada laboratorio.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Estimar presupuesto por laboratorio y categoría de equipo.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Definir criterios de priorización de inversiones tecnológicas.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Elaborar plan de inversión en TI.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Crear formato de solicitud presupuestaria de TI.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Documentar los beneficios esperados de cada inversión.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Evaluar impacto académico de posibles inversiones a realizar.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Crear portafolio de proyectos tecnológicos priorizados.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Generar reportes semestrales de retorno de inversión.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Ajustar el portafolio según los logros académicos evidenciados.", raci: ["A", "R", "C", "I"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ],
        meetasymetricas: [
            {
                titulo: "Metas y Métricas",
                subtema: "Gestionar las inversiones en TI de forma eficiente, priorizando aquellas que aporten beneficios medibles y retornos sostenibles.",
                metricas: [
                    "% del presupuesto ejecutado en proyectos prioritarios.",
                    "ROI (Retorno de inversión) promedio por iniciativa TI.",
                    "% de ejecución presupuestaria del plan de TI al finalizar el año fiscal."
                ]
            }
        ]
    },

    {
        titulo: "PO6",
        indicadores: [
            "a. Establecer una estrategia de comunicación para socializar la importancia de adoptar nuevas herramientas tecnológicas, reduciendo la resistencia al cambio (D4) y alineando la visión de los actores involucrados. Procesos vinculados: Mejora de infraestructura, Reporte de actividades semanal.",
            "b. Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO6.1 Comunicación Interna",
                parrafo: "Definir canales formales para transmitir lineamientos estratégicos de TI a todo el personal, fomentando la transparencia y el compromiso."
            },
            {
                subtema: "PO6.2 Plan de Comunicación",
                parrafo: "Diseñar un plan que contemple mensajes clave, frecuencia, medios y responsables de la comunicación institucional en temas de tecnología."
            },
            {
                subtema: "PO6.4 Administración del Cambio",
                parrafo: "Promover actividades de sensibilización y capacitación que preparen al personal para adoptar las nuevas soluciones tecnológicas con menor resistencia."
            }
        ],
        tablas: [
            {
                titulo: "Directrices Generales",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 4, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", ""],
                data: [
                    {
                        desde: "PO5",
                        entradas: "Plan de Inversión Tecnológica",
                        salidas: "Mensajes clave sobre inversiones prioritarias",
                        hacia: ["PO7", "PO9", "", ""]
                    },
                    {
                        desde: "PO1",
                        entradas: "Diagnóstico del entorno institucional",
                        salidas: "Necesidad de reforzar comunicación interna",
                        hacia: ["PO10", "PO4", "", ""]
                    }
                ]
            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishell Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermúdez S.",
                    "Erwing A. Hernández G."
                ],
                data: [
                    { actividad: "Definir canales de comunicación sobre TI.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diseñar boletines y mensajes digitales.", raci: ["C", "R", "A", "I"] },
                    { actividad: "Coordinar reuniones informativas de TI.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Capacitar sobre nuevos sistemas implementados.", raci: ["R", "A", "C", "I"] },
                    { actividad: "Recopilar retroalimentación de los usuarios.", raci: ["R", "C", "A", "I"] },
                    { actividad: "Actualizar el plan de comunicación cada semestre.", raci: ["A", "R", "C", "I"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ],
        meetasymetricas: [
            {
                titulo: "Metas y Métricas",
                subtema: "Fortalecer la cultura organizacional hacia la innovación tecnológica mediante una comunicación estratégica efectiva.",
                metricas: [
                    "% de personal informado sobre los cambios tecnológicos.",
                    "Nivel de satisfacción con los canales de comunicación TI.",
                    "Nº de actividades de sensibilización y capacitaciones realizadas por semestre."
                ]
            }
        ]
    },

    {
        titulo: "PO7",
        indicadores: [
            "a. Implementar un plan de mejora continua de competencias digitales del personal, atendiendo debilidades como la escasa capacitación en herramientas tecnológicas (D3) y amenazas como la resistencia al cambio (A3). Proceso vinculado: Plan de capacitación.",
            "b. Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO7.1 Evaluación de Competencias",
                parrafo: "Realizar diagnósticos periódicos para identificar brechas en habilidades tecnológicas del personal académico, administrativo y técnico."
            },
            {
                subtema: "PO7.2 Plan de Formación",
                parrafo: "Diseñar e implementar un plan de formación continua en herramientas y sistemas institucionales, priorizando las áreas con mayor necesidad."
            },
            {
                subtema: "PO7.4 Medición del Desempeño",
                parrafo: "Establecer mecanismos de seguimiento y evaluación del progreso de las competencias adquiridas por el personal, midiendo su aplicabilidad en el entorno institucional."
            }
        ],
        tablas: [
            {
                titulo: "Directrices Generales",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 4, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", ""],
                data: [
                    {
                        desde: "PO6",
                        entradas: "Plan de comunicación institucional",
                        salidas: "Identificación de necesidades formativas",
                        hacia: ["PO8", "PO10", "", ""]
                    },
                    {
                        desde: "PO1",
                        entradas: "Diagnóstico del entorno",
                        salidas: "Brechas de competencias tecnológicas",
                        hacia: ["PO4", "PO3", "", ""]
                    }
                ]
            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishell Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermúdez S.",
                    "Erwing A. Hernández G."
                ],
                data: [
                    { actividad: "Aplicar encuestas de diagnóstico de habilidades digitales.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diseñar plan anual de formación tecnológica.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Coordinar talleres y capacitaciones internas.", raci: ["C", "R", "A", "I"] },
                    { actividad: "Registrar asistencia y participación en capacitaciones.", raci: ["R", "A", "C", "I"] },
                    { actividad: "Aplicar evaluaciones post-capacitación.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Actualizar el plan según resultados de desempeño.", raci: ["A", "R", "C", "I"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ],
        meetasymetricas: [
            {
                titulo: "Metas y Métricas",
                subtema: "Aumentar el nivel de competencias digitales del personal, asegurando su adaptación a las herramientas tecnológicas institucionales.",
                metricas: [
                    "% de personal capacitado anualmente en competencias digitales.",
                    "% de mejora en evaluaciones post-capacitación.",
                    "Nº de talleres y sesiones de formación realizadas por trimestre."
                ]
            }
        ]
    },

    {
        titulo: "PO8",
        indicadores: [
            "a. Establecer prácticas de calidad en el desarrollo y adquisición de servicios de TI, considerando debilidades como la ausencia de documentación estándar (D4) y amenazas como el incumplimiento de requisitos técnicos (A5). Proceso vinculado: Desarrollo y adquisición de servicios.",
            "b. Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO8.1 Criterios de Calidad",
                parrafo: "Definir estándares de calidad para productos y servicios de TI, incluyendo especificaciones técnicas, usabilidad y documentación requerida."
            },
            {
                subtema: "PO8.2 Control de Cambios",
                parrafo: "Implementar un proceso formal de control de cambios para modificaciones en los servicios tecnológicos que garantice la trazabilidad y validación previa."
            },
            {
                subtema: "PO8.3 Validación de Resultados",
                parrafo: "Verificar el cumplimiento de los requisitos definidos mediante pruebas técnicas, evaluaciones de usuario y auditorías funcionales."
            }
        ],
        tablas: [
            {
                titulo: "Directrices Generales",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 4, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", ""],
                data: [
                    {
                        desde: "PO3",
                        entradas: "Directrices tecnológicas",
                        salidas: "Estándares de calidad de TI",
                        hacia: ["PO9", "PO10", "", ""]
                    },
                    {
                        desde: "PO5",
                        entradas: "Modelo de presupuesto aprobado",
                        salidas: "Especificaciones técnicas ajustadas",
                        hacia: ["PO9", "", "", ""]
                    }
                ]
            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishell Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermúdez S.",
                    "Erwing A. Hernández G."
                ],
                data: [
                    { actividad: "Definir estándares mínimos de calidad para software y servicios.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diseñar formato de evaluación técnica de soluciones.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Realizar pruebas técnicas previas a la adquisición de servicios.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Gestionar el control de cambios de TI.", raci: ["C", "R", "A", "I"] },
                    { actividad: "Documentar los resultados de validaciones y pruebas funcionales.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Emitir informes de cumplimiento de calidad por servicio implementado.", raci: ["A", "R", "C", "I"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ],
        meetasymetricas: [
            {
                titulo: "Metas y Métricas",
                subtema: "Garantizar la calidad técnica y funcional de los servicios de TI adquiridos y desarrollados.",
                metricas: [
                    "% de servicios validados conforme a estándares de calidad.",
                    "Índice de errores o fallas detectadas post-implementación.",
                    "Nº de cambios aprobados vs. rechazados en servicios tecnológicos."
                ]
            }
        ]
    },

    {
        titulo: "PO9",
        indicadores: [
            "a. Identificar y gestionar riesgos asociados a desactualización tecnológica (A2), resistencia al cambio (D4) y falta de planificación formal (D6), que puedan afectar el cumplimiento de las funciones del laboratorio. Procesos vinculados: Todos (aplica transversalmente)",
            "b. Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO9.1 Identificación de Eventos",
                parrafo: "Establecer un proceso formal para la identificación y registro de eventos que representen amenazas reales o potenciales a la operación tecnológica de los laboratorios del pabellón 16 del SIUDT, incluyendo aquellos que puedan tener un impacto negativo en los objetivos académicos, técnicos, legales o administrativos definidos en el PETI."
            },
            {
                subtema: "PO9.2 Evaluación, Respuesta y Seguimiento de Riesgos de TI",
                parrafo: "Implementar un proceso estructurado para la evaluación, respuesta y seguimiento de los riesgos tecnológicos que puedan afectar la operación de los laboratorios de cómputo del pabellón 16, con el fin de minimizar posibles impactos negativos sobre los objetivos estratégicos."
            }
        ],
        tablas: [
            {
                titulo: "Directrices Generales",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 4, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", ""],
                data: [
                    {
                        desde: "PO1",
                        entradas: "Plan estratégico de TI",
                        salidas: "Matriz de riesgos actualizada y planes de mitigación aplicables a cada proceso.",
                        hacia: ["PO2", "PO3", "PO4", "PO10"]
                    },
                    {
                        desde: "PO3",
                        entradas: "Directrices tecnológicas",
                        salidas: "",
                        hacia: ["PO1", "PO2", "PO4", "PO10"]
                    },
                    {
                        desde: "PO5",
                        entradas: "Reporte de beneficios e impacto académico",
                        salidas: "",
                        hacia: ["PO1", "PO2", "PO3", "PO6"]
                    },
                    {
                        desde: "PO6",
                        entradas: "Políticas de TI",
                        salidas: "",
                        hacia: ["PO1", "PO2", "PO5", "PO7"]
                    },
                    {
                        desde: "PO10",
                        entradas: "Portafolio de Proyectos",
                        salidas: "",
                        hacia: ["PO1", "PO2", "PO3", "PO9"]
                    }
                ]
            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishell Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermúdez S.",
                    "Erwing A. Hernández G."
                ],
                data: [
                    { actividad: "Crear un catálogo de riesgos tecnológicos por laboratorio.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Definir tipos de riesgos (técnicos, legales, operativos).", raci: ["C", "R", "C", "I"] },
                    { actividad: "Establecer criterios para evaluar impacto y probabilidad.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Implementar matriz de riesgos TI.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diseñar planes de mitigación por riesgo identificado.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Elaborar bitácoras de eventos y acciones de respuesta.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Revisar periódicamente la matriz de riesgos.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Asociar riesgos a cada etapa de los proyectos tecnológicos.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Aplicar controles preventivos para evitar obsolescencia.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Integrar riesgos en las decisiones presupuestarias y de planificación.", raci: ["A", "R", "C", "I"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ],
        meetasymetricas: [
            {
                titulo: "Metas y Métricas",
                subtema: "Identificar, documentar y reducir los riesgos operativos y técnicos asociados al uso de sistemas automatizados en los laboratorios del pabellón 16.",
                metricas: [
                    "% de riesgos TI identificados y con plan de mitigación.",
                    "Nº de eventos críticos evitados tras la implementación de controles.",
                    "Tiempo promedio de respuesta ante incidentes clasificados como riesgo alto."
                ]
            }
        ]
    },

    {
        titulo: "PO10",
        indicadores: [
            "a. Gestionar proyectos tecnológicos enfocados en la renovación de equipos y mejora de infraestructura, anticipando amenazas como la falta de planificación a largo plazo (A6) y debilidades como D1, D2 y D3. Proceso vinculado: Mejora de infraestructura",
            "b. Objetivos de control."
        ],
        contenido: [
            {
                subtema: "PO10.1 Gestión de Proyectos tecnológicos",
                parrafo: "Definir una metodología que permita gestionar los proyectos de mejora tecnológica priorizando los que tengan mayor retorno académico."
            },
            {
                subtema: "PO10.2 Asignación de Recursos y Avances",
                parrafo: "Asignar responsables, cronogramas e indicadores para cada proyecto, garantizando un seguimiento efectivo de los avances."
            },
            {
                subtema: "PO10.3 Evaluación Post-Implementación y Cierre del Proyecto",
                parrafo: "Analizar los resultados de cada proyecto después de su implementación cerciorando de que el proyecto haya proporcionado los resultados y los beneficios esperados para la mejora de la gestión futura."
            }
        ],
        tablas: [
            {
                titulo: "Directrices Generales",
                tipo: "entradasSalidas",
                headers: {
                    col1: { text: "Desde", colSpan: 0, className: "header-entradas" },
                    col2: { text: "Entradas", colSpan: 1, className: "header-entradas" },
                    col3: { text: "Salidas", colSpan: 1, className: "header-salidas" },
                    col4: { text: "Hacia", colSpan: 4, className: "header-hacia" }
                },
                subHeaders: ["", "", "", "", ""],
                data: [
                    {
                        desde: "PO1",
                        entradas: "Plan Estratégico de TI",
                        salidas: "Metodología de Estrategia Definida por Proyecto",
                        hacia: ["PO2", "PO3", "PO4", "PO5"]
                    },
                    {
                        desde: "PO5",
                        entradas: "Registro de necesidades TI",
                        salidas: "Recursos Asignados por Prioridad",
                        hacia: ["PO2", "PO5", "PO6", "PO9"]
                    },
                    {
                        desde: "PO7",
                        entradas: "Plan de formación continua",
                        salidas: "Creación de Equipo por Proyecto",
                        hacia: ["PO7", "PO5"]
                    },
                    {
                        desde: "PO8",
                        entradas: "Sistema de Gestión de Calidad (QMS)",
                        salidas: "Rubrica de Calidad por Etapa de Proyecto",
                        hacia: ["PO2", "PO6"]
                    },
                    {
                        desde: "PO9",
                        entradas: "Marco de Gestión de Riesgo",
                        salidas: "Planes de contingencia y gestión de riesgos en la ejecución.",
                        hacia: ["PO1", "PO2", "PO3"]
                    }
                ]
            },
            {
                titulo: "Matriz RACI",
                tipo: "raci",
                headersPersonas: [
                    "Mishell Y. Izaguirre M.",
                    "Judith A. Balladares",
                    "Holman J. Bermúdez S.",
                    "Erwing A. Hernández G."
                ],
                data: [
                    { actividad: "Definir una metodología estándar de gestión de proyectos TI.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Diseñar cronograma de renovación tecnológica por fases.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Asignar responsables a cada proyecto aprobado.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Establecer entregables por cada etapa del proyecto.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Crear formatos para seguimiento y control de avance.", raci: ["C", "R", "C", "I"] },
                    { actividad: "Generar indicadores de rendimiento por proyecto.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Establecer un proceso de revisión post implementación.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Asegurar los procesos de disponibilidad de recursos técnicos y humanos.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Integrar gestión de riesgos al cronograma del proyecto.", raci: ["A", "R", "C", "I"] },
                    { actividad: "Elaborar informes ejecutivos para dirección institucional.", raci: ["A", "R", "C", "I"] }
                ],
                subtitulo: "Una Matriz RACI identifica quien es Responsable, quien debe rendir cuentas (A), quien debe ser Consultado y/o Informado"
            }
        ],
        meetasymetricas: [
            {
                titulo: "Metas y Métricas",
                subtema: "Gestionar de forma eficiente los proyectos tecnológicos implementados en los laboratorios, asegurando el cumplimiento de cronogramas, alcance y entregables.",
                metricas: [
                    "% de proyectos entregados dentro del tiempo planificado.",
                    "% de proyectos con alcance definido cumplido al 100 %.",
                    "% de satisfacción de usuarios sobre la implementación del proyecto."
                ]
            }
        ]
    }

]





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




export default { infoparrafos, planAccion }; // Exporta la constante