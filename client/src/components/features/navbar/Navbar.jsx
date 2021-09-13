import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar({ click }) {
  const style = { textDecoration: "none", color: "black" };

  return (
    <>
      <HeaderList>
        <img src="images/header_milk_Honey.jpg" alt="milk_honey_banner" />
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
            <li>Contact Us</li>
          </Link>
          <Link style={style}>
            <li>Cart</li>
          </Link>
        </NavBarLinks>
      </HeaderList>
      <HamburgerMenu onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>
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
    img {
      width: 20%;
    }
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
  }
`;
