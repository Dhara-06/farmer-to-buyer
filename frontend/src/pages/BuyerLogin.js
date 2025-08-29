// src/pages/BuyerLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuyerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("❌ Please enter both email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (email === "buyer@test.com" && password === "1234") {
        setSuccess(true);
        setTimeout(() => {
          navigate("/buyers");
        }, 1500);
      } else {
        setError("❌ Invalid email or password.");
      }
    }, 2000);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4 fw-bold">
        <i className="fas fa-shopping-cart me-2"></i> Buyer Login
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mx-auto shadow p-4 rounded bg-light"
        style={{ maxWidth: "400px" }}
      >
        <div className="mb-3">
          <label className="form-label fw-semibold text-success">
            <i className="fas fa-envelope me-2"></i>Email:
          </label>
          <input
            type="email"
            className="form-control rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold text-success">
            <i className="fas fa-lock me-2"></i>Password:
          </label>
          <input
            type="password"
            className="form-control rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-100 py-2 rounded shadow-sm"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Logging in...
            </>
          ) : (
            <>
              <i className="fas fa-sign-in-alt me-2"></i> Login
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="alert alert-danger text-center mt-3">{error}</div>
      )}
      {success && (
        <div className="alert alert-success text-center mt-3">
          <i className="fas fa-check-circle me-2"></i> Login successful! Redirecting...
        </div>
      )}
    </div>
  );
}

export default BuyerLogin;
