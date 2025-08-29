// src/pages/Admin.js
import React, { useState } from "react";

function Admin() {
  // Users and Crops data
  const [users, setUsers] = useState([
    { id: 1, name: "Ravi", role: "Farmer", isEditing: false },
    { id: 2, name: "Anita", role: "Buyer", isEditing: false },
  ]);

  const [crops, setCrops] = useState([
    { id: 1, name: "Rice", quantity: 100, price: 3000, isEditing: false },
    { id: 2, name: "Wheat", quantity: 50, price: 1200, isEditing: false },
  ]);

  // Add New User
  const [newUser, setNewUser] = useState({ name: "", role: "Farmer" });
  const [userSearch, setUserSearch] = useState("");

  // Add New Crop
  const [newCrop, setNewCrop] = useState({ name: "", quantity: "", price: "" });
  const [cropSearch, setCropSearch] = useState("");

  // --- Users Handlers ---
  const handleEditUser = (id) => setUsers(users.map(u => (u.id === id ? { ...u, isEditing: true } : u)));
  const handleSaveUser = (id) => setUsers(users.map(u => (u.id === id ? { ...u, isEditing: false } : u)));
  const handleUserChange = (id, field, value) => setUsers(users.map(u => (u.id === id ? { ...u, [field]: value } : u)));
  const handleRemoveUser = (id) => setUsers(users.filter(u => u.id !== id));
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name) return;
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id, ...newUser, isEditing: false }]);
    setNewUser({ name: "", role: "Farmer" });
  };

  // --- Crops Handlers ---
  const handleEditCrop = (id) => setCrops(crops.map(c => (c.id === id ? { ...c, isEditing: true } : c)));
  const handleSaveCrop = (id) => setCrops(crops.map(c => (c.id === id ? { ...c, isEditing: false } : c)));
  const handleCropChange = (id, field, value) => setCrops(crops.map(c => (c.id === id ? { ...c, [field]: value } : c)));
  const handleRemoveCrop = (id) => setCrops(crops.filter(c => c.id !== id));
  const handleAddCrop = (e) => {
    e.preventDefault();
    if (!newCrop.name || !newCrop.quantity || !newCrop.price) return;
    const id = crops.length ? crops[crops.length - 1].id + 1 : 1;
    setCrops([...crops, { id, ...newCrop, isEditing: false }]);
    setNewCrop({ name: "", quantity: "", price: "" });
  };

  // --- Filtering Users and Crops ---
  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.role.toLowerCase().includes(userSearch.toLowerCase())
  );

  const filteredCrops = crops.filter(c =>
    c.name.toLowerCase().includes(cropSearch.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center text-success fw-bold">
        <i className="fas fa-user-shield me-2"></i> Admin Dashboard
      </h2>

      {/* Manage Users */}
      <h4 className="mt-4 text-success">
        <i className="fas fa-users me-2"></i> Manage Users
      </h4>

      {/* Search Users */}
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search users..."
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value)}
      />

      {/* Add User Form */}
      <form className="row g-2 mb-3" onSubmit={handleAddUser}>
        <div className="col-12 col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <div className="col-12 col-md-5">
          <select
            className="form-select"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="Farmer">Farmer</option>
            <option value="Buyer">Buyer</option>
          </select>
        </div>
        <div className="col-12 col-md-2">
          <button className="btn btn-success w-100" type="submit">
            <i className="fas fa-user-plus me-1"></i> Add
          </button>
        </div>
      </form>

      <div className="table-responsive shadow-sm rounded mb-4">
        <table className="table table-striped table-bordered align-middle mb-0">
          <thead className="table-success">
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(u => (
              <tr key={u.id}>
                <td>{u.isEditing ? <input className="form-control" value={u.name} onChange={(e) => handleUserChange(u.id, "name", e.target.value)} /> : u.name}</td>
                <td>{u.isEditing ? <select className="form-select" value={u.role} onChange={(e) => handleUserChange(u.id, "role", e.target.value)}><option>Farmer</option><option>Buyer</option></select> : u.role}</td>
                <td className="text-center">
                  {u.isEditing ? (
                    <button className="btn btn-success btn-sm me-2" onClick={() => handleSaveUser(u.id)}>
                      <i className="fas fa-check me-1"></i> Save
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditUser(u.id)}>
                      <i className="fas fa-edit me-1"></i> Edit
                    </button>
                  )}
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemoveUser(u.id)}>
                    <i className="fas fa-trash-alt me-1"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Manage Crops */}
      <h4 className="mt-5 text-success">
        <i className="fas fa-seedling me-2"></i> Manage Crops
      </h4>

      {/* Search Crops */}
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Search crops..."
        value={cropSearch}
        onChange={(e) => setCropSearch(e.target.value)}
      />

      {/* Add Crop Form */}
      <form className="row g-2 mb-3" onSubmit={handleAddCrop}>
        <div className="col-12 col-md-4">
          <input type="text" className="form-control" placeholder="Crop Name" value={newCrop.name} onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })} />
        </div>
        <div className="col-12 col-md-4">
          <input type="number" className="form-control" placeholder="Quantity" value={newCrop.quantity} onChange={(e) => setNewCrop({ ...newCrop, quantity: e.target.value })} />
        </div>
        <div className="col-12 col-md-3">
          <input type="number" className="form-control" placeholder="Price" value={newCrop.price} onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })} />
        </div>
        <div className="col-12 col-md-1">
          <button className="btn btn-success w-100" type="submit">
            <i className="fas fa-plus-circle me-1"></i> Add
          </button>
        </div>
      </form>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-bordered align-middle mb-0">
          <thead className="table-success">
            <tr>
              <th>Crop</th>
              <th>Quantity</th>
              <th>Price</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCrops.map(c => (
              <tr key={c.id}>
                <td>{c.isEditing ? <input className="form-control" value={c.name} onChange={(e) => handleCropChange(c.id, "name", e.target.value)} /> : c.name}</td>
                <td>{c.isEditing ? <input className="form-control" type="number" value={c.quantity} onChange={(e) => handleCropChange(c.id, "quantity", e.target.value)} /> : c.quantity}</td>
                <td>{c.isEditing ? <input className="form-control" type="number" value={c.price} onChange={(e) => handleCropChange(c.id, "price", e.target.value)} /> : c.price}</td>
                <td className="text-center">
                  {c.isEditing ? (
                    <button className="btn btn-success btn-sm me-2" onClick={() => handleSaveCrop(c.id)}>
                      <i className="fas fa-check me-1"></i> Save
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditCrop(c.id)}>
                      <i className="fas fa-edit me-1"></i> Edit
                    </button>
                  )}
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemoveCrop(c.id)}>
                    <i className="fas fa-trash-alt me-1"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
