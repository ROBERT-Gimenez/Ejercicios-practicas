import {useEffect , useState} from 'react';
import BtnFavorito from './Button/BtnFavorito';



export default function Favoritos() {
    const [favoritos , setFavoritos] = useState([]);

    useEffect(() => {
        const favsLocal = localStorage.getItem('favs');

        if(favsLocal !== null){
            const favsArray = JSON.parse(favsLocal);
            setFavoritos(favsArray);
        }
    } , [])

  return (
    <div>
        {favoritos.length <= 0 && <h2>No Seleccionaste Nada Aun ...</h2>}
        { favoritos.length > 0 && (
            <>
        <h2>Seccion de Favoritos</h2>
            <div className='row'>
            {
                favoritos.map((movie,indx) =>{
                    return (
                        <div  className='col-3' key={indx}>
                            <div movieid={movie.id} className='card my-4'>
                                <img src={movie.img} className='card-img-top' alt='...'/>
                                <BtnFavorito movieid={movie.id} />
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
