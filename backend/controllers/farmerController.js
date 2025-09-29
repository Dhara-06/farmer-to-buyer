// controllers/farmerController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import Farmer from "../models/Farmer.js";
import Crop from "../models/Crop.js";

const createToken = (id) => jwt.sign({ id, role: "farmer" }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const registerFarmer = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "All fields required" });

    const existing = await Farmer.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const farmer = await Farmer.create({ name, email, password: hashed });
    const token = createToken(farmer._id);
    res.json({ token, farmer });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginFarmer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const farmer = await Farmer.findOne({ email });
    if (!farmer) return res.status(400).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, farmer.password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    const token = createToken(farmer._id);
    res.json({ token, farmer });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crop CRUD (authenticated farmer)
export const addCrop = async (req, res) => {
  try {
    const { cropName, quantity, price, location } = req.body;
    const farmerId = req.user.id;
    const crop = await Crop.create({ cropName, quantity, price, farmer: farmerId, location });
    res.status(201).json(crop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getFarmerCrops = async (req, res) => {
  try {
    // optional: return only crops for this farmer
    const farmerId = req.user?.id;
    if (farmerId) {
      const crops = await Crop.find({ farmer: farmerId });
      return res.json(crops);
    }
    // if no user (public), return all crops
    const crops = await Crop.find();
    res.json(crops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const farmerId = req.user.id;
    const crop = await Crop.findById(id);
    if (!crop) return res.status(404).json({ message: "Crop not found" });
    if (crop.farmer && crop.farmer.toString() !== farmerId) {
      return res.status(403).json({ message: "Not authorized to delete this crop" });
    }
    await crop.remove();
    res.json({ message: "Crop deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
