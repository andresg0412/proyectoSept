import React from 'react';
import ButtonComponent from '../Button/ButtonComponent';
import './ModalPayComponent.css';

const ModalPayComponent = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <>
            <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
                <div className="modal-content">
                    <button className="modal-close" onClick={onClose}>×</button>
                    <p>MODAL PAY</p>
                </div>
            </div>
        </>
    );
};
export default ModalPayComponent;