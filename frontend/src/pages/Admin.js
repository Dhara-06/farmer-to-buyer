import React from "react";

function Admin() {
  return (
    <div>
      <h2><i className="fas fa-user-shield text-success"></i> Admin Dashboard</h2>

      <h4 className="mt-4"><i className="fas fa-users"></i> Manage Users</h4>
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Role</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>Ravi</td><td>Farmer</td><td><button className="btn btn-danger btn-sm">Remove</button></td></tr>
        </tbody>
      </table>

      <h4 className="mt-4"><i className="fas fa-seedling"></i> Manage Crops</h4>
      <table className="table table-striped">
        <thead>
          <tr><th>Crop</th><th>Qty</th><th>Price</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>Rice</td><td>100kg</td><td>₹3000</td><td><button className="btn btn-danger btn-sm">Delete</button></td></tr>
        </tbody>
      </table>
    </div>
  );
}
export default Admin;
