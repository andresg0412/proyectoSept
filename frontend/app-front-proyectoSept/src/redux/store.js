import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/ProductReducer';

const store = configureStore({
    reducer: {
        product: productReducer,
    },
});

export default store;
