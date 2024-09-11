import React, { useEffect, useState } from 'react';
import ButtonComponent from '../Button/ButtonComponent';
import './ModalPayComponent.css';
import PayCardComponent from '../PaySteps/PayCardComponent';
import PaySummaryComponent from '../PaySteps/PaySummaryComponent';
import PayDeliveryComponent from '../PaySteps/PayDeliveryComponent';
import { useDispatch } from 'react-redux';
import { selectPayInfo } from '../../redux/reducers/PayInfoReducer';


const ModalPayComponent = ({ isOpen, onClose, openModalAlert }) => {
    const dispatch = useDispatch();
    const [currentStep, setCurrentStep] = useState(1);

    //NAVEGACIÓN ENTRE STEPS
    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
    };
    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    // RENDERIZAR STEP ACTUAL
    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <PayCardComponent nextStep={nextStep} />;
            case 2:
                return <PayDeliveryComponent nextStep={nextStep} prevStep={prevStep} />;
            case 3:
                return <PaySummaryComponent prevStep={prevStep} onClose={onClose} openModalAlert={openModalAlert} />;
            default:
                return null;
        }
    };
    useEffect(() => {
        const cardDelivery = sessionStorage.getItem('cardDelivery');
        const cardInfo = sessionStorage.getItem('cardInfo');

        if (cardDelivery && cardInfo) {
            dispatch(selectPayInfo(JSON.parse(cardInfo)));
            setCurrentStep(2);
        } else if (cardInfo) {
            setCurrentStep(1);
        }
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <>
            <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
                <div className="modal-content">
                    <h2>Step {currentStep}</h2>
                    {renderCurrentStep()}
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
            </div>
        </>
    );
};
export default ModalPayComponent;