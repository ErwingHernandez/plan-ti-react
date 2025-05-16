import { useState } from "react";
import { Link } from 'react-router-dom'
import '../styles/document.css';
import '../styles/etiquetas.css';

function Part4() {

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

                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <li><a>Pagina Principal</a></li>
                            </Link>
                        </ul>
                    </nav>
                </div>
               
            </div>
        </>

    );
}

export default Part4;