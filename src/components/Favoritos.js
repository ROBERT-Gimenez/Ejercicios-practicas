import { useSelector } from 'react-redux';
import { selectFavorite } from '../store/Reducer/FavoriteSlice';
import BtnFavorito from './Button/BtnFavorito';
export default function Favoritos({addFavs}) {
    const favs = useSelector(selectFavorite)
  return (
    <div>
        {favs.length <= 0 && <h2>No Seleccionaste Nada Aun ...</h2>}
        { favs.length > 0 && (
            <>
        <h2>Seccion de Favoritos</h2>
            <div className='row'>
            {
                favs.map((movie,indx) =>{
                    return (
                        <div  className='col-3' key={indx}>
                            <div movieid={movie.id} className='card my-4'>
                                <img src={movie.img} className='card-img-top' alt='...'/>
                                <BtnFavorito movieid={movie.id} id={movie.id}/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{movie.title}</h5>
                                    <p className='card-text'>{movie.overview}</p>

                                </div>

                            </div>
                        </div>
                    )
                })
            }
            </div>
            </>
            )}
        
    </div>
  )
}
