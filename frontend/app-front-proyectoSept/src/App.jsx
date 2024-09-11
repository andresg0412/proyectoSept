import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { useDispatch } from 'react-redux';
import { selectPayInfo } from './redux/reducers/PayInfoReducer';
import { selectDeliveryInfo } from './redux/reducers/DeliveryInfoReducer';
import { selectProduct } from './redux/reducers/ProductReducer';
import { useRetrievePaymentData } from './hooks/usePayInfo';

function App() {
  const dispatch = useDispatch();
  const retrievePaymentData = useRetrievePaymentData();
  useEffect(() => {
    retrievePaymentData();
    const storeCardDelivery = sessionStorage.getItem('cardDelivery');
    const storedProduct = sessionStorage.getItem('product');
    if (storeCardDelivery) {
      dispatch(selectDeliveryInfo(JSON.parse(storeCardDelivery)));
    }
    if (storedProduct) {
      dispatch(selectProduct(JSON.parse(storedProduct)));
    }
  }, [ dispatch, retrievePaymentData ]);

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
