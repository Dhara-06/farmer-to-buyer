// controllers/adminController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import Admin from "../models/Admin.js";
import Buyer from "../models/Buyer.js";
import Farmer from "../models/Farmer.js";
import Crop from "../models/Crop.js";

const createToken = (id) => jwt.sign({ id, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, admin.password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    const token = createToken(admin._id);
    res.json({ token, admin });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Manage users (buyers + farmers)
export const listUsers = async (req, res) => {
  try {
    const buyers = await Buyer.find().select("-password");
    const farmers = await Farmer.find().select("-password");
    res.json({ buyers, farmers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin crop management
export const listCrops = async (req, res) => {
  try {
    const crops = await Crop.find().populate("farmer", "name");
    res.json(crops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCropAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const crop = await Crop.findById(id);
    if (!crop) return res.status(404).json({ message: "Crop not found" });
    await crop.remove();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
