import { useDispatch } from 'react-redux';
import { selectProduct } from '../redux/reducers/ProductReducer';

export const useRetrieveProductSelected = () => {
    const dispatch = useDispatch();

    const retrieveProduct = () => {
        const storedProduct = sessionStorage.getItem('product');
        if (storedProduct) {
            dispatch(selectProduct(JSON.parse(storedProduct)));
        }
    };

    return retrieveProduct;
};
