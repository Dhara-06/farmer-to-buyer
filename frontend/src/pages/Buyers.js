import React, { useEffect, useState } from "react";
import API from "../api";

// ✅ Move fallbackCrops outside component so it's not re-created each render
const fallbackCrops = [
  { name: "Tomatoes", price: 40, location: "Delhi" },
  { name: "Wheat", price: 25, location: "Mumbai" },
  { name: "Rice", price: 50, location: "Bangalore" },
  { name: "Potatoes", price: 30, location: "Delhi" },
];

function Buyers() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/buyers/products");
        setProducts(data.length ? data : fallbackCrops);
      } catch (err) {
        console.error("Backend not available, using fallback crops.", err);
        setProducts(fallbackCrops);
      }
    };
    fetchProducts();
  }, []); // ✅ no warning anymore

  const handleAddToCart = (crop) => {
    const qty = quantities[crop.name] || 1;
    setCart([...cart, { ...crop, quantity: qty }]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleQuantityChange = (cropName, value) => {
    setQuantities({ ...quantities, [cropName]: value });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const filteredProducts = products.filter(
    (crop) =>
      crop.name.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || (crop.location || "").toLowerCase().includes(location.toLowerCase()))
  );

  return (
    <div className="container my-5">
      <h2 className="text-success mb-4 fw-bold">
        <i className="fas fa-shopping-cart me-2"></i> Buyer Marketplace
      </h2>

      {/* Search and Location */}
      <div className="row mb-4 g-2">
        <div className="col-12 col-md-6">
          <div className="input-group shadow-sm rounded">
            <input
              type="text"
              className="form-control rounded-start border-success"
              placeholder="Search crops..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-success rounded-end">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <input
            type="text"
            className="form-control shadow-sm border-success rounded"
            placeholder="Enter your location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      {/* Crop Cards */}
      <div className="row">
        {filteredProducts.map((crop, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
            <div
              className="card shadow-sm rounded h-100 border-success"
              style={{ transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
              }}
            >
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-success">{crop.name}</h5>
                <p className="card-text mb-2">
                  Fresh farm {crop.name.toLowerCase()} - ₹{crop.price}/kg
                </p>
                {crop.location && (
                  <p className="text-muted mb-3">
                    <i className="fas fa-map-marker-alt me-1"></i> {crop.location}
                  </p>
                )}

                <div className="input-group mb-3">
                  <span className="input-group-text bg-success text-white">kg</span>
                  <input
                    type="number"
                    className="form-control"
                    min="1"
                    value={quantities[crop.name] || 1}
                    onChange={(e) =>
                      handleQuantityChange(crop.name, parseInt(e.target.value) || 1)
                    }
                  />
                </div>

                <button
                  className="btn btn-success mt-auto rounded shadow-sm"
                  style={{ transition: "transform 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  onClick={() => handleAddToCart(crop)}
                >
                  <i className="fas fa-cart-plus me-2"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* My Cart */}
      <h4 className="text-success fw-semibold mt-5">
        My Cart <span className="badge bg-success rounded-pill">{cart.length}</span>
      </h4>
      {cart.length === 0 ? (
        <p className="text-muted">No items in cart yet.</p>
      ) : (
        <div>
          <ul className="list-group shadow-sm rounded mb-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center rounded mb-1"
                style={{
                  transition: "transform 0.2s, background-color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#d4edda";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div>
                  {item.name} - {item.quantity}kg
                </div>
                <div>
                  <span className="me-2">₹{item.price * item.quantity}</span>
                  <button
                    className="btn btn-danger btn-sm rounded-circle"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="text-success">Total: ₹{totalPrice}</h5>
            <button className="btn btn-success rounded shadow-sm">
              <i className="fas fa-check me-2"></i> Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buyers;
