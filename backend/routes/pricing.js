// routes/pricing.js
import express from "express";
import { suggestPrice } from "../services/pricingService.js";
const router = express.Router();

/**
 * POST /api/pricing/suggest
 * body: { cropName, location, quantity }
 * returns: { basePrice, suggestedPrice, method, breakdown }
 */
router.post("/suggest", async (req, res) => {
  try {
    const { cropName, location = "", quantity = 1 } = req.body;
    if (!cropName) return res.status(400).json({ message: "cropName required" });
    const result = await suggestPrice({ cropName, location, quantity });
    res.json(result);
  } catch (err) {
    console.error("pricing suggest error", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
