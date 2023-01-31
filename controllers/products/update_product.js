import ProductModel from "../../models/products/productModel.js";

const updateProduct = (req, res) => {
  ProductModel.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.status(200).json({ message: "Product Updated" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

export default updateProduct;
