import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../features/footer/Footer";
import Header from "../features/header/Header";
import Checkout from "../pages/Checkout";
import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import Category from "../pages/Category";

const AppRouter = () => {
  return (
    <>
      {" "}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/categories" component={Category} />
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />{" "}
      </Router>
    </>
  );
};

export default AppRouter;
