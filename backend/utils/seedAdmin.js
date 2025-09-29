// utils/seedAdmin.js
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

const seedAdmin = async () => {
  const existing = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
  if (existing) return;
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD || "1234", salt);
  await Admin.create({ email: process.env.ADMIN_EMAIL, password: hashed, name: "Super Admin" });
  console.log("✅ Admin seeded");
};

export default seedAdmin;
