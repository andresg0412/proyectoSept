import React from 'react';
import './ProductComponent.css';
import imgProduct from '../../assets/images/product-headphones.webp';

const ProductDescriptionComponent = ({ product }) => {
    return (
        <>
            <div className="productDescription">
                <img src={imgProduct} alt="imgProduct" />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p>Unidades disponibles: {product.stock}</p>
            </div>
        </>
    );
};
export default ProductDescriptionComponent;