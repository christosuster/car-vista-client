import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Contexts/AuthProvider/AuthProvider";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import Details from "./Components/Pages/Details/Details";
import About from "./Components/Pages/About/About";
import AllProducts from "./Components/Pages/AllProducts/AllProducts";
import PrivateRoute from "./Components/Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
