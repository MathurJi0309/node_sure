import React from "react";
const Productdetail = ({ product }) => {
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 w-0.50 h-0.75">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div
                  className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={product.thumbnail}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    className="img-fluid"
                    alt="Laptop"
                  />
                  <a href="#!">
                    <div className="mask"></div>
                  </a>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>
                        <a href="#!" className="text-dark">
                          {product.title}
                        </a>
                      </p>
                      <p className="small text-muted">{product.category}</p>
                    </div>
                    <div>
                      <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="small text-muted">Rated {product.rating}/5</p>
                    </div>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="card-body pb-0">
                  <div className="d-flex justify-content-between">
                    <p>
                      <a href="#!" className="text-dark">
                        {product.price} Rs.
                      </a>
                    </p>
                    <p className="text-dark">Stock left-{product.stock}</p>
                  </div>
                  <p className="small text-muted">
                    Discount-{product.discountPercentage}%
                  </p>
                  <p className="small text-muted">
                    Description-{product.description}%
                  </p>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                    <a href="#!" className="text-dark fw-bold">
                      Cancel
                    </a>
                    <button type="button" className="btn btn-primary">
                      Buy now
                    </button>
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

export default Productdetail;
