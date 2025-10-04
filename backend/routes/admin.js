// routes/admin.js
import express from "express";
import { registerAdmin, adminLogin, listUsers, listCrops, deleteCropAdmin } from "../controllers/adminController.js";
import { verifyAdmin } from "../middleware/adminAuth.js";

const router = express.Router();

router.post("/login", adminLogin);

// protected admin routes
router.get("/users", verifyAdmin, listUsers);
router.get("/crops", verifyAdmin, listCrops);
router.delete("/crops/:id", verifyAdmin, deleteCropAdmin);
router.post("/register", registerAdmin);

export default router;
