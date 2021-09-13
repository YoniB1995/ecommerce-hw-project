import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import "./ProductsCard.css";

const ProductsCard = ({
  title,
  price,
  description,
  category,
  image,
  productID,
}) => {
  const [product, setProduct] = useState([]);

  return (
    <ProductCard>
      {/* <div class="hero-container">
        <div class="main-container">
          <div class="poster-container">
            <a href="#">
              <img src={image} class="poster" />
            </a>
          </div>
          <div class="ticket-container">
            <div class="ticket__content">
              <h4 class="ticket__movie-title">{title}</h4>
              <p class="ticket__movie-slogan">{category}</p>
              <p class="ticket__current-price">{Math.round(price * 0.8)}$</p>
              <p class="ticket__old-price">{price}$</p>
              <button class="ticket__buy-btn">More Details</button>
            </div>
          </div>
        </div>
      </div> */}
      <h3>{title}</h3>
      <p>{category}</p>
      <p>
        <img src={image} alt={title} />
      </p>
      <p>
        <span style={{ textDecorationLine: "line-through" }}>{price}$</span>
        <div>{Math.round(price * 0.8)}$</div>
      </p>
      <Link to={`product/${productID}`} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Get Details
        </Button>
      </Link>
    </ProductCard>
  );
};

export default ProductsCard;

const ProductCard = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 2px black;
  width: 30%;
  height: 70vh;
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    height: 150px;
  }

  @media screen and (max-width: 840px) {
    width: 35%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
