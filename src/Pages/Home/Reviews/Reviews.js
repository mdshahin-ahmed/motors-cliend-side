import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://obscure-caverns-05990.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <section id="quotes" className="py-5 my-5">
        <div className="container">
          {/* <!-- section title --> */}
          <div className="row mb-5">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center">
              <h1 className="font-weight-bold align-self-center mx-1 mb-0">
                what they
              </h1>
              <h1 className="section-title-special mx-1">say</h1>
            </div>
          </div>
          {/* <!-- section title end --> */}
          <div className="row">
            {reviews.map((review) => (
              <SingleReview key={review._id} review={review}></SingleReview>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
