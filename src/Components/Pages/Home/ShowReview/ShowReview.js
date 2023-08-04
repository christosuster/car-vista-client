import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ShowReview.css";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .then(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <div className="container my-12">
        <div className="text-center flex justify-center items-center text-5xl font-bold">
          <h1 className="text-blue-600 px-2">Customer</h1>
          <h1 className="text-yellow-500 px-2"> Reviews</h1>
        </div>
        {isLoading && (
          <div className="d-flex align-items-center my-5 py-5">
            <CircularProgress className="mx-auto" />
          </div>
        )}
        {reviews[0] && (
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 py-5">
              {reviews.map((review) => (
                <div key={review._id} className="col">
                  <div className="card shadow h-[200px]">
                    <div className="card-body">
                      <div className="review-card">
                        <div>
                          <h5 className="font-extrabold text-slate-900 my-2">
                            {review.name}
                          </h5>
                          <h6 className="card-subtitle mb-2 text-black">
                            {review.email}
                          </h6>
                          <Rating
                            name="half-rating-read"
                            value={`${review.rating}`}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                        <img
                          style={{
                            height: "120px",
                            width: "120px",
                            marginTop: "-70px",
                            marginLeft: "-5px",
                          }}
                          src={review?.image}
                          className="img-fluid rounded-circle p-2"
                          alt="..."
                        />
                      </div>
                      <div className="d-flex text-slate-700">
                        <p className="card-text fw-bold overflow-auto">
                          <span className="fs-3 px-2 text-secondary">
                            <i class="fas fa-quote-left"></i>
                          </span>
                          {review?.feedback?.slice(0, 200)}{" "}
                          <span className="text-slate-900">
                            {review?.feedback?.slice(250) && <p>...see more</p>}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowReview;
