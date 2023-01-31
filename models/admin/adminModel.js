import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    passWord: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { collection: "admin-data" }
);

const AdminModel = mongoose.model("adminModel", adminSchema);
export default AdminModel;
