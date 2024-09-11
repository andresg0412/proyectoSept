import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDescriptionComponent from '../components/Product/ProductDescriptionComponent';
import ButtonComponent from '../components/Button/ButtonComponent';
import ModalPayComponent from '../components/Modal/ModalPayComponent';
import ModalAlertComponent from '../components/Modal/ModalAlertComponent';

const ProductPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);
    const selectedProduct = useSelector((state) => state.product.selectedProduct);

    //CONTROLADORES DE MODALES
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const openModalAlert = () => setIsModalAlertOpen(true);

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
                <ModalPayComponent
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    openModalAlert={openModalAlert}
                />
                <Link to="/">Home Page</Link>
                {isModalAlertOpen ? (
                    <ModalAlertComponent onClose={() => setIsModalAlertOpen(false)} />
                ) : (
                    null
                )}
            </div>
        </>
    );
};

export default ProductPage;