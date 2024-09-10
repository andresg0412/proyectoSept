import React from 'react';
import ListComponent from '../components/List/ListComponent';
import '../syles/global.css';

const HomePage = () => {
    return (
        <>
            <div className="homePage">
                <h1>Escoge tu producto</h1>
                <ListComponent />
            </div>
        </>
    );
};

export default HomePage;