import React from 'react';
import {Link} from 'react-router-dom';
import Buscador from './Buscador';
import { AiTwotoneHeart } from 'react-icons/ai';

export default function Header({favorites}) {
  return (
    <header>
        <nav className='navbar navbar-expand-lg bg-light p-3 navbar-dark bg-dark d-flex align-items-center' >
            <ul className='list-unstyled d-flex col-9'>
                <li className='navbar-brand'><Link to="/">Home</Link></li>
                <li className='navbar-brand'><Link to="/listado">Listado</Link></li>
                <li className='navbar-brand'><Link to="/favoritos">Favoritos<AiTwotoneHeart className='like'/></Link><span className='count-heart'>{ favorites.length >  0 ? favorites.length : "" }</span></li>
                
            </ul>
        
        <Buscador/>
        </nav>
    </header>
  )
}
