import React from 'react'

import { AiTwotoneHeart } from 'react-icons/ai';


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
  const movieId = btn.getAttribute('movieid')
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
  if(!movieCheck){ 
    backMovies.push(movieData);
    localStorage.setItem('favs' , JSON.stringify(backMovies));
    console.log('agergado')
    btn.classList.add('like');
  }else {
    let newList = backMovies.filter(oneMovie => {
      return oneMovie.id != movieData.id
    });
    localStorage.setItem('favs' , JSON.stringify(newList))
    console.log(`se elimino ${movieData.title}`)
    btn.classList.remove('like')
  }

}

export default function BtnFavorito(prop) {
  return (
    <button movieid={prop.id} className='btn-favs' onClick={addFavs}><AiTwotoneHeart className='heart'/></button>
  )
}
