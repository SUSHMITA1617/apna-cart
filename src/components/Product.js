import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge text-bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3"> {/* Fixed typo here */}
        <div
          className="btn-group" // Fixed typo here
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger">
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index); // Ensure index is passed correctly
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
