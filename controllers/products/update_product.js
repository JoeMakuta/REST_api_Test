import ProductModel from "../../models/products/productModel.js";

const updateProduct = (req, res) => {
  ProductModel.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.status(200).json({ UpDatedProduct: data });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

export default updateProduct;
