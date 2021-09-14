import React, { useState, useEffect } from "react";
import ProductsCard from "../../features/card/ProductsCard";
import { ProductsList } from "./Mens";
import { API_STORE_ELECTRONICS } from "../../../service/api.service";

const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetch(API_STORE_ELECTRONICS)
      .then((response) => response.json())
      .then((result) => setElectronics(result));
  }, []);
  return (
    <div>
      {" "}
      <img src="images/electronices_logo.png" alt="Electronics" />
      <ProductsList>
        {electronics.map((product, i) => (
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

export default Electronics;
