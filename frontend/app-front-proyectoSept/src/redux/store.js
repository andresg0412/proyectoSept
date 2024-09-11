import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/ProductReducer';
import payInfoReducer from './reducers/PayInfoReducer';
import deliveryInfoReducer from './reducers/DeliveryInfoReducer';

const store = configureStore({
    reducer: {
        product: productReducer,
        payInfo: payInfoReducer,
        deliveryInfo: deliveryInfoReducer,
    },
});

export default store;
