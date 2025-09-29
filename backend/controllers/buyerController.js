// controllers/buyerController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import Buyer from "../models/Buyer.js";
import Crop from "../models/Crop.js";

const createToken = (id) => jwt.sign({ id, role: "buyer" }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const registerBuyer = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "All fields required" });

    const existing = await Buyer.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const buyer = await Buyer.create({ name, email, password: hashed });
    const token = createToken(buyer._id);
    res.json({ token, buyer });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginBuyer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const buyer = await Buyer.findOne({ email });
    if (!buyer) return res.status(400).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, buyer.password);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    const token = createToken(buyer._id);
    res.json({ token, buyer });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// list products for buyers (public)
export const listProducts = async (req, res) => {
  try {
    const crops = await Crop.find().populate("farmer", "name");
    // format to match frontend expected shape: { name, price, location, ... }
    const products = crops.map(c => ({
      _id: c._id,
      name: c.cropName,
      price: c.price,
      quantity: c.quantity,
      location: c.location || (c.farmer?.name || ""),
    }));
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
