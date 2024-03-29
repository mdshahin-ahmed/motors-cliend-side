import React, { useState, useEffect } from "react";
import Product from "../../Shared/Product/Product";
import { Spinner } from "react-bootstrap";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://motors-wlpp.onrender.com/homeProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="inventory py-5">
      <div className="container">
        {/* <!-- section title --> */}
        <div className="row mb-5">
          <div className="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1 mb-0">
              Our
            </h1>
            <h1 className="section-title-special mx-1">Products</h1>
          </div>
        </div>
        {/* <!-- section title end --> */}

        {/* <!-- cars --> */}
        <div className="row">
          {products.length ? (
            products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
          ) : (
            <Spinner
              style={{ margin: "0 auto" }}
              animation="border"
              variant="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
