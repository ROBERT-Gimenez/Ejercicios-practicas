import {useEffect, useState} from 'react';
import {Link , Navigate } from 'react-router-dom'; //en react v6 para el redireccionamiento se usa el navigate y useNavigate
import axios from 'axios';
import swal from '@sweetalert/with-react'


function Listado(prop) {
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
        axios.get(prop.url)
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