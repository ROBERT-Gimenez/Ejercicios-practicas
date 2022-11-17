import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <nav className='navbar navbar-expand-lg bg-light p-3 navbar-dark bg-dark' >
            <ul className='list-unstyled container-fluid'>
                <li className='navbar-brand'><Link to="/">Home</Link></li>
                <li className='navbar-brand'><Link to="/listado">Listado</Link></li>
                <li className='navbar-brand'><Link to="/listado">Home</Link></li>
            </ul>
        </nav>
    </header>
  )
}
