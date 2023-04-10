import React from 'react'
import { useNavigate } from "react-router-dom";

const Product = (props) => {
    const navigate = useNavigate();
    const handlClick=(id)=>{
        props.details(id);
         navigate(`/${id}`);
    }

  return (
    <div>
        
        <section style={{backgroundColor: '#eee'}}>
  <div class="container pt-2">
    <div class="row justify-content-center">
      <div class="col-md-12 col-xl-10">
        <div class="card shadow-0 border rounded-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src={props.product.thumbnail}
                    class="w-100" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h5>{props.product.title}</h5>
                <div class="d-flex flex-row">
                  <div class="text-danger mb-1 me-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <span>{props.product.brand}</span>
                </div>
                <div class="mt-1 mb-0 text-muted small">
                <span class="text-primary"> • </span>
                  <span>{props.product.category}</span>
                  
                  <span class="text-primary"> • </span>
                  <span>{props.product.rating} Star<br /></span>
                </div>
                <div class="mb-2 text-muted small">
                <span class="text-primary"> • </span>
                  <span>Stock-{props.product.stock}</span>
                  
                </div>
                <p class="text-truncate mb-4 mb-md-0">
                {props.product.description}
                </p>
              </div>
              <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div class="d-flex flex-row align-items-center mb-1">
                  <h4 class="mb-1 me-1">{props.product.price}Rs.</h4>
                </div>
                <h6 class="text-success">Offer-{props.product.discountPercentage}%</h6>
                <div class="d-flex flex-column mt-4">
                  <button class="btn btn-primary btn-sm" type="button" onClick={()=>handlClick(props.product.id) }>Details</button>
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
  )
}

export default Product