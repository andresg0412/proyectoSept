import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import productReducer from './reducers/ProductReducer';
import payInfoReducer from './reducers/PayInfoReducer';
import deliveryInfoReducer from './reducers/DeliveryInfoReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = configureStore({
    reducer: {
        product: productReducer,
        payInfo: payInfoReducer,
        deliveryInfo: deliveryInfoReducer,
    },
    composeWithDevTools: composeWithDevTools(applyMiddleware()),

});

export default store;
