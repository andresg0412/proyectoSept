import React from 'react';
import ButtonComponent from '../Button/ButtonComponent';
import { useSelector } from 'react-redux';

const PaySummaryComponent = ({ prevStep, onClose, openModalAlert }) => {
    const selectedDeliveryInfo = useSelector((state) => state.deliveryInfo.selectedDeliveryInfo);
    const selectedPayInfo = useSelector((state) => state.payInfo.selectedPayInfo);
    
    const handleClick = () => {
        onClose();
        openModalAlert();
    }
    return (
        <>
            <div>
                <h3>Summary</h3>
                <div>
                    <h3>Pay Info</h3>
                    <p>Card Number: {selectedPayInfo.cardNumber}</p>
                    <p>Card Name: {selectedPayInfo.cardName}</p>
                    <p>Expiry Date: {selectedPayInfo.expiryDate}</p>
                    <p>CVV: {selectedPayInfo.cvv}</p>
                </div>
                <div>
                    <h3>Delivery Info</h3>
                    <p>Name: {selectedDeliveryInfo.name}</p>
                    <p>Phone: {selectedDeliveryInfo.phone}</p>
                    <p>Address: {selectedDeliveryInfo.address}</p>
                    <p>City: {selectedDeliveryInfo.city}</p>
                </div>
                <div className="buttonsControllers">
                    <ButtonComponent
                        text="Confirmar"
                        onClick={handleClick}
                    />
                    <ButtonComponent
                        text="Atras"
                        onClick={prevStep}
                    />
                </div>
            </div>
        </>
    );
};
export default PaySummaryComponent