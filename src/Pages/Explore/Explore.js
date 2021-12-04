import React, { useEffect, useState } from 'react';
import Headers from '../Shared/Headers/Headers';
import Product from '../Shared/Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    return (
        <div>
            <Headers />
            <div className="inventory py-5">
            <div className="container">
                {/* <!-- section title --> */}
                <div className="row mb-5">
                    <div className="col d-flex flex-wrap text-uppercase justify-content-center">
                        <h1 className="font-weight-bold align-self-center mx-1 mb-0">Our</h1>
                        <h1 className="section-title-special bg-primary mx-1">Products</h1>
                    </div>
                </div>
                {/* <!-- section title end --> */}

                {/* <!-- cars --> */}
                <div className="row">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }

                </div>
            </div>
        </div>
        </div>
    );
};

export default Explore;