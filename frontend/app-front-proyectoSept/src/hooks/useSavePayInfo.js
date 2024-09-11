import { selectPayInfo } from '../redux/reducers/PayInfoReducer';
import { encryptData } from '../utils/crypto';
import { useDispatch } from 'react-redux';

export const useSavePayInfo = (cardInfo) => {
    const dispatch = useDispatch();

    const saveDetails = () => {
        const encryptedData = encryptData(cardInfo);
        sessionStorage.setItem('payInfo', encryptedData);
        dispatch(selectPayInfo(cardInfo));
    };
    return saveDetails;
};
