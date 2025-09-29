// models/Crop.js
import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
  cropName: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer", required: false },
  location: { type: String, default: "" } // optional
}, { timestamps: true });

export default mongoose.model("Crop", cropSchema);
