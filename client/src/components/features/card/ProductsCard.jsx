import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getProductDetails } from "../../../redux/productDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cartSlicer";

const ProductsCard = ({
  title,
  price,
  description,
  category,
  image,
  productID,
}) => {
  const dispatch = useDispatch();

  const getProduct = useSelector((state) => state.product);
  const { product, loading, error } = getProduct;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <ProductCard>
      <h3>{title}</h3>
      <p>{category}</p>
      <div></div>
      <img src={image} alt={title} />
      <Description>{description.substring(1, 100)}...</Description>
      <p>
        <span style={{ textDecorationLine: "line-through" }}>{price}$</span>
        <div>{Math.round(price * 0.8)}$</div>
      </p>
      <Link to={`product/${productID}`} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Get Details
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleAddToCart(product)}
        >
          Add To Cart
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

const Description = styled.div`
  width: 70%;
  font-weight: 300;
  font-size: 20px;
`;
