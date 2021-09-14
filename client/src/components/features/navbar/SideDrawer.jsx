import React, { useState, useEffect } from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { shopCartIcon, contactUsIcon } from "../icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../../redux/cartSlicer";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  show && sideDrawerClass.push("show");

  const style = {
    textDecoration: "none",
    color: "black",
    margin: "25px",
    fontWeight: 800,
  };

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <Link to="/" style={style}>
          <li>Home</li>
        </Link>
        <Link to="/men" style={style}>
          <li>Mens</li>
        </Link>
        <Link to="/women" style={style}>
          <li>Womens</li>
        </Link>
        <Link to="/jewelry" style={style}>
          <li>Jewelry</li>
        </Link>
        <Link to="/electronics" style={style}>
          <li>Electronics</li>
        </Link>
        <Link to="/contactus" style={style}>
          <li>{contactUsIcon}Contact Us</li>
        </Link>
        <Link to="/checkout" style={style}>
          <li>
            {shopCartIcon} Cart <b>({cart.cartTotalQuantity}) </b>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideDrawer;
