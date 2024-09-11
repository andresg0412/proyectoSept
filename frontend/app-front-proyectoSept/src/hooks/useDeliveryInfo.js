import { useDispatch } from 'react-redux';
import { selectDeliveryInfo } from '../redux/reducers/DeliveryInfoReducer';

export const useDeliveryInfo = () => {
    const dispatch = useDispatch();

    const retrieveDeliveryInfo = () => {
        const storeCardDelivery = sessionStorage.getItem('cardDelivery');
        if (storeCardDelivery) {
            dispatch(selectDeliveryInfo(JSON.parse(storeCardDelivery)));
        }
    };

    return retrieveDeliveryInfo;
};
