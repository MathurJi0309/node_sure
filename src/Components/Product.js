import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();


  const handlClick = (id) => {
    props.details(id);
    navigate(`/${id}`);
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container pt-2">
          <div className="row justify-content-center">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                        <img src={props.product.thumbnail} className="w-100" />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(253, 253, 253, 0.15)",
                              }}
                            ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6">
                      <h5>{props.product.title}</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <span>{props.product.brand}</span>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span className="text-primary"> • </span>
                        <span>{props.product.category}</span>

                        <span className="text-primary"> • </span>
                        <span>
                          {props.product.rating} Star
                          <br />
                        </span>
                      </div>
                      <div className="mb-2 text-muted small">
                        <span className="text-primary"> • </span>
                        <span>Stock-{props.product.stock}</span>
                      </div>
                      <p className="text-truncate mb-4 mb-md-0">
                        {props.product.description}
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">{props.product.price}Rs.</h4>
                      </div>
                      <h6 className="text-success">
                        Offer-{props.product.discountPercentage}%
                      </h6>
                      <div className="d-flex flex-column mt-4">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                          onClick={() => handlClick(props.product.id)}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
