import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsCard from "../../features/card/ProductsCard";
import { API_STORE_MEN } from "../../../service/api.service";
const Mens = () => {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    fetch(API_STORE_MEN)
      .then((response) => response.json())
      .then((result) => setMenProducts(result));
  }, []);

  return (
    <div>
      <img src="images/men_clothing_logo.jpg" alt="men logo" />

      <ProductsList>
        {menProducts.map((product, i) => (
          <ProductsCard
            key={i}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            productID={product._id}
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
