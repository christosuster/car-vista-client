import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../../Logo/Logo";

const Navigation = () => {
  const { user, logout, token } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    const url = `https://car-vista-client.onrender.com/booking?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserOrders(data));
  }, [user.email, token]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid container">
        <NavLink className="navbar-brand" to="/home">
          <Logo />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/allProducts">
                Explore
              </NavLink>
            </li>
            {user?.email && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
          {user?.email ? (
            <Link
              id="user"
              className="nav-link active text-yellow-500 inline-flex  border-2 border-yellow-500 rounded-pill p-2 justify-center items-center hover:bg-yellow-500 hover:text-white"
              to="/home"
            >
              {user.photoURL ? (
                <span>
                  <img className="userImg mr-2" src={user.photoURL} alt="" />
                </span>
              ) : (
                <span>
                  <img
                    className="userImg mr-2"
                    src="https://christopherscottedwards.com/wp-content/uploads/2018/07/Generic-Profile.jpg"
                    alt=""
                  />
                </span>
              )}{" "}
              {user?.displayName}
            </Link>
          ) : (
            <p></p>
          )}
          {user?.email ? (
            <div>
              <Badge
                className="ms-3 me-4"
                badgeContent={userOrders.length}
                color="error"
              >
                <Link to="/dashboard/myOrders">
                  <ShoppingCartIcon
                    sx={{ color: "goldenrod" }}
                    color="action"
                  />
                </Link>
              </Badge>
              <button
                onClick={logout}
                className="btn btn-outline-warning"
                type="submit"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-outline-warning" type="submit">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
