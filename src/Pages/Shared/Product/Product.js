import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, img, name, price, description } = product;
    return (

        <div className="col-12 my-3 col-md-6 col-lg-4 d-flex">
            <div className="card car-card">
                <div className='overflow-hidden'>
                    <img style={{height: '250px', width:'100%'}} className="card-img-top car-img" src={img} alt="" />
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
                    <p>{description}</p>
                </div>
                <Link to={`/products/orderPlace/${_id}`}>
                    <button  className="btn btn-primary mb-3">Buy Now</button>
                </Link>
                {/* <!-- card body end --> */}
            </div>
        </div>

    );
};

export default Product;