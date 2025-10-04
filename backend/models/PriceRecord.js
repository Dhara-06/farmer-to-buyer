// models/PriceRecord.js
import mongoose from "mongoose";

const priceRecordSchema = new mongoose.Schema({
  cropName: { type: String, required: true, index: true },
  location: { type: String, default: "" },
  date: { type: Date, default: Date.now },
  pricePerKg: { type: Number, required: true }, // base price in ₹/kg
  source: { type: String, default: "manual" }, // e.g. "gov_api", "agmarknet", "seeded_csv"
}, { timestamps: true });

export default mongoose.model("PriceRecord", priceRecordSchema);
