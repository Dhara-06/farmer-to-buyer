import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function AdminRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name || !email || !password) {
      setError("❌ All fields are required.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/admin/register", { 
        name, 
        email, 
        password 
      });
      setSuccess(true);

      setTimeout(() => {
        navigate("/admin/login");
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "❌ Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4 fw-bold">
        <i className="fas fa-user-shield me-2"></i> Admin Register
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mx-auto shadow p-4 rounded bg-light"
        style={{ maxWidth: "400px" }}
      >
        <div className="mb-3">
          <label className="form-label fw-semibold text-success">
            <i className="fas fa-user me-2"></i>Name:
          </label>
          <input
            type="text"
            className="form-control rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold text-success">
            <i className="fas fa-envelope me-2"></i>Email:
          </label>
          <input
            type="email"
            className="form-control rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your admin email"
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
              Registering...
            </>
          ) : (
            <>
              <i className="fas fa-user-plus me-2"></i> Register
            </>
          )}
        </button>
        <div className="text-center mt-3">
          <small>
            Already have an account?{" "}
            <Link to="/admin/login" className="text-success fw-bold">
              <i className="fas fa-sign-in-alt me-1"></i> Login here
            </Link>
          </small>
        </div>
      </form>

      {error && (
        <div className="alert alert-danger text-center mt-3">{error}</div>
      )}
      {success && (
        <div className="alert alert-success text-center mt-3">
          <i className="fas fa-check-circle me-2"></i> Registration successful! Redirecting...
        </div>
      )}
      
    </div>
  );
}

export default AdminRegister;