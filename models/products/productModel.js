import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    passWord: { type: String, required: true },
  },
  { collection: "product-data" }
);

const ProductModel = mongoose.model("ProductModel", productSchema);
export default ProductModel;
