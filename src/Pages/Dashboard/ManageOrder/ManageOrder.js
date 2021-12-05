import React from 'react';

const ManageOrder = ({ product, handleDeleteProduct }) => {
    const { _id, img, name, price, description,status } = product;

    return (

        <div className="col-12 my-3 col-md-6 col-lg-4 d-flex">
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
                    <p>{description}</p>
                </div>
                <div className='d-flex justify-content-around'>
                    <button className="btn btn-info text-black mb-3">{status}</button>
                    <button onClick={() => handleDeleteProduct(_id)} className="btn btn-danger mb-3">Delete</button>
                </div>
                {/* <!-- card body end --> */}
            </div>
        </div>

    );
};

export default ManageOrder;