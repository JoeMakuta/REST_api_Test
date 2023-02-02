import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: { type: String, required: true, unique: true },
    productPrice: { type: Number, required: true },
    productDescription: { type: String, required: false },
    inStock: { type: Boolean, required: true },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "adminModel",
      required: true,
    },
  },
  { collection: "product-data" }
);

const ProductModel = mongoose.model("ProductModel", productSchema);
export default ProductModel;
