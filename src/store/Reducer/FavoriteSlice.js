import { createSlice } from "@reduxjs/toolkit";

//Listamos las peliculas del localStorage

const favsLocal = localStorage.getItem('favs');
const favsArray = JSON.parse(favsLocal);


export const FavoriteSlice = createSlice({
    name:'favorites',
    initialState:{
        value:[favsArray],
    },
    reducers:{
        setMovieList:(state , action) => {
            state.value += action.payload
        }
    },
})
export const {setMovieList } = FavoriteSlice.actions

export const selectFavorite = (state) => state.favorites.value;
export default FavoriteSlice.reducer