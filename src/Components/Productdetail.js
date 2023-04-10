import React from "react";
import Carosal from "./Carosals";
const Productdetail = ({ product }) => {
  return (
    <div>
      <Carosal imgs={product.images} className="h-0.75 w-0.25" />
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container py-5 w-0.50 h-0.75">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4">
              <div class="card" style={{ borderRadius: "15px" }}>
                <div
                  class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={product.thumbnail}
                    style={{
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                    }}
                    class="img-fluid"
                    alt="Laptop"
                  />
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between">
                    <div>
                      <p>
                        <a href="#!" class="text-dark">
                          {product.title}
                        </a>
                      </p>
                      <p class="small text-muted">{product.category}</p>
                    </div>
                    <div>
                      <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <p class="small text-muted">Rated {product.rating}/5</p>
                    </div>
                  </div>
                </div>
                <hr class="my-0" />
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between">
                    <p>
                      <a href="#!" class="text-dark">
                        {product.price} Rs.
                      </a>
                    </p>
                    <p class="text-dark">Stock left-{product.stock}</p>
                  </div>
                  <p class="small text-muted">
                    Discount-{product.discountPercentage}%
                  </p>
                  <p class="small text-muted">
                    Description-{product.description}%
                  </p>
                </div>
                <hr class="my-0" />
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
                    <a href="#!" class="text-dark fw-bold">
                      Cancel
                    </a>
                    <button type="button" class="btn btn-primary">
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