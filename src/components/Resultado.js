import React from 'react'
import Listado from './Listado';
import { Navigate } from 'react-router-dom'; //en react v6 para el redireccionamiento se usa el navigate y useNavigate


export default function Resultado({addFavs}){
    const token = localStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');
    const ruta = (`https://api.themoviedb.org/3/search/movie?api_key=d6c22a610db913393d63611f4566f0a1&language=es-ES&query=${keyword}`);
    
    return (
    <>
        {!token && <Navigate to="/" /> }
         Resultado de Busqueda de: {keyword}
         <Listado addFavs={addFavs} url={ruta}/>
     </>
  )
}

