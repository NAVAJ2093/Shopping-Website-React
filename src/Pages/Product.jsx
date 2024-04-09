import React from "react";
import { useSelector } from "react-redux";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.shop.all_product); // Access products using state.shop.all_product
  const parsedProductId = parseInt(productId);
  const product = products.find((product) => product.id === parsedProductId);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      <ProductDisplay product={product} isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Product;
