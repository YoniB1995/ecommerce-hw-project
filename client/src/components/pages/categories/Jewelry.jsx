import React, { useState, useEffect } from "react";
import ProductsCard from "../../features/card/ProductsCard";
import { ProductsList } from "./Mens";

const Jewelry = () => {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then((response) => response.json())
      .then((result) => setJewelry(result));
  }, []);
  return (
    <div>
      {" "}
      <img src="images/jewelry_logo.jpg" alt="jewelry_logo" />
      <ProductsList>
        {jewelry.map((product, i) => (
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

export default Jewelry;
