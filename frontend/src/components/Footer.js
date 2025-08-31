import React from "react";

function Footer() {
  return (
    <footer className="bg-transparent text-dark text-center py-4 mt-5">
      <div className="container">
        {/* Social Media Links */}
        <div className="mb-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            style={{ color: "#1877F2" }} // Facebook Blue
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            style={{ color: "#1DA1F2" }} // Twitter Blue
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            style={{ color: "#E4405F" }} // Instagram Pinkish
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            style={{ color: "#0A66C2" }} // LinkedIn Blue
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0 fw-bold">
          © {new Date().getFullYear()} SmartAgri Marketplace | Built for Farmers & Buyers
        </p>
      </div>
    </footer>
  );
}

export default Footer;
