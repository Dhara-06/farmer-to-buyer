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
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">🛒 Buyer Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
      {error && <div className="alert alert-danger text-center mt-3">{error}</div>}
      {success && <div className="alert alert-success text-center mt-3">✅ Login successful! Redirecting...</div>}
    </div>
  );
}

export default BuyerLogin;
