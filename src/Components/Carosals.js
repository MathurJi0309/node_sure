import React from "react";

const Carosals = ({ imgs }) => {
  return (
    <div className="ecommerce-gallery">
      <div className="row py-3 shadow-5">
        {imgs.map((item) => (
          <div className="col-2 mt-1 mx-auto">
            <img src={item} alt="Gallery image 1" className="active w-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosals;
