// src/pages/Farmers.js
import React, { useState } from "react";

function Farmers() {
  const [crops, setCrops] = useState([]);
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddCrop = (e) => {
    e.preventDefault();
    if (!cropName || !quantity || !price) return;
    setCrops([...crops, { cropName, quantity, price }]);
    setCropName("");
    setQuantity("");
    setPrice("");
  };

  const handleDelete = (index) => {
    setCrops(crops.filter((_, i) => i !== index));
  };

  return (
    <div className="container my-5">
      <h2 className="text-success mb-4 fw-bold">
        <i className="fas fa-tractor me-2"></i> Farmer Dashboard
      </h2>

      <form
        onSubmit={handleAddCrop}
        className="row g-3 shadow p-4 rounded bg-light mb-5"
      >
        <div className="col-md-4">
          <label className="form-label fw-semibold text-success">
            <i className="fas fa-seedling me-2"></i> Crop Name
          </label>
          <input
            type="text"
            className="form-control rounded border-success"
            placeholder="e.g. Wheat"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold text-success">
            <i className="fas fa-weight-hanging me-2"></i> Quantity (kg)
          </label>
          <input
            type="number"
            className="form-control rounded border-success"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold text-success">
            <i className="fas fa-rupee-sign me-2"></i> Price (₹)
          </label>
          <input
            type="number"
            className="form-control rounded border-success"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="col-12 text-end">
          <button
            type="submit"
            className="btn btn-success rounded shadow-sm"
          >
            <i className="fas fa-plus-circle me-2"></i> Add Crop
          </button>
        </div>
      </form>

      <h4 className="text-success fw-semibold mb-3">My Listings</h4>
      <div className="table-responsive shadow rounded">
        <table className="table table-bordered mb-0">
          <thead className="table-success">
            <tr>
              <th>Crop</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {crops.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center">
                  No crops added yet.
                </td>
              </tr>
            )}
            {crops.map((crop, index) => (
              <tr
                key={index}
                className="align-middle"
                style={{ transition: "background-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4edda")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
              >
                <td>{crop.cropName}</td>
                <td>{crop.quantity} kg</td>
                <td>₹{crop.price}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    title="Edit"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(index)}
                    title="Delete"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Farmers;
