import React, { useState } from 'react';
import ButtonComponent from '../Button/ButtonComponent';
import { useDispatch } from 'react-redux';
import { selectDeliveryInfo } from '../../redux/reducers/DeliveryInfoReducer';

const PayDeliveryComponent = ({ nextStep, prevStep }) => {
    const dispatch = useDispatch();
    const [cardDelivery, setCardDelivery] = useState({
        name: '',
        phone: '',
        address: '',
        city: '',
    });
    const [errors, setErrors] = useState({});
    const handleClick = () => {
        dispatch(selectDeliveryInfo(cardDelivery));
        nextStep();
    }
    return (
        <>
            <div className="payDelivery">
                <h3>Delivery</h3>
                <div>
                    <div className="groupInput">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={(e) => setCardDelivery({ ...cardDelivery, name: e.target.value })}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="groupInput">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            onChange={(e) => setCardDelivery({ ...cardDelivery, phone: e.target.value })}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="groupInput">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            onChange={(e) => setCardDelivery({ ...cardDelivery, address: e.target.value })}
                        />
                        {errors.address && <p className="error">{errors.address}</p>}
                    </div>

                    <div className="groupInput">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            onChange={(e) => setCardDelivery({ ...cardDelivery, city: e.target.value })}
                        />
                        {errors.city && <p className="error">{errors.city}</p>}
                    </div>

                </div>

                <div className="buttonsControllers">
                    <ButtonComponent
                        text="Siguiente"
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
export default PayDeliveryComponent