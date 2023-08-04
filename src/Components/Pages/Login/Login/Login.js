import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <Navigation></Navigation>
      <Container className="min-h-[80vh]">
        <form
          className="my-5 p-4 rounded shadow mx-auto bg-[#00445f]"
          style={{ maxWidth: "25rem" }}
          onSubmit={handleLoginSubmit}
        >
          <Typography
            style={{ textAlign: "center" }}
            sx={{ my: 3 }}
            variant="h5"
            gutterBottom
          >
            LOGIN
          </Typography>
          <TextField
            sx={{ width: "95%", m: 1 }}
            id="standard-basic"
            label="Email"
            name="email"
            onChange={handleOnChange}
            variant="filled"
            focused
          />
          <TextField
            sx={{ width: "95%", m: 1 }}
            id="standard-basic"
            label="Password"
            focused
            type="password"
            name="password"
            onChange={handleOnChange}
            variant="filled"
          />

          <Button
            sx={{ width: "95%", m: 1 }}
            style={{
              backgroundColor: "crimson",
            }}
            type="submit"
            variant="contained"
          >
            Login
          </Button>
          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button variant="text">New user? Please register</Button>
          </NavLink>
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">Login successful!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
          <Container className="d-flex justify-content-center my-2">
            <Button
              style={{
                backgroundColor: "chocolate",
              }}
              onClick={handleGoogleSignIn}
              variant="contained"
            >
              Google Sign In
            </Button>
          </Container>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
