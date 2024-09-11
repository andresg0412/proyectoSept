import React from 'react';
import { Link } from 'react-router-dom';
import './CardComponent.css';

const CardComponent = ({ product, onClick }) => {

    return (
        <>
            <li key={product.id} className="cardComponent">
                <Link to={"/product"} onClick={onClick}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </Link>
            </li>
        </>
    );
};

export default CardComponent;