const imagenes = [
    '/labA.jpeg',
    '/labA2.jpeg',
    '/labB.jpeg',
    '/labB2.jpeg',
    '/labC.jpeg',
    '/labC2.jpeg',
    '/Gráfico Análisis Foda Centro Gaming Minimalista Azul y Celeste.png'
]

const inforubircas = {
    criterios: [
        "Equipamiento",
        "Desempeño del Hardware",
        "Disponibilidad de Equipos",
        "Conectividad a Internet"
    ],
    laboratorios: {
        labA: {
            nombre: "Laboratorio A",
            valores: [
                ["Computadoras con hardware muy limitado", "Hardware aceptable", "Buen hardware", "Alto rendimiento", 4],
                ["Lentos, dificultad software", "Desempeño moderado", "Funcionales, pocas dificultades", "Óptimo, sin problemas", 4],
                ["< 50% funcionando", "50%-70% disponibles", "71%-90% funcionando", ">90% operativos", 4],
                ["Inestable/inexistente", "Lenta con interrupciones", "Aceptable, fallos ocasionales", "Estable y rápida", 4]
            ]
        },
        labB: {
            nombre: "Laboratorio B",
            valores: [
                ["Computadoras con hardware muy limitado", "Hardware aceptable", "Buen hardware", "Alto rendimiento", 3],
                ["Lentos, dificultad software", "Desempeño moderado", "Funcionales, pocas dificultades", "Óptimo, sin problemas", 2],
                ["< 50% funcionando", "50%-70% disponibles", "71%-90% funcionando", ">90% operativos", 3],
                ["Inestable/inexistente", "Lenta con interrupciones", "Aceptable, fallos ocasionales", "Estable y rápida", 3]
            ]
        },

        labC: {
            nombre: "Laboratorio C",
            valores: [
                ["Computadoras con hardware muy limitado", "Hardware aceptable", "Buen hardware", "Alto rendimiento", 3],
                ["Lentos, dificultad software", "Desempeño moderado", "Funcionales, pocas dificultades", "Óptimo, sin problemas", 2],
                ["< 50% funcionando", "50%-70% disponibles", "71%-90% funcionando", ">90% operativos", 4],
                ["Inestable/inexistente", "Lenta con interrupciones", "Aceptable, fallos ocasionales", "Estable y rápida", 3]
            ]
        },

        labD: {
            nombre: "Laboratorio D",
            valores: [
                ["Computadoras con hardware muy limitado", "Hardware aceptable", "Buen hardware", "Alto rendimiento", 2],
                ["Lentos, dificultad software", "Desempeño moderado", "Funcionales, pocas dificultades", "Óptimo, sin problemas", 1],
                ["< 50% funcionando", "50%-70% disponibles", "71%-90% funcionando", ">90% operativos", 3],
                ["Inestable/inexistente", "Lenta con interrupciones", "Aceptable, fallos ocasionales", "Estable y rápida", 3]
            ]
        },
      
    }
}

const infofactibilidad = {

}

export default {inforubircas, imagenes, infofactibilidad};