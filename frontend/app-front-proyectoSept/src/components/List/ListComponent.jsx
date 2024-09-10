import React from 'react';
import CardComponent from '../Card/CardComponent';
import './ListComponent.css';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../../redux/reducers/ProductReducer';


const ListComponent = () => {
    const dispatch = useDispatch();

    //Lista de productos temporal
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ]

    //FUNCION PARA SELECCIONAR PRODUCTO
    const handleClick = (product) => {
        dispatch(selectProduct(product));
    }

    //OBTENER PRODUCTOS


    return (
        <>
            <h1>ListComponent</h1>
            <div className="listProducts">
                {products.map((product) => (
                    <CardComponent
                        key={product.id}
                        product={product}
                        onClick={() => handleClick(product)}
                    />
                ))}
            </div>
        </>
    );
};

export default ListComponent;