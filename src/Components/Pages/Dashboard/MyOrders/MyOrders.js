import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const MyOrders = () => {
  const { user, token } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `https://car-vista-client.onrender.com/booking?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserOrders(data))
      .then(() => setIsLoading(false));
  }, [user.email, token]);

  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://car-vista-client.onrender.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = userOrders.filter(
              (userService) => userService._id !== id
            );
            setUserOrders(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-white">MY ORDERS</h1>
      {isLoading && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {!isLoading && !userOrders[0] && (
        <div className="my-5">
          <h3 className="text-info fw-bold">
            You haven't ordered anything yet.
          </h3>
          <h4 className="text-warning fw-bold">Thank you for visiting us.</h4>
        </div>
      )}
      {userOrders[0] && (
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-secondary my-2">Orders: {userOrders.length}</h2>
          {userOrders.map((userOrder) => (
            <div
              key={userOrder._id}
              className="card my-3 border-0 shadow-md w-[500px] bg-sky-950 "
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                  <img
                    src={userOrder.car_Detail.image}
                    className="img-fluid w-full m-2"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body flex flex-col items-center justify-center">
                    <h5 className="font-bold text-2xl text-yellow-500">
                      {userOrder.car_Detail.car_name}
                    </h5>
                    <h6 className="text-yellow-600 mb-2">
                      Price: ${userOrder.car_Detail.car_price}
                    </h6>
                    <p className="bg-blue-800 rounded-pill d-inline py-1 px-2">
                      <small className="text-white">
                        {userOrder.condition}
                      </small>
                    </p>
                    <div className="my-2">
                      <div className="my-2">
                        <Link
                          to={`/details/${userOrder.car_Detail._id}`}
                          className="w-50 text-center my-2 link me-2"
                        >
                          <button className="btn btn-outline-info">
                            <i className="fas fa-info-circle"></i> Detail
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDeleteUserService(userOrder._id)}
                          type="button"
                          className="align-self-center btn btn-outline-danger mx-auto"
                        >
                          <i className="fa-solid fa-trash-can"></i> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
