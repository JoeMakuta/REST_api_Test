import ProductModel from "../../models/products/productModel.js";

const deleteProduct = (req, res) => {
  ProductModel.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "Product deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not delete the product!" });
    });
};

export default deleteProduct;
