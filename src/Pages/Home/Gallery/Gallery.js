import React from 'react';
import './Gallery.css';
import america1 from '../../../image/car-american-1.jpeg'
import america2 from '../../../image/car-american-2.jpeg'
import america3 from '../../../image/car-american-3.jpeg'
import america4 from '../../../image/car-american-4.jpeg'
import america5 from '../../../image/car-american-5.jpeg'

const Gallery = () => {
    return (
    <section id="gallery" class="gellery py-5 my-5">
        <div class="container">
            {/* <!-- section title --> */}
            <div class="row mb-5">
                <div class="col d-flex flex-wrap text-uppercase justify-content-center">
                    <h1 class="font-weight-bold align-self-center mx-1 mb-0">our</h1>
                    <h1 class="section-title-special mx-1">gallery</h1>
                </div>                
            </div>
            {/* <!-- section title end --> */}
            <div class="row">
                <div class="col-sm-6">
                    <div class="gallery-item">
                        <img src={america1} alt="" class="img-fluid gallery-img"/>
                    </div>
                </div>
                {/* <!-- end of first col --> */}
                <div class="col-sm-6 d-flex flex-column justify-content-between">
                    <div class="row">
                        {/* <!-- first item --> */}
                        <div class="col-sm-6">
                            <div class="gallery-item">
                                <img src={america2} alt="" class="img-fluid gallery-img"/>
                            </div>
                        </div> 
                        {/* <!-- second item --> */}
                        <div class="col-sm-6">
                            <div class="gallery-item">
                                <img src={america3} alt="" class="img-fluid gallery-img"/>
                            </div>
                        </div>                        
                    </div>
                    {/* <!-- second row --> */}
                    <div class="row">
                        {/* <!-- first item --> */}
                        <div class="col-sm-6">
                            <div class="gallery-item">
                                <img src={america4} alt="" class="img-fluid gallery-img"/>
                            </div>
                        </div> 
                        {/* <!-- second item --> */}
                        <div class="col-sm-6">
                            <div class="gallery-item">
                                <img src={america5} alt="" class="img-fluid gallery-img"/>
                            </div>
                        </div>                        
                    </div>
                </div>
                {/* <!-- end of second col --> */}
            </div>
        </div>
    </section>
    );
};

export default Gallery;