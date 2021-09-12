import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Product = ({ title, price, description, category, image }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProduct(result));
  }, []);
  return (
    <ProductCard>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{category}</p>
      <p>
        <img src={image} alt={title} />
      </p>
      <p>
        <span style={{ textDecorationLine: "line-through" }}>{price}$</span>
        <div>{Math.round(price * 0.8)}$</div>
      </p>
      <button>Get Details</button>
    </ProductCard>
  );
};

export default Product;

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

  img {
    height: 150px;
  }
`;
