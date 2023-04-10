import React, { useState } from "react";
import Product from "./Product";

const pageSize=6

const ProductList = (props) => {
  const details = (id) => {
    props.detail(id);
  };
  return (
    <div>
      {props.products.products?.map((data, index) => {
        console.log(data.brand);
        return <Product product={data} key={index} details={details} />;
      })}
                {pagi && <div className="d-flex justify-content-center">
            <Pagination
            count={Math.ceil(pagination.conut/pageSize)}
            onChange={handlePageChange}/>
          </div>}
    </div>
  );
};

export default ProductList;
