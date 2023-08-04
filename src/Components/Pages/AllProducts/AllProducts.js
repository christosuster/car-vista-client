import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/AccessAlarm";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://car-vista-client.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .then(() => setIsLoading(false));
  }, []);
  return (
    <div className="">
      <Navigation />
      <div className="container min-h-screen">
        <div className="text-center flex justify-center items-center text-5xl font-bold mt-4">
          <h1 className="text-blue-600 px-2">Our </h1>
          <h1 className="text-yellow-500 px-2"> Collection</h1>
        </div>
        {isLoading && (
          <div className="d-flex align-items-center my-5 py-5">
            <CircularProgress className="mx-auto" />
          </div>
        )}
        {products[0] && (
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 py-5">
              {products.map((singleCar) => (
                <div key={singleCar._id} className="col ">
                  <div className="card shadow h-[500px] border-0 ">
                    <div className="card bg-dark text-white rounded-none">
                      <img
                        src={singleCar.image}
                        className="card-img h-[250px] rounded-none object-cover"
                        alt="..."
                      />
                      <div className="card-img-overlay p-0">
                        <div>
                          <div className="d-flex justify-content-between">
                            <p></p>
                            <h5
                              className="p-1 my-2"
                              style={{ backgroundColor: "#465c57" }}
                            >
                              <span className="text-warning">$</span>
                              {singleCar.car_price}
                            </h5>
                          </div>
                          <div className="footer">
                            <p className="my-0 mx-3 p-2">
                              <Rating
                                name="half-rating-read"
                                value={`${singleCar.rating}`}
                                precision={0.5}
                                readOnly
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body overflow-y-scroll">
                      <h5 className="card-title text-blue-800 text-xl font-bold">
                        {singleCar.car_name}
                      </h5>
                      <p className="card-text fw-bold text-secondary pt-2">
                        {singleCar?.detail}
                      </p>
                    </div>
                    <div
                      className="d-flex"
                      style={{ backgroundColor: "#dbe3e3" }}
                    >
                      <Link
                        to={`/details/${singleCar._id}`}
                        className="w-50 text-center my-2"
                      >
                        <button className="btn btn-outline-success">
                          Detail <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="align-self-center btn btn-outline-danger mx-auto"
                      >
                        BUY NOW <i className="fas fa-money-check-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
