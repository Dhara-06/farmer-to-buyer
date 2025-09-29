// routes/farmers.js
import express from "express";
import { registerFarmer, loginFarmer, addCrop, getFarmerCrops, deleteCrop } from "../controllers/farmerController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerFarmer);
router.post("/login", loginFarmer);

// protected crop routes
router.post("/crops", verifyToken, addCrop);
router.get("/crops", verifyToken, getFarmerCrops); // your frontend calls GET /farmers/crops
router.delete("/crops/:id", verifyToken, deleteCrop);

export default router;
