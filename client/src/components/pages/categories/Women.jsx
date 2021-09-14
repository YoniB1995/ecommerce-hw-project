import React, { useState, useEffect } from "react";
import ProductsCard from "../../features/card/ProductsCard";
import { ProductsList } from "./Mens";
import {
  API_STORE_WOMEN,
  API_LOCAL_STORE_WOMEN,
} from "../../../service/api.service";

const Women = () => {
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    fetch(API_LOCAL_STORE_WOMEN)
      .then((response) => response.json())
      .then((result) => setWomenProducts(result));
  }, []);
  return (
    <div>
      {" "}
      <img src="images/women_clothing_logo.jpg" alt="men logo" />
      <ProductsList>
        {womenProducts.map((product, i) => (
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

export default Women;
