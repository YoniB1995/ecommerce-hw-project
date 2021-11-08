import React, { useState, useEffect } from "react";
import "./SideDrawer.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../../redux/cartSlicer";
import { useAuth } from "../../context/AuthContext";

import {
  shopCartIcon,
  contactUsIcon,
  userLoginIcon,
  userLogoutIcon,
  userRegisterIcon,
} from "../icons/Icons";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  show && sideDrawerClass.push("show");
  const history = useHistory();
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(localStorage.getItem("useremail"));
    }
  }, [user]);

  const style = {
    textDecoration: "none",
    color: "black",
    margin: "20px",
    fontWeight: 800,
    fontSize: "15px",
  };

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const { logout } = useAuth();

  const handleLogout = async () => {
    setError("");
    localStorage.removeItem("useremail");
    localStorage.removeItem("token");
    history.push("/login");
    setUser(null);
    try {
      await logout();
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        {!user ? (
          <>
            <Link to="/signup" style={style}>
              <li>Register{userRegisterIcon}</li>
            </Link>{" "}
            <Link to="/login" style={style}>
              <li>Login{userLoginIcon}</li>
            </Link>
          </>
        ) : (
          <>
            <li>Welcome </li>

            <li style={style} onClick={handleLogout}>
              Logout{userLogoutIcon}
            </li>
          </>
        )}
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
