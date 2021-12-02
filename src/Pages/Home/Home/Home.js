import React from 'react';
import Headers from '../../Shared/Headers/Headers';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
        </div>
    );
};

export default Home;