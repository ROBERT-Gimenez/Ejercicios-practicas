import { AiTwotoneHeart } from 'react-icons/ai';


export default function Favoritos({favs,addFavs}) {
 

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
                                <button movieid={movie.id} className='btn-favs' onClick={addFavs}><AiTwotoneHeart className='heart'/></button>
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
