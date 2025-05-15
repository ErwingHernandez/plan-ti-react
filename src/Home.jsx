import { Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function Home() {
  

    return (
        <>

            <div id='documento'>
                <Link to="/part1" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='card' id='Card1'>Introduccion</div>
                </Link>

                <Link to="/part2" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='card' id='Card2'>Marco Teórico</div>
                </Link>

                <Link to="/part3" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='card' id='Card3'>Desarrollo</div>
                </Link>

                <Link to="/part4" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className='card' id='Card4'>1 part</div>
                </Link>

            </div>

            <Link to="/planaccion" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div id='accion'>
                    <div id='card5'>
                        Plan de Acción
                    </div>
                </div>
            </Link>


            <Link to="/inventario" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div id='inventario'>
                    Inventario
                </div>
            </Link>

        </>
    )
}

export default Home
