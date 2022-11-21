import React from 'react';
import {Link} from 'react-router-dom';
import Buscador from './Buscador';

export default function Header() {
  return (
    <header>
        <nav className='navbar navbar-expand-lg bg-light p-3 navbar-dark bg-dark d-flex align-items-center' >
            <ul className='list-unstyled d-flex col-9'>
                <li className='navbar-brand'><Link to="/">Home</Link></li>
                <li className='navbar-brand'><Link to="/listado">Listado</Link></li>
                <li className='navbar-brand'><Link to="/favoritos">Favoritos</Link></li>
            </ul>
        <Buscador/>
        </nav>
    </header>
  )
}
