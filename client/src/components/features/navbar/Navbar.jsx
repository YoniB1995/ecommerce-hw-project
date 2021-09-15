import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../../redux/cartSlicer";
import { useAuth } from "../../context/AuthContext";

import {
  shopCartIcon,
  contactUsIcon,
  userLoginIcon,
  userRegisterIcon,
  userLogoutIcon,
} from "../icons/Icons";

export default function Navbar({ click }) {
  const style = { textDecoration: "none", color: "black" };
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(localStorage.getItem("useremail").toString());
    }
  }, [user]);
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
    <>
      <HeaderList>
        <HeaderImageRegister>
          <Link to="/" style={style}>
            <img
              src="images/mil_honey_web_logo.jpeg"
              alt="milk_honey_banner"
              class="header-img"
            />
          </Link>
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
              <li>Welcome {user}</li>
              <button onClick={handleLogout}>
                <li>Logout{userLogoutIcon}</li>
              </button>
            </>
          )}
        </HeaderImageRegister>
        <NavBarLinks>
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
        </NavBarLinks>
        <HamburgerHeader>Menu</HamburgerHeader>
        <HamburgerMenu onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerMenu>
      </HeaderList>
    </>
  );
}

const HeaderList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  list-style-type: none;
  font-size: 20px;
  li {
    margin: 30px;
  }

  li:hover {
    opacity: 0.5;
    transition: 0.5s ease-in-out;
    border-radius: 10px;
    cursor: pointer;
  }

  img {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 960px) {
    display: flex;
    justify-content: space-around;
    img {
      width: 20%;
    }

    .header-img {
      display: none;
    }
  }
`;

const HeaderImageRegister = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 900;
  @media (max-width: 960px) {
    display: none;
  }
`;

const NavBarLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    padding-left: 1.5rem;
    span {
      display: flex;
      align-items: center;
      margin-left: 8px;
    }
    a {
      text-decoration: none;
      background: #f4f4f4;
      padding: 10px;
      border-radius: 10px;
      color: #171717;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const HamburgerHeader = styled.h4`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    margin-top: 30px;
  }
`;

const HamburgerMenu = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  div {
    width: 100%;
    height: 3px;
    background: #141414;
  }

  @media (max-width: 960px) {
    display: flex;
    margin-top: 30px;
  }
`;
