import ProductModel from "../../models/products/productModel.js";

const getProducts = (req, res) => {
  ProductModel.find()
    .then((data) => {
      res.status(200).json({ message: data });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

export default getProducts;
