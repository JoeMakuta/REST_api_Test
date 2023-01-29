import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: { type: String, required: true },
    productId: { type: String, required: true },
    productDescription: { type: String, required: false },
    inStock: { type: Boolean, required: true },
  },
  { collection: "product-data" }
);

const ProductModel = mongoose.model("ProductModel", productSchema);
export default ProductModel;
