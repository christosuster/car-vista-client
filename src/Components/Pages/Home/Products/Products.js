import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/AccessAlarm";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const showAbleProducts = products.slice(0, 6);
  return (
    <div className="container my-10">
      <div className="text-center flex justify-center items-center text-5xl font-bold">
        <h1 className="text-blue-600 px-2">Our </h1>
        <h1 className="text-yellow-500 px-2"> Collection</h1>
      </div>
      {!products[0] && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {products[0] && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 py-5">
            {showAbleProducts.map((singleCar) => (
              <div key={singleCar._id} className="col">
                <div className="card border-0 h-[500px]">
                  <div className="card bg-dark text-white border-0 rounded-none">
                    <img
                      src={singleCar.image}
                      className="  h-[200px] object-cover rounded-none border-0"
                      alt="..."
                    />
                    <div className="card-img-overlay p-0 rounded-none">
                      <div>
                        <div className="d-flex justify-content-between">
                          <h5
                            className="p-1 my-2"
                            style={{ backgroundColor: "#465c57" }}
                          >
                            <span className="text-warning">$</span>
                            {singleCar.car_price}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-blue-800 text-xl font-bold">
                      {singleCar.car_name}
                    </h5>
                    <p className="card-text fw-bold text-secondary pt-2">
                      {singleCar?.detail}{" "}
                    </p>
                  </div>
                  <div className="flex bg-slate-700">
                    <Link
                      to={`/details/${singleCar._id}`}
                      className="w-50 text-center my-2"
                    >
                      <button className="btn btn-outline-info">
                        Detail <i className="fas fa-info-circle"></i>
                      </button>
                    </Link>
                    <Link
                      to={`/details/${singleCar._id}#Form`}
                      className="w-50 text-center my-2"
                    >
                      <button className="btn btn-outline-warning">
                        BUY NOW <i className="fas fa-money-check-alt"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="d-flex align-items-center">
        <Link to="/allProducts" className="text-center mx-auto mb-4">
          <button className="btn btn-outline-info">Explore All</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
