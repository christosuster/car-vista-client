import {
  Button,
  CircularProgress,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import StarIcon from "@mui/icons-material/AccessAlarm";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import Review from "../Dashboard/Review/Review";

const Details = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [bookingData, setBookingData] = useState({});
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newCarData = { ...bookingData };
    newCarData[field] = value;
    setBookingData(newCarData);
  };
  const handleProductDateSubmit = (e) => {
    const booking = {
      ...bookingData,
      name: user.displayName,
      email: user.email,
      condition: "pending",
      car_Detail: itemDetail[0],
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("Order SuccessFull ");
          document.getElementById("Form").reset();
          history.push("/dashboard/myOrders");
        }
      });

    e.preventDefault();
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch();
  }, []);

  const itemDetail = data.filter((td) => td._id === id);

  return (
    <div>
      <Navigation></Navigation>
      {!itemDetail[0] && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {itemDetail[0] && (
        <div>
          <section className="container py-4">
            <h2 className="text-xl">{itemDetail[0]?.car_name}</h2>
            <div className="row">
              <div className="col-sm-12 col-md-7">
                <div className="card border-0 bg-dark text-white">
                  <img
                    src={itemDetail[0]?.image}
                    className="img-fluid"
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
                          {itemDetail[0]?.car_price}
                        </h5>
                      </div>
                      <div className="footer">
                        <p className="my-0 mx-3 p-2">
                          <Rating
                            name="text-feedback"
                            value={`${itemDetail[0]?.rating}`}
                            readOnly
                            precision={0.5}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <h6 className="text-secondary tw-bold">PRICE</h6>
                <h4 className="  d-inline-block mb-4 border-yellow-500 border-b">
                  <span className="text-warning">$</span>
                  {itemDetail[0]?.car_price}
                </h4>
                <h6 className="text-secondary tw-bold">TYPE</h6>
                <h5 className="border-yellow-500 border-b d-inline-block mb-4">
                  {itemDetail[0]?.type}
                </h5>
                <h6 className="text-secondary tw-bold">INTERIOR</h6>
                <h5 className="border-yellow-500 border-b d-inline-block mb-4">
                  {itemDetail[0]?.interior}
                </h5>
                <h6 className="text-secondary tw-bold">ENGINE</h6>
                <h5 className="border-yellow-500 border-b d-inline-block mb-4">
                  {itemDetail[0]?.engin}
                </h5>
              </div>
            </div>
            <h6 className="pt-4">
              <span className="text-yellow-500 text-2xl my-2">Description</span>
              <br />
              {itemDetail[0]?.detail}
            </h6>
          </section>
          <div id="show">
            <div className="container !text-white">
              <form
                id="Form"
                className="my-5 p-7 rounded shadow mx-auto bg-slate-800 "
                onSubmit={handleProductDateSubmit}
              >
                <h1 className="text-4xl font-bold text-center text-blue-600">
                  Purchase Form
                </h1>

                <TextField
                  className="w-full my-2 !text-blue-500s"
                  id="standard-basic"
                  label="Selected Car"
                  focused
                  value={itemDetail[0]?.car_name}
                  name="email"
                  variant="standard"
                />
                <TextField
                  className="w-full my-2"
                  id="standard-basic"
                  label="Your Name"
                  focused
                  value={`${user.displayName}`}
                  name="name"
                  variant="standard"
                />
                <TextField
                  className="w-full my-2"
                  id="standard-basic"
                  label="Your Email"
                  focused
                  value={`${user.email}`}
                  name="email"
                  variant="standard"
                />

                <TextField
                  className="w-full my-2"
                  id="standard-basic"
                  label="Phone"
                  color="info"
                  name="phone"
                  focused
                  required
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  className="w-full my-2"
                  id="standard-basic"
                  color="info"
                  required
                  focused
                  label="Your Location"
                  name="location"
                  onBlur={handleOnBlur}
                  variant="standard"
                />

                <Button
                  className="mx-auto text-white"
                  type="submit"
                  variant="contained"
                >
                  Proceed
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Details;
