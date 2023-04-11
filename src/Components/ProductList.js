import { Pagination } from "@mui/material";
import React, { useState, useEffect } from "react";
import Product from "./Product";
const pageSize = 10;

const ProductList = (props) => {

  const data = props.products.products;
  
  
  const [pagination, setpagination] = useState({
    conut: 0,
    from: 0,
    to: pageSize,
  });


  useEffect(() => {
    if (data) {
      setpagination({ ...pagination, conut: data.length });
    }
  }, [pagination.from, pagination.to]);

  let pegiData;

  if (data) {
    pegiData = data.slice(pagination.from, pagination.to);
  }

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setpagination({ ...pagination, from: from, to: to });
  };


  const details = (id) => {
    props.detail(id);
  };

  
  return (
    <div style={{ marginBottom: "10px" }}>
      {
        <div className="d-flex justify-content-center">
          <Pagination
            count={Math.ceil(pagination.conut / pageSize)}
            onChange={handlePageChange}
          />
        </div>
      }
      {pegiData &&
        pegiData.map((data, index) => {
          return <Product product={data} key={index} details={details} />;
        })}
    </div>
  );
};

export default ProductList;
