import {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom'; //en react v6 para el redireccionamiento se usa el navigate y useNavigate
import axios from 'axios';
import swal from '@sweetalert/with-react'


export default function Detalle() {
    const [movie , setMovie] = useState(null);

    let token = localStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieId = query.get('movieId');

    console.log(movieId);

    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=d6c22a610db913393d63611f4566f0a1&language=es-ES`;
        axios.get(endpoint)
        .then(response => {
            const apiData = response.data;
            setMovie(apiData)
            console.log(apiData)
        }).catch(err => {swal(<h3>hubo un error , vuelve a intenrlo mas tarde</h3>)})
    } , [movieId])
  return (
      <>
        {!token && <Navigate to="/" /> }
        {!movie && <p>cargando...</p>}
        {movie && (
            <>
            <h2>Titulo:  <em>{movie.title}</em></h2>
            <div className='row'>
            <div className='col-4'>
                <img alt='movie poster'  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" />
            </div>
            <div className='col-8'>
                <h5>Fecha de Estreno: <strong><em>{movie.release_date}</em></strong></h5>
                <h5>historia:</h5>
                    <p>{movie.overview}</p>
                <h5>Genero:</h5>
                <ul>
                    { movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>) }
                </ul>
            </div>
            </div>
        </>)}
    </>
  )
}
