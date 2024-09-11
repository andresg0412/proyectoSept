import React from 'react';
import './ModalAlertComponent.css';
import ButtonComponent from '../Button/ButtonComponent';

const ModalAlertComponent = ({ onClose }) => {
    const handleClick = () => {
        onClose();
    };

    return (
        <div className="modalAlert-overlay">
            <div className="modalAlert-content">
                <h2>Alert</h2>
                <ButtonComponent text="Aceptar" onClick={handleClick} />
            </div>
        </div>
    );
};

export default ModalAlertComponent