import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container-fluid">
                <div className="row height-max align-items-center justify-content-center">
                    <div className="col-md-9 ml-auto text-right pr-5">
                        <h5 className="title-banner d-inline-block p-2 text-uppercase">the all new</h5>
                        <h2 className="text-uppercase my-2 title">2021 mercedes-benz</h2>
                        <h3 className="text-uppercase">Mercedes-Benz A 220 Sedan</h3>
                        <h6 className="text-uppercase">start form</h6>
                        <h2>$160,00</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;