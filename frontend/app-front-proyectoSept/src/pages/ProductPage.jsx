import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDescriptionComponent from '../components/Product/ProductDescriptionComponent';
import ButtonComponent from '../components/Button/ButtonComponent';
import ModalPayComponent from '../components/Modal/ModalPayComponent';

const ProductPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const selectedProduct = useSelector((state) => state.product.selectedProduct);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    if (!selectedProduct) {
        return <div>No product selected.</div>;
    }
    return (
        <>
            <div className="productPage">
                <h1>Product Page</h1>
                <ProductDescriptionComponent
                    product={selectedProduct}
                />
                <ButtonComponent
                    text="Pagar con Tarjeta de Credito"
                    onClick={openModal}
                />
                <ModalPayComponent isOpen={isModalOpen} onClose={closeModal} />
                <Link to="/">Home Page</Link>
            </div>
        </>
    );
};

export default ProductPage;