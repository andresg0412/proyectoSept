import React, { useState, useEffect } from 'react';
import ButtonComponent from '../Button/ButtonComponent';
import { validateCardInfo, getCardType, formatCardNumber } from '../../utils/validations';
import { useDispatch } from 'react-redux';
import { selectPayInfo } from '../../redux/reducers/PayInfoReducer';
import { useSelector } from 'react-redux';
import { useSavePayInfo } from '../../hooks/useSavePayInfo';

const PayCardComponent = ({ nextStep }) => {
    const dispatch = useDispatch();
    const [cardInfo, setCardInfo] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });
    const [errors, setErrors] = useState({});
    const [cardType, setCardType] = useState('');
    const selectedPayInfo = useSelector((state) => state.payInfo.selectedPayInfo);
    const savePaymentDetails = useSavePayInfo(cardInfo);

    useEffect(() => {
        if (selectedPayInfo) {
            setCardInfo(selectedPayInfo);
        }
    }, [ selectedPayInfo ]);

    // FUNCIONES DE MANEJO DE CAMPOS
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const handleCardNumberChange = (e) => {
        const formattedNumber = formatCardNumber(e.target.value);
        setCardInfo({ ...cardInfo, cardNumber: formattedNumber });

        const detectedType = getCardType(e.target.value);
        setCardType(detectedType);
    };

    const handleExpiryDateChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remueve caracteres no numéricos

        if (value.length > 1) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}`; // Inserta el '/'
        }

        setCardInfo({ ...cardInfo, expiryDate: value });
    };

    const handleClick = () => {
        const errors = validateCardInfo(cardInfo);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            savePaymentDetails();
            nextStep();
        }
    }
    return (
        <>
            <div className="payCard">
                <h3>Información de pago</h3>
                <div className="groupInput">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={cardInfo.cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength="19"
                    />
                    <span>{cardType}</span>
                    {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
                </div>

                <div className="groupInput">
                    <label htmlFor="cardName">Name on Card</label>
                    <input
                        type="text"
                        name="cardName"
                        placeholder="Name on Card"
                        value={cardInfo.cardName}
                        onChange={handleChange}
                    />
                    {errors.cardName && <p className="error">{errors.cardName}</p>}
                </div>

                <div className="groupInput">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={cardInfo.expiryDate}
                        onChange={handleExpiryDateChange}
                    />
                    {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
                </div>

                <div className="groupInput">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={cardInfo.cvv}
                        onChange={handleChange}
                        maxLength="3"
                    />
                    {errors.cvv && <p className="error">{errors.cvv}</p>}
                </div>
                <ButtonComponent
                    text="Siguiente"
                    onClick={handleClick}
                />
            </div>
        </>
    );
};
export default PayCardComponent