// services/pricingService.js
import fs from "fs";
import { parse } from "csv-parse/sync";
import axios from "axios";
import PriceRecord from "../models/PriceRecord.js";
import dotenv from "dotenv";
dotenv.config();

/**
 * Get price from CSV dataset
 */
export const getPriceFromCSV = (cropName, location) => {
  try {
    const path = process.env.PRICING_DATA_CSV || "./data/prices.csv";
    if (!fs.existsSync(path)) return null;

    const text = fs.readFileSync(path, "utf8");
    const rows = parse(text, { columns: true, skip_empty_lines: true });

    // try to find an exact match
    const exact = rows.find(
      r =>
        r.cropName?.toLowerCase() === cropName.toLowerCase() &&
        (!r.location || r.location.toLowerCase().includes(location.toLowerCase()))
    );
    if (exact) return parseFloat(exact.pricePerKg);

    // fallback → average price for that crop
    const cropRows = rows.filter(r => r.cropName?.toLowerCase() === cropName.toLowerCase());
    if (!cropRows.length) return null;

    const avg =
      cropRows.reduce((s, r) => s + parseFloat(r.pricePerKg || 0), 0) /
      cropRows.length;
    return avg;
  } catch (err) {
    console.warn("CSV pricing fetch error", err);
    return null;
  }
};

/**
 * Suggest a price for a crop in a location
 */
export function suggestPrice(cropName, location) {
  // 1. Try CSV first
  const csvPrice = getPriceFromCSV(cropName, location);
  if (csvPrice) return csvPrice;

  // 2. TODO: Add DB lookup, API fetch, or ML model logic here
  return null;
}
