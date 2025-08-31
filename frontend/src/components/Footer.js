import React, { useEffect } from "react";
import "./Footer.css";

function Footer() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map((tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl));
  }, []);

  return (
    <footer className="bg-transparent text-dark text-center py-4 mt-5">
      <div className="container">
        <div className="mb-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
            style={{ color: "#1877F2" }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Facebook"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
            style={{ color: "#1DA1F2" }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Twitter"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
            style={{ color: "#E4405F" }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Instagram"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon mx-2"
            style={{ color: "#0A66C2" }}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="LinkedIn"
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
