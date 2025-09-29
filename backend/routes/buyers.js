// routes/buyers.js
import express from "express";
import { registerBuyer, loginBuyer, listProducts } from "../controllers/buyerController.js";

const router = express.Router();

router.post("/register", registerBuyer);
router.post("/login", loginBuyer);
router.get("/products", listProducts); // GET /buyers/products

export default router;
