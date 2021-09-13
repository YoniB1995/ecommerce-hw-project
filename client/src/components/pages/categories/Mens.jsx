import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsCard from "../../features/card/ProductsCard";

const Mens = () => {
  const [mens, setMens] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
      .then((response) => response.json())
      .then((result) => setMens(result));
  }, []);

  return (
    <div>
      <img src="images/men_clothing_logo.jpg" alt="men logo" />

      <ProductsList>
        {mens.map((product, i) => (
          <ProductsCard
            key={i}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            productID={product.id}
          />
        ))}
      </ProductsList>
    </div>
  );
};

export default Mens;

export const ProductsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
