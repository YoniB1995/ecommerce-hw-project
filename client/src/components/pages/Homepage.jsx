import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsCard from "../features/card/ProductsCard";
import { API } from "../../service/product-service";
import "./HomepageTest.css";
const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API}/products`)
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <HomepageBody>
      <ProductsList>
        {products.map((product, i) => (
          <ProductsCard
            key={i}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            productID={product.productID}
          />
        ))}
      </ProductsList>
    </HomepageBody>
  );
};

export default Homepage;

const HomepageBody = styled.div`
  height: 100%;
  background: #ffffff;
`;

const ProductsList = styled.div`
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