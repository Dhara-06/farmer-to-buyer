import React, { useEffect, useState } from "react";
import API from "../api";

function Farmers() {
  const [crops, setCrops] = useState([]);
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  // Fetch crops from backend if available
  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const { data } = await API.get("/farmers/crops");
        setCrops(data);
      } catch (err) {
        console.error("Backend not available, using local state.", err);
        setCrops([]);
      }
    };
    fetchCrops();
  }, []);

  // Add new crop
  const handleAddCrop = async (e) => {
    e.preventDefault();
    if (!cropName || !quantity || !price) return;

    try {
      const { data } = await API.post("/farmers/crops", { cropName, quantity, price });
      setCrops([...crops, data]);
    } catch (err) {
      console.warn("Backend not available, adding locally.", err);
      // fallback to local state
      setCrops([...crops, { _id: Date.now(), cropName, quantity, price }]);
    }

    setCropName("");
    setQuantity("");
    setPrice("");
  };

  // Delete crop
  const handleDelete = async (id) => {
    try {
      await API.delete(`/farmers/crops/${id}`);
      setCrops(crops.filter(c => c._id !== id));
    } catch (err) {
      console.warn("Backend not available, deleting locally.", err);
      setCrops(crops.filter(c => c._id !== id));
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-success mb-4 fw-bold">
        <i className="fas fa-tractor me-2"></i> Farmer Dashboard
      </h2>

      {/* Add Crop Form */}
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
          <button type="submit" className="btn btn-success rounded shadow-sm">
            <i className="fas fa-plus-circle me-2"></i> Add Crop
          </button>
        </div>
      </form>

      {/* Crops Table */}
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
            {crops.map((crop) => (
              <tr
                key={crop._id}
                className="align-middle"
                style={{ transition: "background-color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4edda")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
              >
                <td>{crop.cropName}</td>
                <td>{crop.quantity} kg</td>
                <td>₹{crop.price}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" title="Edit">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(crop._id)}
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
