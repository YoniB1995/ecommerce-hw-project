import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productsSlice";
import styled from "styled-components";
import ProductsCard from "../features/card/ProductsCard";
import { CircularProgress } from "@material-ui/core";
import "./HomepageTest.css";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const getAllProducts = useSelector((state) => state.products);
  const { products, loading, error } = getAllProducts;

  return (
    <HomepageBody>
      <img
        src="images/mil_honey_banner.jpg"
        alt="mlik and honey banner"
        height="250px"
        width="250px"
      />
      <HeaderHomepage>Latest Products</HeaderHomepage>
      <ProductsList>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product, i) => (
            <ProductsCard
              key={i}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              productID={product._id}
            />
          ))
        )}
      </ProductsList>
    </HomepageBody>
  );
};

export default Homepage;

const HomepageBody = styled.div`
  text-align: center;
`;
const HeaderHomepage = styled.h1`
  height: 100%;
  background: #ffffff;
  @media screen and (max-height: 400px) {
  }
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

  @media screen and (max-height: 400px) {
    display: flex;
  }
`;
