import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function FarmerRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !password) {
            setError("❌ All fields are required.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            if (email.includes("@")) {
                setSuccess(true);
                setTimeout(() => {
                    navigate("/farmers");
                }, 1500);
            } else {
                setError("❌ Please enter a valid email.");
            }
        }, 2000);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center text-success mb-4">👨‍🌾 Farmer Register</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto shadow p-4 rounded bg-light">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
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
                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                    {loading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Registering...
                        </>
                    ) : (
                        "Register"
                    )}
                </button>
                <div>
                    <small>
                        Already have an account?{" "}
                        <Link to="/farmer/login" className="text-success fw-bold">
                            Login here
                        </Link>
                    </small>
                </div>
            </form>
            {error && <div className="alert alert-danger text-center mt-3">{error}</div>}
            {success && <div className="alert alert-success text-center mt-3">✅ Registration successful! Redirecting...</div>}
        </div>
    );
}

export default FarmerRegister;
