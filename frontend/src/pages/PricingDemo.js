// src/pages/PricingDemo.js
import React, { useState } from "react";
import { suggestPrice } from "../api";

function PricingDemo() {
  const [cropName, setCropName] = useState("");
  const [location, setLocation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSuggest = async () => {
    setLoading(true);
    try {
      const data = await suggestPrice(cropName, location, quantity);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch suggestion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4 bg-light rounded shadow">
      <h2 className="text-success fw-bold">Smart Pricing Suggestion</h2>

      <div className="mb-3">
        <label className="form-label">Crop Name</label>
        <input
          type="text"
          className="form-control"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          placeholder="e.g., Tomato"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Location</label>
        <input
          type="text"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., Tamil Nadu"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Quantity (kg)</label>
        <input
          type="number"
          className="form-control"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <button
        className="btn btn-success"
        onClick={handleSuggest}
        disabled={loading}
      >
        {loading ? "Fetching..." : "Suggest Price"}
      </button>

      {result && (
        <div className="mt-4 p-3 bg-white rounded shadow-sm">
          <h5>Suggested Price Details</h5>
          <p><strong>Base Price:</strong> ₹{result.basePrice}</p>
          <p><strong>Suggested Price:</strong> ₹{result.suggestedPrice}</p>
          <p><strong>Method:</strong> {result.method}</p>
          {result.breakdown && (
            <pre className="bg-light p-2 rounded">
              {JSON.stringify(result.breakdown, null, 2)}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

export default PricingDemo;
