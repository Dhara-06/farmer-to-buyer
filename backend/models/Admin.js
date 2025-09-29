// models/Admin.js
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, default: "Admin" }
}, { timestamps: true });

export default mongoose.model("Admin", adminSchema);
