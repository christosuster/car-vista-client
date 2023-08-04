import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ManageProducts.css";
import StarIcon from "@mui/icons-material/AccessAlarm";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .then(() => setIsLoading(false));
  }, []);
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("Deleted Successfully!");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="container">
      <h2 className="text-4xl font-bold text-white text-center my-3">
        MANAGE ORDERS
      </h2>
      {isLoading && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {!isLoading && (
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-5 py-5">
          {products.map((singleCar) => (
            <div key={singleCar._id} className="col">
              <div className="card shadow" style={{ minHeight: "680px" }}>
                <div className="card bg-dark text-white">
                  <img
                    src={singleCar.image}
                    className="card-img img-fluid"
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
                          <br />
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
                <div className="card-body">
                  <h5 className="text-2xl fond-bold">{singleCar.car_name}</h5>
                  <h6>Price: ${singleCar.car_price}</h6>
                  <p className="card-text fw-bold text-secondary pt-2">
                    {singleCar?.detail}
                  </p>
                </div>
                <div className="d-flex" style={{ backgroundColor: "#dbe3e3" }}>
                  <Link
                    to={`/details/${singleCar._id}`}
                    className="w-50 text-center my-2 link"
                  >
                    <button className="btn btn-outline-success">
                      Detail <i className="fas fa-info-circle"></i>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteProduct(singleCar._id)}
                    type="button"
                    className="align-self-center btn btn-outline-danger mx-auto"
                  >
                    Delete <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
