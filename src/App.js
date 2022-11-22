import Login from './components/Login';
import {Routes , Route} from 'react-router-dom'
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import Resultado from './components/Resultado';
import Favoritos from './components/Favoritos';
import {useState , useEffect} from 'react'

function App() {

const [favoritos , setFavoritos] = useState([])
//Listamos las peliculas del localStorage
  useEffect(() => {
      const favsLocal = localStorage.getItem('favs');
      if(favsLocal !== null){
          const favsArray = JSON.parse(favsLocal);
          setFavoritos(favsArray);
        }
      } , [setFavoritos]) 
   
 //Verificamos is hay peliculas listadas 
  const addOrRemove = (e) => { 
  const favsLocal = localStorage.getItem('favs');  
  let backMovies;
  if(favsLocal == null){
    backMovies = [];
  }else{
    backMovies =JSON.parse(favsLocal);
  }
//Tomamos los datos de la pelicula seleccionada
  
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const movieId = parent.getAttribute('movieid')
    console.log(movieId)
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
  console.log(movieCheck)
//Si no esta , La agregamos
  if(!movieCheck){ 
    backMovies.push(movieData)
    console.log(`se a agergado ${movieData.title}`)
    localStorage.setItem('favs' , JSON.stringify(backMovies))
    setFavoritos(backMovies);
    btn.classList.add('like');
  }else {
//Si esta , entonces la sacamos de la lista    
    let newList = backMovies.filter(oneMovie => {
      return oneMovie.id !== movieData.id
    });
    localStorage.setItem('favs' , JSON.stringify(newList))
    console.log(`se elimino ${movieData.title}`)
    setFavoritos(newList);
    btn.classList.remove('like')
  } 
  }
  const endpoint ='https://api.themoviedb.org/3/discover/movie?api_key=d6c22a610db913393d63611f4566f0a1&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

  return (
    <div className="App">
      <Header favorites={favoritos}/>
      <div className='container mt-3' style={{height:"69%"}}>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/listado" element={<Listado addFavs={addOrRemove} url={endpoint}/>}></Route>
      <Route path="/detalle" element={<Detalle/>}></Route>
      <Route path="/favoritos" element={<Favoritos favs ={favoritos} addFavs={addOrRemove} />}></Route>
      <Route path="/Resultado" element={<Resultado addFavs={addOrRemove} />}></Route>
    </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
