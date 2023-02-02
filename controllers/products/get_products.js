import ProductModel from "../../models/products/productModel.js";

const getProducts = (req, res) => {
  ProductModel.find()
    .populate("postedBy")
    .then((data) => {
      res.status(200).json({ message: data });
    })
    .catch((err) => {
      res.status(500).json({ err: err });
    });
};

export default getProducts;
