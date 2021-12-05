import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Headers from '../../Shared/Headers/Headers';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;