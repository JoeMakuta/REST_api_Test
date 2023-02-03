import ProductModel from "../../models/products/productModel.js";

const getProducts = (req, res) => {
  ProductModel.find()
    .populate("postedBy", "_id, userName")
    .then((data) => {
      if (JSON.stringify(data) === JSON.stringify([])) {
        res.status(404).json({ message: "No products" });
      } else {
        res.status(200).json({ message: data });
      }
    })
    .catch((err) => {
      res.status(500).json({ err: err });
    });
};

export default getProducts;
