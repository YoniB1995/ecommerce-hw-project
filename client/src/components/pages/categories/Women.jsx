import React, { useState, useEffect } from "react";
import ProductsCard from "../../features/card/ProductsCard";
import { ProductsList } from "./Mens";

const Women = () => {
  const [women, setWomen] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
      .then((response) => response.json())
      .then((result) => setWomen(result));
  }, []);
  return (
    <div>
      {" "}
      <img src="images/women_clothing_logo.jpg" alt="men logo" />
      <ProductsList>
        {women.map((product, i) => (
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

export default Women;
