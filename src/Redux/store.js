import { configureStore } from '@reduxjs/toolkit';
import mnReducer from './mnslice';

export default configureStore({
    reducer: {
        playlist: mnReducer,
    },
});
