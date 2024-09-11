import { useDispatch } from 'react-redux';
import { selectPayInfo } from '../redux/reducers/PayInfoReducer';
import { decryptData } from '../utils/crypto';

export const useRetrievePaymentData = () => {
    const dispatch = useDispatch();

    const retrievePaymentData = () => {
        const encryptedData = sessionStorage.getItem('payInfo');
        if (encryptedData) {
            const decryptedData = decryptData(encryptedData);
            dispatch(selectPayInfo(decryptedData));
        }
    };

    return retrievePaymentData;
};
