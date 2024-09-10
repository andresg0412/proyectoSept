import React from 'react';
import { Link } from 'react-router-dom';
import ListComponent from '../components/List/ListComponent';

const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <ListComponent />
            <Link to="/product">Product Page</Link>
        </>
    );
};

export default HomePage;