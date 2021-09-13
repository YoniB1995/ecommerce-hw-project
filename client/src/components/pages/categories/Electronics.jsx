import React, { useState, useEffect } from "react";
import ProductsCard from "../../features/card/ProductsCard";
import { ProductsList } from "./Mens";

const Electronics = () => {
  const [electronices, setElectronices] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then((response) => response.json())
      .then((result) => setElectronices(result));
  }, []);
  return (
    <div>
      {" "}
      <img src="images/electronices_logo.png" alt="Electronics" />
      <ProductsList>
        {electronices.map((product, i) => (
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

export default Electronics;
