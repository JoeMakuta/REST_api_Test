import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    passWord: { type: String, required: true },
  },
  { collection: "admin-data" }
);

export default adminModel = mongoose.Model("adminModel", adminSchema);
