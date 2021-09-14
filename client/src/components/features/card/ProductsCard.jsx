import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
