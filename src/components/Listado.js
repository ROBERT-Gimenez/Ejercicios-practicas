import {useEffect, useState} from 'react';
import { useNavigate , Link , Navigate } from 'react-router-dom'; //en react v6 para el redireccionamiento se usa el navigate y useNavigate
import axios from 'axios';

function Listado() {
    const token = localStorage.getItem('token');
    const history = useNavigate();
    const [moviesList , setMovies] = useState([]);
    
  /*Una manera de redireccionar 
    useEffect(() => {
        if(token == null){
        history("/");
        }
    } , []) */


    useEffect(() => {
        const endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=d6c22a610db913393d63611f4566f0a1&language=en-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
        axios.get(endpoint)
        .then(response => {
            const apiData = response.data;
            setMovies(apiData.results)
            console.log(moviesList)
        })
    } , [])

  return (
    <>
    {!token && <Navigate to="/" /> }
    <div className='row'>
    {moviesList.map((movie,inx) => {
        return (
            <div key={inx} className='col-3' style={{border:'1px solid red'}}>
            <div className="card" style={{width: "18rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview.substring(0 , 100)}</p>
                <Link to="/" className="btn btn-primary">View Detail</Link>
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