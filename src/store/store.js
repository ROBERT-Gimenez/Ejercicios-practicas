import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './Reducer/counterSlice';
import FavoriteSlice from './Reducer/FavoriteSlice';

export default configureStore({
    reducer:{
        counter:counterSlice,
        favorites:FavoriteSlice

    },
})