import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectFavorite,
        setMovieList} from '../store/Reducer/FavoriteSlice'
import store from '../store/store';
export default function Footer() {
   
  const favsLocal = localStorage.getItem('favs');
  const favsArray = JSON.parse(favsLocal);
  const lista = useSelector(selectFavorite);
  const dispatch = useDispatch();
  console.log(lista)
  return (
    <footer className='footer'>
        <nav className='d-flex align-items-center' >
            <ul className='list-unstyled'>
                <li><a className='navbar-brand' href='http://instagram.com' rel="noopener noreferrer">IG</a></li>
            </ul>
        </nav>
        <p className='navbar-brand'>Copyright footer example</p>
    </footer>
  )
}
