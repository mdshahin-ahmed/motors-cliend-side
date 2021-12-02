import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {img, name, price} = product;
    return (

        <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
            <div className="card car-card">
                <div className='overflow-hidden'>
                    <img className="card-img-top car-img" src={img} alt="" />
                </div>
                {/* <!-- card body --> */}
                <div className="card-body">
                    <div className="car-info d-flex justify-content-between">
                        {/* <!-- first flex child --> */}
                        <div className="car-text text-uppercase">
                            <h6 className="font-weight-bold">{name}</h6>
                        </div>
                        {/* <!-- second flex child --> */}
                        <h5 className="car-value align-self-center py-2 px-3 text-center">
                            $
                            <span className="car-price">{price}</span>
                        </h5>
                    </div>
                </div>
                <Link to='/orderPlace'>
                    <button className="btn btn-primary">Buy Now</button>
                </Link>
                {/* <!-- card body end --> */}
            </div>
        </div>

    );
};

export default Product;