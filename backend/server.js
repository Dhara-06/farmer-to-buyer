// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import farmersRoutes from "./routes/farmers.js";
import buyersRoutes from "./routes/buyers.js";
import adminRoutes from "./routes/admin.js";
import seedAdmin from "./utils/seedAdmin.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// API prefix consistent with your frontend's baseURL
app.use("/api/farmers", farmersRoutes);
app.use("/api/buyers", buyersRoutes);
app.use("/api/admin", adminRoutes);

// health
app.get("/api", (req, res) => res.send("SmartAgri API is running"));

// seed admin then start
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  try {
    await seedAdmin();
  } catch (err) {
    console.error("Error seeding admin:", err);
  }
});
