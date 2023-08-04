import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    document.getElementById("Form").reset();
    e.preventDefault();
  };

  return (
    <>
      <Navigation></Navigation>
      <Container className="min-h-[80vh]">
        {!isLoading && (
          <form
            id="Form"
            className="my-5 p-4 rounded shadow mx-auto bg-[#00445f]"
            style={{ maxWidth: "25rem" }}
            onSubmit={handleRegisterSubmit}
          >
            <Typography
              style={{ textAlign: "center" }}
              sx={{ my: 3 }}
              variant="h5"
              gutterBottom
            >
              REGISTER
            </Typography>
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Your Name"
              name="name"
              onBlur={handleOnBlur}
              variant="filled"
              focused
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnBlur}
              variant="filled"
              focused
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
              variant="filled"
              focused
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Retype Password"
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              variant="filled"
              color="info"
              focused
            />

            <Button
              sx={{ width: "95%", m: 1 }}
              style={{
                backgroundColor: "crimson",
              }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Register;
