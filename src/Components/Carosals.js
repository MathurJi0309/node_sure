import React from "react";

// ........................................................code for the images ....................................................................

const Carosals = ({ imgs }) => {
  return (
    <div className="ecommerce-gallery imges">
      <div className="row py-3 shadow-5 imgp">
        {imgs.map((item) => (
          <div className="col-2 mt-1 mx-auto">
            <img src={item} alt="Gallery image 1" className="active w-100 img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosals;
