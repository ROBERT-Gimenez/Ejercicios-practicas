/* import {useState} from 'react'
export default function useMovie() {
const [favoritos , setFavoritos] = useState([])
 //Verificamos is hay peliculas listadas 
 const favorito = localStorage.getItem('favs');
 let backMovies;
 if(favorito == null){
   backMovies = [];
 }else{
   backMovies =(favorito);
 }
//Tomamos los datos de la pelicula seleccionada
// eslint-disable-next-line
 const addOrRemove = (e) => {
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
   backMovies.push(movieData);
   localStorage.setItem('favs' , JSON.stringify(backMovies));
   console.log(`se a agergado ${movieData.title}`)
   setFavoritos(backMovies)
   btn.classList.add('like');
 }else {
//Si esta , entonces la sacamos de la lista    
   let newList = backMovies.filter(oneMovie => {
     return oneMovie.id !== movieData.id
   });
   localStorage.setItem('favs' , JSON.stringify(newList))
   console.log(`se elimino ${movieData.title}`)
   setFavoritos(newList)
   btn.classList.remove('like')
 }
}
const lista = favoritos
return {lista}
}

 */




 /* import {useState , useEffect} from 'react'
export default function useMovie() {

    
const [favoritos , setFavoritos] = useState([])

  useEffect(() => {
      const favsLocal = localStorage.getItem('favs');

      if(favsLocal !== null){
          const favsArray = JSON.parse(favsLocal);
          setFavoritos(favsArray);
      }
  } , [])
  return favoritos
} */
/* 
    const favsMovies = localStorage.getItem('favs');
    
    let backMovies;
    
    if(favsMovies == null){
        backMovies = [];
    }else{
        backMovies = JSON.parse(favsMovies);
    }
    
    const addFavs = (e) => {
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
        let movieCheck = backMovies.find(oneMovie => {
            return oneMovie.id === movieData.id
        });
        console.log(movieCheck)
        if(!movieCheck){ 
            backMovies.push(movieData);
            localStorage.setItem('favs' , JSON.stringify(backMovies));
            console.log('agergado')
            setFavoritos(backMovies);
            btn.classList.add('like');
        }else {
            let newList = backMovies.filter(oneMovie => {
                return oneMovie.id !== movieData.id
            });
            localStorage.setItem('favs' , JSON.stringify(newList))
            console.log(`se elimino ${movieData.title}`)
            setFavoritos(newList);
            btn.classList.remove('like')
        }
        
    }
}
}

    
 */
   
