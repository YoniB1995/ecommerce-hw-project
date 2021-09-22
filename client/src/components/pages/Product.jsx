import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProductDetails } from "../../redux/productDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlicer";

const Product = ({ match, history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]);

  const getProduct = useSelector((state) => state.product);
  const { product, status, error } = getProduct;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/checkout");
  };

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <ProductScreenBody>
        <ProductScreenLeft>
          <LeftImage>
            <img src={product.image} alt={product.title} />
          </LeftImage>
          <LeftInfo>
            <LeftName>{product.title}</LeftName>
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
          </LeftInfo>
        </ProductScreenLeft>
        <ProductScreenRight>
          <RightInfo>
            <p>
              Price: <span>${product.price}</span>
            </p>
            <p>
              Status: <span>In Stock</span>
            </p>

            <p>
              <button type="button" onClick={() => handleAddToCart(product)}>
                Add To Cart
              </button>
            </p>
          </RightInfo>
        </ProductScreenRight>
      </ProductScreenBody>
    </div>
  );
};

export default Product;

const ProductScreenBody = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ProductScreenLeft = styled.div`
  display: flex;
  flex: 0.8;
  @media (max-width: 960px) {
    flex-direction: column;
    flex: 1;
  }
`;

const LeftImage = styled.div`
  margin: 1rem;
  flex: 0.6;

  @media (max-width: 960px) {
    flex: 1;
  }
`;

const LeftInfo = styled.div`
  margin: 1rem;
  flex: 0.4;
  background: #fff;
  height: fit-content;
  font-size: 0.9rem;
  p {
    padding: 1rem;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }

  p:last-child {
    border: none;
  }

  @media (max-width: 960px) {
    flex: 1;
  }
`;
const LeftName = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`;

const RightInfo = styled.div`
  width: 250px;
  margin: 1rem;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  p {
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
  }
  p:last-child {
    border: none;
  }
  button {
    grid-column: 1/-1;
    padding: 10px 16px;
    background: #171717;
    color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
  }

  select {
    padding: 10px 16px;
  }

  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`;

const ProductScreenRight = styled.div`
  flex: 0.2;

  @media (max-width: 960px) {
    flex: 1;
    padding: 1rem;
  }
`;
