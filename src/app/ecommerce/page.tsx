// import { experimental_use as use } from "react-dom";

import React from "react";
async function getProduct() {
  let res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default function Page() {
  //   let products = use(getProduct());
  //   console.log(products);
  return <div>Ecommerce Page</div>;
}
