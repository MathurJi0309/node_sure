import React, { useState } from "react";
import Product from "./Product";

const ProductList = (props) => {
  const details = (id) => {
    props.detail(id);
  };
  return (
    <div >
      {props.products.products?.map((data, index) => {
        console.log(data.brand);
        return <Product product={data} key={index} details={details} />;
      })}
    </div>
  );
};

export default ProductList;
