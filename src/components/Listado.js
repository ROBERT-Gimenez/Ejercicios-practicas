import {useEffect, useState} from 'react';
import {Link , Navigate } from 'react-router-dom'; //en react v6 para el redireccionamiento se usa el navigate y useNavigate
import axios from 'axios';
import swal from '@sweetalert/with-react'


function Listado() {
    const [moviesList , setMovies] = useState([]);
    
    const token = localStorage.getItem('token');
    
    //Una manera de redireccionar 
    /* const history = useNavigate(); 
    useEffect(() => {
        if(token == null){
        history("/");
        }
    } , [])  */


    useEffect(() => {
        const endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=d6c22a610db913393d63611f4566f0a1&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
        axios.get(endpoint)
        .then(response => {
            const apiData = response.data;
            setMovies(apiData.results)
        }).catch(err => {swal(<h3>hubo un error , vuelve a intenrlo mas tarde</h3>)})
    } , [moviesList])

  return (
    <>
    {!token && <Navigate to="/" /> }
    <div className='row'>
    {moviesList.map((movie,inx) => {
        return (
            <div key={inx} className='p-1 mx-auto ' style={{width:"18rem"}}>
            <div className="card" style={{width: "18rem" ,height: "100%"}}>
                <img alt='movie poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{movie.title.substring(0 , 16)}..</h5>
                    <p className="card-text">{movie.overview.substring(0 , 90)}..</p>
                <Link to={`/detalle?movieId=${movie.id}`} className="btn btn-primary">View Detail</Link>
                </div>
            </div>
            </div>

                )
    })}
    </div>
    </>
  )
}

export default Listado