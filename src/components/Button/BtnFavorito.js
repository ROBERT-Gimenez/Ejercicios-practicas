import { AiTwotoneHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setMovieList } from '../../store/Reducer/FavoriteSlice';

export default function BtnFavorito(prop) {
const favsMovies = localStorage.getItem('favs');
const dispatch = useDispatch();


 //Verificamos is hay peliculas listadas 
let backMovies;
if(favsMovies == null){
  backMovies = [];
}else{
  backMovies = JSON.parse(favsMovies);
}


const moviesSelected = (id) => {
  let movieCheck = backMovies.find(movie => {
  // eslint-disable-next-line
  return movie.id == id;})
  if(movieCheck){
    return "like"
  }else{
    return"heart"
  }
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




return (
  <button movieid={prop.id} className="btn-favs"  onClick={addFavs}><AiTwotoneHeart className={moviesSelected(prop.id)}/></button>
  )
} 
