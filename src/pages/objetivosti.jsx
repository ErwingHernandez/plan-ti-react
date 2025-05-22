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
            titulo: 'Garantizar la disponibilidad de recursos tecnológicos y humanos para la operación continua de los laboratorios del pabellón 16 del SIUDT UNAN-Managua.',
            factores: 'Disponibilidad de presupuesto, planificación de recursos, respaldo institucional y acceso a talento técnico.',
            estrategias: [
                'Realizar un análisis de recursos existentes y necesidades futuras.',
                'Diseñar un plan de disponibilidad de equipos y personal técnico.',
                'Implementar mecanismos de monitoreo de recursos críticos para garantizar su acceso oportuno.',
                'Establecer protocolos de contingencia ante faltantes de recursos.'
            ]


        },
        {
            numero: 2,
            titulo: '',
            factores: '',
            estrategias: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            numero: 3,
            titulo: '',
            factores: '',
            estrategias: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            numero: 4,
            titulo: '',
            factores: '',
            estrategias: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            numero: 5,
            titulo: '',
            factores: '',
            estrategias: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            numero: 6,
            titulo: '',
            factores: '',
            estrategias: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            numero: 7,
            titulo: '',
            factores: '',
            estrategias: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            numero: 8,
            titulo: '',
            factores: '',
            estrategias: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            numero: 9,
            titulo: '',
            factores: '',
            estrategias: [
                '',
                '',
                '',
                ''
            ]
        },
        {
            numero: 10,
            titulo: '',
            factores: '',
            estrategias: [
                '',
                '',
                '',
                ''
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
                                    <p>{objetivo.factores}</p>
                                </div>
                                <div className="estrategias">
                                    <strong>Estrategias:</strong>
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

            <div className="home-button-container">
                <button className="home-button" onClick={goToHomePage}>
                    Ir a la Página Principal
                </button>
            </div>
        </>

    );
}

export default ObjetivosTi;