import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);
  return (
    <HomepageBody>
      This is Body
      <ProductsList>
        {products.map((product) => (
          <Product
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
      </ProductsList>
    </HomepageBody>
  );
};

export default Homepage;

const HomepageBody = styled.div`
  height: 100%;
  background: #f4f4f4;
`;

const ProductsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
