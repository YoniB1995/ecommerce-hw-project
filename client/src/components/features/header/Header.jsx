import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const style = { textDecoration: "none" };
  return (
    <HeaderBody>
      <HeaderList>
        <img
          src="images/header_milk_Honey.jpg"
          alt="milk_honey_banner"
          height="100px"
          width="100px"
        />
        <Link to="/" style={style}>
          <li>Home</li>
        </Link>
        <Link style={style}>
          <li>Mens</li>
        </Link>
        <Link style={style}>
          <li>Womens</li>
        </Link>
        <Link style={style}>
          <li>Jewelery</li>
        </Link>
        <Link style={style}>
          <li>Electronics</li>
        </Link>
        <Link style={style}>
          <li>Contact Us</li>
        </Link>
        <Link style={style}>
          <li>Cart</li>
        </Link>
      </HeaderList>
    </HeaderBody>
  );
};

export default Header;

const HeaderBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 30px;
  height: 20vh;
`;

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
`;
