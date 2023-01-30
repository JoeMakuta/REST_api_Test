import ProductModel from "../../models/products/productModel.js";

const getOneProduct = (req, res) => {
  ProductModel.findById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

export default getOneProduct;
