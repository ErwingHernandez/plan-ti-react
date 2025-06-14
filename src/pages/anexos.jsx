import React, { use, useState } from 'react';
import '../styles/anexos.css';
import constanexos from '../pages/constanexos.js';

function Anexos() {

  const [seccionActiva, setSeccionActiva] = useState("rubricas");

  const laboratorioData = constanexos.inforubircas;
  const imagenesData = constanexos.imagenes;


  return (
    <div className="containeranexos">

      <section className="sectionbotonesanexos">

        <div className="botonanexos" onClick={() => setSeccionActiva("rubricas")}>
          Rubricas
        </div>
        <div className="botonanexos" onClick={() => setSeccionActiva("imagenes")}>
          Imagenes
        </div>
        <div className="botonanexos" onClick={() => setSeccionActiva("factibilidad")}>
          Estudio de factibilidad
        </div>

      </section>


      <section className="sectioncontenidoanexos">

        {/* SECCIÓN RUBRICAS */}
        {seccionActiva === "rubricas" && (

          <div className='contenedorrubricas'>
            {Object.entries(laboratorioData.laboratorios).map(([key, lab]) => (
              <div key={key} style={{ marginBottom: '2rem' }}>
                <h3 className='titulosrubricas'>{lab.nombre}</h3>
                <table className="tablarubricas">
                  <thead className='tablaencabezados'>
                    <tr>
                      {/*Encabezado */}
                      <th>Criterio</th>
                      <th>Insuficiente 1</th>
                      <th>Aceptable 2</th>
                      <th>Bueno 3</th>
                      <th>Excelente 4</th>
                      <th>Peso</th>
                    </tr>
                  </thead>


                  <tbody>
                    {laboratorioData.criterios.map((criterio, idx) => (
                      <tr key={idx}>
                        <td>{criterio}</td>
                        {lab.valores[idx].map((val, i) => (
                          <td key={i}>{val}</td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'right', fontWeight: 'bold' }}>TOTAL:</td>
                      <td>
                        {lab.valores.reduce((sum, fila) => sum + parseInt(fila[4]), 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}

        {/* SECCIÓN IMÁGENES */}
        {seccionActiva === "imagenes" && (
          <div className='contenedorimagenes'>

            <div className='galeriaimagenes'>
              {imagenesData.map((imagen, index) => (
                <img key={index} src={imagen} alt={`Laboratorio ${index + 1}`} className='imagenlaboratorio' />
              ))}
            </div>
          </div>
        )}

        {/* SECCIÓN ESTUDIO DE FACTIBILIDAD */}
        {seccionActiva === "factibilidad" && (
          <div className='contenedorestudiodefactibilidad'>
           
            <table className="tabla-estudio">
              <thead className='tablaencabezados'>
                <tr>
                  <th>Rubros</th>
                  <th>Costo Mes (Sin Riesgo)</th>
                  <th>Costo Mes (Con Riesgo)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className='titilosprincipales'  colSpan="3" ><strong >INVESTIGACIÓN PRELIMINAR</strong></td></tr>
                <tr><td>Investigación Preliminar</td><td>8,630.00</td><td>12,945.00</td></tr>

                <tr><td className='titilosprincipales' colSpan="3"><strong >RECURSOS HUMANOS</strong></td></tr>
                <tr><td>Salarios</td><td>406,000.00</td><td>609,000.00</td></tr>
                <tr><td>Cargos Sociales</td><td>527,800.00</td><td>791,700.00</td></tr>

                <tr><td className='titilosprincipales' colSpan="3"><strong >HARDWARE Y SOFTWARE</strong></td></tr>
                <tr><td>Hardware y Software</td><td>0.00</td><td>0.00</td></tr>
                <tr><td>Costo de Mantenimiento</td><td>192,000.00</td><td>288,000.00</td></tr>

                <tr><td className='titilosprincipales' colSpan="3"><strong >COSTOS FIJOS MENSUALES</strong></td></tr>
                <tr><td>Infraestructura</td><td>0.00</td><td>0.00</td></tr>
                <tr><td>Comunicación</td><td>9,775.00</td><td>14,662.50</td></tr>
                <tr><td>Suministros Varios</td><td>3,612.50</td><td>5,418.75</td></tr>
                <tr><td>Documentación</td><td>10,000.00</td><td>15,000.00</td></tr>

                <tr><td className='titilosprincipales' colSpan="3"><strong >UBICACIÓN GEOGRÁFICA</strong></td></tr>
                <tr><td>Costo por Distancia</td><td>9,600.00</td><td>14,400.00</td></tr>

                <tr><td></td><td></td><td></td></tr>

                <tr><td className='titilosprincipales'><strong >SUB TOTAL 1</strong></td><td ><strong >1,167,417.50</strong></td><td><strong >1,751,126.25</strong></td></tr>

                <tr><td>Costo con factores imprevistos</td><td>175,112.63</td><td>262,668.94</td></tr>
                <tr><td>Imprevistos</td><td>58,370.88</td><td>87,556.31</td></tr>

                <tr><td></td><td></td><td></td></tr>

                <tr><td className='titilosprincipales'><strong >SUB TOTAL 2</strong></td><td><strong >233,483.50</strong></td><td><strong >350,225.25</strong></td></tr>

                <tr><td></td><td></td><td></td></tr>

                <tr><td className='titilosprincipales' colSpan="3"><strong >FASES DE REALIZACIÓN DEL P.E.T.I</strong></td></tr>
                <tr><td>Inicio</td><td>0.00</td><td>0.00</td></tr>
                <tr><td>Planeación</td><td>0.00</td><td>0.00</td></tr>
                <tr><td>Ejecución</td><td>0.00</td><td>0.00</td></tr>
                <tr><td>Control</td><td>0.00</td><td>0.00</td></tr>
                <tr><td>Cierre</td><td>0.00</td><td>0.00</td></tr>

                <tr><td className='titilosprincipales' colSpan="3"><strong >OTROS COSTOS</strong></td></tr>
                <tr><td>Costo del proyecto en valor presente</td><td>0.00</td><td>0.00</td></tr>
                <tr><td>Gastos legales</td><td>0.00</td><td>0.00</td></tr>
                <tr><td>Garantía de cumplimiento</td><td>0.00</td><td>0.00</td></tr>
                <tr><td>Costos financieros</td><td>0.00</td><td>0.00</td></tr>

                <tr><td className='titilosprincipales'><strong >SUB TOTAL 3</strong></td><td><strong >0.00</strong></td><td><strong>0.00</strong></td></tr>

                <tr><td className='titilosprincipales'><strong >TOTAL DEL PROYECTO</strong></td><td><strong >1,400,901.00</strong></td><td><strong >2,101,351.50</strong></td></tr>
              </tbody>
            </table>
          </div>
        )}


      </section>
    </div>
  );
}

export default Anexos;