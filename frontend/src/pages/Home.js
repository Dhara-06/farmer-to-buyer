import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/farm-bg.jpg')", // make sure farm-bg.jpg is in public/images/
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <div className="text-center bg-light bg-opacity-75 p-5 rounded m-3">
        <h1 className="fw-bold">
          <i className="fas fa-leaf text-success"></i> Welcome to SmartAgri
          Marketplace
        </h1>
        <p className="lead">Connecting Farmers and Buyers Directly</p>
        <div className="mt-3">
          <Link className="btn btn-success m-2" to="/farmer/register">
            👨‍🌾 Join as Farmer
          </Link>
          <Link className="btn btn-outline-success m-2" to="/buyer/register">
            🛒 Browse as Buyer
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center mt-5 m-0">
        <div className="col-12 col-md-4 mb-4">
          <i className="fas fa-hand-holding-usd fa-3x text-success"></i>
          <h4 className="mt-2">Fair Prices</h4>
          <p>Farmers get direct payments, no middlemen.</p>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <i className="fas fa-shipping-fast fa-3x text-success"></i>
          <h4 className="mt-2">Fast Delivery</h4>
          <p>Buyers get fresh produce quickly and reliably.</p>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <i className="fas fa-language fa-3x text-success"></i>
          <h4 className="mt-2">Local Language</h4>
          <p>Easy to use for all farmers in local language.</p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mt-5 p-4 bg-light rounded shadow">
        <h2 className="text-center text-success fw-bold">About Us</h2>
        <p className="mt-3 text-center">
          SmartAgri Marketplace is a new platform built to connect farmers
          directly with buyers. Our goal is simple: to make the food supply
          chain fair and fresh. We cut out the middlemen, so farmers get the
          payment they deserve and buyers get produce straight from the source.
          We are a small team committed to empowering local farmers and
          providing a simple, smart, and secure way for everyone to enjoy fresh,
          local food.
        </p>
      </div>

      {/* Blog Preview Section */}
      <div className="container mt-5 p-4">
        <h2 className="text-center text-success fw-bold">Latest Blogs</h2>
        <div className="row mt-4">
          {/* Blog 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={require("../assets/blog1.jpg")}
                className="card-img-top"
                alt="Blog 1"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Organic Farming Trends</h5>
                <p className="card-text flex-grow-1">
                  Learn how organic farming is changing the agricultural
                  landscape.
                </p>
                <Link to="/blog" className="btn btn-outline-success btn-sm mt-auto">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={require("../assets/blog2.jpg")}
                className="card-img-top"
                alt="Blog 2"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Farm to Table</h5>
                <p className="card-text flex-grow-1">
                  Discover how direct farmer-to-buyer connections improve food
                  quality.
                </p>
                <Link to="/blog" className="btn btn-outline-success btn-sm mt-auto">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow h-100">
              <img
                src={require("../assets/blog3.jpg")}
                className="card-img-top"
                alt="Blog 3"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Smart Agriculture Tools</h5>
                <p className="card-text flex-grow-1">
                  Explore modern tools that are making farming easier and
                  smarter.
                </p>
                <Link to="/blog" className="btn btn-outline-success btn-sm mt-auto">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
