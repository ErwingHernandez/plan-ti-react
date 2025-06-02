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
                        hacia: ["PO2..PO6", "PO9", "AI1", "DS1",""]
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
        indicadores: ["% de cumplimiento de objetivos", "Tiempo de implementación de proyectos"],
        contenido: [
            { subtema: "PO2.1 Gestión de Relaciones", parrafo: "Descripción de gestión de relaciones." },
        ],
        tablas: [] // Tablas específicas para PO2
    }
];

export default infoparrafos; // Exporta la constante