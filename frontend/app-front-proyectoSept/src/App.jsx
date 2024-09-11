import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { useRetrievePaymentData } from './hooks/usePayInfo';
import { useDeliveryInfo } from './hooks/useDeliveryInfo';
import { useRetrieveProductSelected } from './hooks/useProductSelected';

function App() {
  const retrievePaymentData = useRetrievePaymentData();
  const deliveryInfo = useDeliveryInfo();
  const productSelected = useRetrieveProductSelected();
  
  useEffect(() => {
    retrievePaymentData();
    deliveryInfo();
    productSelected();
  }, [ retrievePaymentData, deliveryInfo, productSelected ]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
