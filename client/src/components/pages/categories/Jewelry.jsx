import React, { useState, useEffect } from "react";
import ProductsCard from "../../features/card/ProductsCard";
import { ProductsList } from "./Mens";
import { API_STORE_JEWELRY } from "../../../service/api.service";

const Jewelry = () => {
  const [jewelryProducts, setJewelryProducts] = useState([]);

  useEffect(() => {
    fetch(API_STORE_JEWELRY)
      .then((response) => response.json())
      .then((result) => setJewelryProducts(result));
  }, []);
  return (
    <div>
      {" "}
      <img src="images/jewelry_logo.jpg" alt="jewelry_logo" />
      <ProductsList>
        {jewelryProducts.map((product, i) => (
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

export default Jewelry;
