import React from "react";

function Farmers() {
  return (
    <div>
      <h2><i className="fas fa-tractor text-success"></i> Farmer Dashboard</h2>
      <form className="row g-3 mt-3">
        <div className="col-md-4">
          <label className="form-label">Crop Name</label>
          <input type="text" className="form-control" placeholder="e.g. Wheat" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Quantity (kg)</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Price (₹)</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-12">
          <button className="btn btn-success">
            <i className="fas fa-plus-circle"></i> Add Crop
          </button>
        </div>
      </form>

      <h4 className="mt-5">My Listings</h4>
      <table className="table table-bordered">
        <thead className="table-success">
          <tr>
            <th>Crop</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wheat</td>
            <td>50kg</td>
            <td>₹1200</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">
                <i className="fas fa-edit"></i>
              </button>
              <button className="btn btn-danger btn-sm">
                <i className="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Farmers;
