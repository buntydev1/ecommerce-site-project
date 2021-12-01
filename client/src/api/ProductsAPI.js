import { React, useState, useEffect } from "react";
// import { GlobalState } from "../../../GlobalState";
import axios from "axios";

function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res.data.products);
    // setResult(res.data.result)
  };
  useEffect(() => {
    getProducts();
  }, []);
  return {
    products: [products, setProducts],
  };
}

export default ProductsAPI;
