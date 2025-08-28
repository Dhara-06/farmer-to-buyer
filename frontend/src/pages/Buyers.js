import React from "react";

function Buyers() {
  return (
    <div>
      <h2><i className="fas fa-shopping-cart text-success"></i> Buyer Marketplace</h2>

      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="Search crops..." />
        <button className="btn btn-success">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Tomatoes</h5>
              <p className="card-text">Fresh farm tomatoes - ₹40/kg</p>
              <button className="btn btn-outline-success btn-sm">
                <i className="fas fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <h4 className="mt-4">My Cart</h4>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          Wheat - 20kg <span>₹500</span>
        </li>
      </ul>
    </div>
  );
}
export default Buyers;
