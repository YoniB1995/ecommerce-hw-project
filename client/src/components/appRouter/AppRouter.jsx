import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../features/header/Header";
import { ToastContainer } from "react-toastify";
import * as Page from "../pages/user.page";
import * as Category from "../pages/categories/category.route";
const AppRouter = () => {
  return (
    <>
      {" "}
      <Router>
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={Page.Homepage} />
          <Route exact path="/checkout" component={Page.Checkout} />
          <Route exact path="/product/:id" component={Page.Product} />
          <Route exact path="/contactus" component={Page.ContactUs} />
          {/* <Route exact path="/categories/:category" component={Category} /> */}
          <Route exact path="/men" component={Category.Mens} />
          <Route exact path="/women" component={Category.Women} />
          <Route exact path="/jewelry" component={Category.Jewelry} />
          <Route exact path="/electronics" component={Category.Electronics} />
          {/* <Route exact path="*" component={Page.NotFoundPage} /> */}
        </Switch>{" "}
      </Router>
    </>
  );
};

export default AppRouter;
