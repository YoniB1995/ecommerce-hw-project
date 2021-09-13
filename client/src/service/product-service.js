export const API =
  process.env.NODE_ENV === "production"
    ? `https://milk-n-honey-store-app.herokuapp.com`
    : "http://localhost:5000";

    
export const getAllProducts = async () => {

  //   const config = {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // };
    try {
        const data = await fetch('http://localhost:5000/products')
        .then((response) => response.json())
        .then(products=> products)
return data;

    } catch (error) {
      console.log(error);
    }

  };