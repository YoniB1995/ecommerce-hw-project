import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "../features/header/Header";
import Signup from "../features/signup/Signup";
import Checkout from "../pages/Checkout";
import { ToastContainer } from "react-toastify";
import * as Page from "../pages/user.page";
import * as Category from "../pages/categories/category.route";
import Login from "../features/login/Login";
import Forgotpass from "../features/forgotpass/Forgotpass";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("token"));

  return (
    <>
      {" "}
      <Router>
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={Page.Homepage} />
          <Route exact path="/product/:id" component={Page.Product} />
          <Route exact path="/contactus" component={Page.ContactUs} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={Forgotpass} />
          <Route exact path="/men" component={Category.Mens} />
          <Route exact path="/women" component={Category.Women} />
          <Route exact path="/jewelry" component={Category.Jewelry} />
          <Route exact path="/electronics" component={Category.Electronics} />
          <ProtectedRoute exact path="/checkout">
            {isLogin ? <Checkout /> : <Redirect to="/login" />}
          </ProtectedRoute>
        </Switch>{" "}
      </Router>
    </>
  );
};

export default AppRouter;
