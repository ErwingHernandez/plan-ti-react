import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Keyboard } from 'swiper/modules';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import '../styles/objetivosti.css';



function ObjetivosTi() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/'); // Redirige a la ruta raíz (página principal)
    };
    const objetivos = [
        {
            numero: 1,
            titulo: 'Definir políticas institucionales sobre el uso, mantenimiento y seguridad de la infraestructura tecnológica.',
            factores: 'Participación del personal técnico, Compromiso institucional en la formulación y aplicación de políticas.',
            estrategias: [
                'Capacitar al 100% del personal técnico y académico que utiliza los laboratorios en las políticas institucionales.',
                'Implementar un mecanismo digital para el seguimiento y evaluación del cumplimiento de las políticas.',
                'Actualizar las políticas de manera anual en función de cambios tecnológicos, normativos o institucionales.',
            ],


        },
        {
            numero: 2,
            titulo: 'Implementar un sistema automatizado de reservas para los laboratorios del pabellón 16 del SIUDT, que permita gestionar de forma eficiente la asignación de espacios y recursos tecnológicos.',
            factores: 'Disponibilidad de una plataforma tecnológica accesible y funcional, Capacitación de los usuarios y personal técnico, Supervisión y actualización constante del sistema.',
            estrategias: [
                'Desarrollar una plataforma web para la gestión de reservas antes de finalizar el segundo trimestre de 2025.',
                'Reducir en un 90% los conflictos de uso de laboratorios mediante la digitalización y transparencia del proceso de asignación.'
            ]
        },
        {
            numero: 3,
            titulo: 'Implementar un sistema automatizado para el control y monitoreo de los programas instalados en los laboratorios del pabellón 16 del SIUDT, que permita garantizar la integridad, legalidad y actualización del software.',
            factores: '•	Inventario de software inicial completo y actualizado del software por laboratorio., Plataforma de gestión centralizada con capacidad de monitoreo remoto, Formación técnica del personal encargado del mantenimiento y soporte.',
            estrategias: [
                'Realizar un inventario digital detallado de los programas instalados en cada laboratorio.',
                'Garantizar que el 100% del software instalado esté debidamente licenciado y documentado.',
                'Reducir en un 80% los incidentes relacionados con incompatibilidades o software desactualizado en los laboratorios mediante actualizaciones centralizadas y automatizadas',
                'Generar reportes que permitan a la administración tomar decisiones sobre renovación, actualización o eliminación de software.'
            ]
        },
        {
            numero: 4,
            titulo: 'Implementar un sistema automatizado de control de inventario por laboratorio en el pabellón 16 del SIUDT, que permita registrar, monitorear y actualizar en tiempo real los activos tecnológicos para una gestión más precisa y eficiente.',
            factores: 'Registro inicial completo y verificado del inventario físico, Plataforma tecnológica que permita seguimiento por laboratorio, tipo de equipo y estado, Capacitación del personal técnico y administrativo en el uso del sistema, Mantenimiento periódico del sistema y respaldo de la información.',
            estrategias: [
                'Levantamiento inicial del inventario tecnológico por laboratorio antes de finalizar el primer trimestre de 2025.',
                'Asegurar que el 100% de los activos tecnológicos estén registrados y clasificados por tipo, estado, ubicación y responsable.',
                'Reducir en un 90% los errores o pérdidas de información en el control de activos mediante actualizaciones automáticas.',
                'Generar reportes del estado del inventario, incluyendo el estado y características de los equipos.'
            ]
        },
        {
            numero: 5,
            titulo: 'Diseñar e implementar un Dashboard automatizado para los laboratorios del pabellón 16 del SIUDT, que permita visualizar en tiempo real indicadores clave sobre el estado de equipos, uso de recursos, incidencias y disponibilidad de espacios.',
            factores: 'Integración de fuentes de datos confiables (inventario reservas incidencias monitoreo)., Diseño de una interfaz intuitiva y accesible para usuarios técnicos y administrativos., Accesibilidad multiplataforma (PC móvil red interna).'
            ,
            estrategias: [
                'Diseñar la estructura del Dashboard con base en los indicadores críticos definidos (uso, disponibilidad, incidencias, software, mantenimiento).',
                'Integrar datos de al menos tres sistemas automatizados existentes (reservas, incidencias, inventario) para visualización unificada.',
                'Capacitar al personal técnico y administrativo en el uso e interpretación del Dashboard.',
                'Reducir en un 70% la dependencia de reportes manuales mediante el uso del Dashboard como herramienta principal de consulta para la toma de decisiones.'
            ]
        },
        {
            numero: 6,
            titulo: 'Implementar un sistema de monitoreo automatizado con Nagios para supervisar en tiempo real el estado, disponibilidad y rendimiento de los equipos de los laboratorios del pabellón 16 del SIUDT, con el fin de detectar fallos, prevenir interrupciones y optimizar la gestión técnica.',
            factores: 'Configuración adecuada de Nagios con los parámetros críticos de hardware y red., Capacitación del personal técnico encargado en la administración y operación de Nagios., Estabilidad de la red y conectividad permanente de los dispositivos monitoreado.',
            estrategias: [
                'Instalar y configurar Nagios en un servidor central con monitoreo activo para todos los laboratorios.',
                'Reducir en un 80% el tiempo promedio de detección y respuesta ante fallos mediante el monitoreo activo en el período de uso de los laboratorios.'
            ]
        },
        {
            numero: 7,
            titulo: 'Diseñar e implementar un sistema de gestión de incidencias técnicas en los laboratorios del pabellón 16 del SIUDT, que permita el reporte, seguimiento y resolución de problemas técnicos de forma ágil y centralizada.',
            factores: 'Plataforma accesible para usuarios (estudiantes docentes técnicos)., Flujo de atención definido (registro diagnóstico resolución y cierre)., Personal técnico capacitado para el análisis y resolución de incidencias.',
            estrategias: [
                'Desarrollar una interfaz web para la recepción de incidencias por laboratorio antes de finalizar el segundo trimestre de 2025.',
                'Generar reportes mensuales de incidencias clasificadas por tipo, gravedad y tiempo de solución.',
                'Reducir en un 75% el tiempo promedio de resolución de incidencias comunes al segundo semestre de 2025.'
            ]
        },
        {
            numero: 8,
            titulo: 'Implementar un sistema de bitácora digital para los laboratorios del pabellón 16 del SIUDT, destinado exclusivamente a los responsables y al Jefe del SIUDT, que permita registrar diariamente actividades realizadas, observaciones relevantes y estado general de los recursos.',
            factores: 'Uso sistemático por parte del personal responsable., Posibilidad de generar reportes históricos y por laboratorio.',
            estrategias: [
                'Establecer campos predeterminados en la bitácora para registrar actividades diarias, observaciones técnicas y recomendaciones.',
                'Asegurar que el 100% de los responsables utilicen la bitácora como parte de su rutina operativa diaria a partir del cuarto trimestre de 2025.'
            ]
        },
        {
            numero: 9,
            titulo: 'Implementar la herramienta Beyond para automatizar el control, monitoreo y soporte remoto de los equipos de los laboratorios del pabellón 16 del SIUDT, con el fin de mejorar la eficiencia operativa, reducir tiempos de respuesta y garantizar la seguridad en la gestión técnica.',
            factores: 'Licenciamiento adecuado y compatibilidad de Beyond con la infraestructura existente., Conectividad estable para acceso remoto y monitoreo en tiempo real., Capacitación del personal técnico en el uso y administración de la herramienta., Definición de protocolos de acceso seguro y auditoría de acciones remotas.',
            estrategias: [
                'Instalar y configurar Beyond en todos los equipos de los laboratorios del pabellón 16 durante el primer trimestre de implementación.',
                'Reducir en un 70% el tiempo promedio de atención de incidencias técnicas, mediante soporte remoto directo y control centralizado.',
                'Capacitar al 100% del personal técnico en la administración y uso eficiente de Beyond antes del inicio del segundo semestre de 2025.'
            ]
        },
        {
            numero: 10,
            titulo: 'Diseñar un sistema automatizado para la planificación y notificación del mantenimiento preventivo de equipos tecnológicos en los laboratorios del pabellón 16 del SIUDT.',
            factores: 'Capacitación adecuada del personal técnico encargado del mantenimiento., Compromiso del equipo técnico para cumplir con los calendarios de mantenimiento.',
            estrategias: [
                'Implementar un calendario digital con alertas automáticas para cada tipo de mantenimiento.',
                'Capacitar al personal técnico en el uso del módulo y en buenas prácticas de mantenimiento.'
            ]
        },

    ]

    return (

        <>
            <div className="carousel-container">
                <Swiper
                    modules={[EffectCoverflow, Keyboard]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    spaceBetween={5}
                    loop={true}
                    keyboard={{ enabled: true }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    className="swiper-container"
                >
                    {objetivos.map((objetivo, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className='card-ti'>
                                <h3>Objetivo {objetivo.numero}</h3>
                                <p className="titulo">{objetivo.titulo}</p>

                                <div className="factores">
                                    <strong>Factores Críticos de Éxito:</strong>
                                </div>
                                <div className="factores">

                                    <ul>
                                        {objetivo.factores.split(',').map((factor, idx) => (
                                            <li key={idx}>{factor.trim()}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="estrategias">
                                    <strong>Estrategias:</strong>
                                </div>
                                <div className="estrategias">

                                    <ul>
                                        {objetivo.estrategias.map((e, j) => (
                                            <li key={j}>{e}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>

    );
}

export default ObjetivosTi;