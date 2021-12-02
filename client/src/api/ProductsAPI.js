import { useState } from "react";
// import { GlobalState } from "../../../GlobalState";

function ProductsAPI() {
  const [products, setProducts] = useState([]);

  return {
    products: [products, setProducts],
  };
}

export default ProductsAPI;
