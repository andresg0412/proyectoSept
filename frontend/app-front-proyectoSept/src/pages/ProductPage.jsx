import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProductPage = () => {

    const selectedProduct = useSelector((state) => state.product.selectedProduct);

    if (!selectedProduct) {
        return <div>No product selected.</div>;
    }
    return (
        <>
            <h1>Product Page</h1>
            <h1>{selectedProduct.name}</h1>

            <Link to="/">Home Page</Link>
        </>
    );
};

export default ProductPage;