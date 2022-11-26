import { AiTwotoneHeart } from 'react-icons/ai';
import { useSelector , useDispatch } from 'react-redux';
import { setMovieList , selectFavorite} from '../../store/Reducer/FavoriteSlice';


export default function BtnFavorito(prop) {
const favsMovies = localStorage.getItem('favs');
const movieStore = useSelector(selectFavorite);
const dispatch = useDispatch();
 //Verificamos is hay peliculas listadas 
let backMovies;
if(favsMovies == null){
  backMovies = [];
}else{
  backMovies = JSON.parse(favsMovies);
}
 
const addFavs = (e) => {
//Tomamos los datos de la pelicula seleccionada
  const btn = e.currentTarget;
  const parent = btn.parentElement;
  const movieId = parent.getAttribute('movieid')
  const img = parent.querySelector('img').getAttribute('src');
  const title = parent.querySelector('h5').innerText;
  const overview = parent.querySelector('p').innerText;

  const movieData = {
    img , title  , overview ,
    id : movieId
  }
//Verificamos si la pelicula ya esta Listada  
  let movieCheck = backMovies.find(oneMovie => {
    return oneMovie.id === movieData.id
  });
//Si no esta , La agregamos
  if(!movieCheck){ 
    backMovies.push(movieData);
    localStorage.setItem('favs' , JSON.stringify(backMovies));
    console.log('agergado')
    dispatch(setMovieList(backMovies))
    btn.classList.add('like');
  }else {
//Si esta , entonces la sacamos de la lista 
    let newList = backMovies.filter(oneMovie => {
      return oneMovie.id !== movieData.id
    });
    localStorage.setItem('favs' , JSON.stringify(newList))
    console.log(`se elimino ${movieData.title}`)
    dispatch(setMovieList(newList))
    btn.classList.remove('like')
  }
  
}
window.addEventListener("load", () => {
console.log("gokasasd")
  
})
const heart = (e) => {
  console.log(e.currentTarget)
  const btn = e.currentTarget;
  const parent = btn.parentElement;
  const movieId = parent.getAttribute('movieid');
  let movieCheck = movieStore.find(movie => {
    return movie.id === movieId;})
    if (movieCheck){
      console.log("agregado")
      btn.classList.add('like')
    }else{ btn.classList.remove('like')}
  
}


return (
  <button movieid={prop.id} onLoad={heart} className="btn-favs"  onClick={addFavs}><AiTwotoneHeart className='heart'/></button>
  )
} 
