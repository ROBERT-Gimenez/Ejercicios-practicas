import React from 'react'
import Listado from './Listado';

export default function Resultado(){

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');
    const ruta = (`https://api.themoviedb.org/3/search/movie?api_key=d6c22a610db913393d63611f4566f0a1&language=es-ES&query=${keyword}`);
    
    return (
    <>
        Resultado de Busqueda de: {keyword}
         <Listado url={ruta}/>
     </>
  )
}

