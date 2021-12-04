import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';


const ManageOrders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, You Want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!');
                    }
                })  
        }
    }
    return (
        <div>
            <div className="inventory py-5">
                <div className="container">
                    {/* <!-- section title --> */}
                    <div className="row mb-5">
                        <div className="col d-flex flex-wrap text-uppercase justify-content-center">
                            <h1 className="font-weight-bold align-self-center mx-1 mb-0">All</h1>
                            <h1 className="section-title-special bg-primary mx-1">Orders</h1>
                        </div>
                    </div>
                    {/* <!-- section title end --> */}

                    {/* <!-- cars --> */}
                    <div className="row">
                        {
                            products.map(product => <ManageOrder
                                key={product._id}
                                product={product}
                                handleDeleteProduct={handleDeleteProduct}
                            ></ManageOrder>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;