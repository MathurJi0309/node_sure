import React from "react";

const Carosals = ({ imgs }) => {
  return (
    <div class="ecommerce-gallery">
      <div class="row py-3 shadow-5">
        {imgs.map((item) => (
          <div class="col-2 mt-1 mx-auto">
            <img src={item} alt="Gallery image 1" class="active w-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosals;
