import ProductModel from "../../models/products/productModel.js";

const deleteProduct = (req, res) => {
  try {
    ProductModel.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "Product not found" });
        } else {
          res.status(200).json({ message: "Product deleted." });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Could not delete the product!" });
      });
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};

export default deleteProduct;
