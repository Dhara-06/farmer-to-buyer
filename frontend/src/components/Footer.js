import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-0">
        © {new Date().getFullYear()} SmartAgri Marketplace | Built for Farmers & Buyers
      </p>
    </footer>
  );
}
export default Footer;
