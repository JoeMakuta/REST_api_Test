import ProductModel from "../../models/products/productModel.js";

const getInStockProducts = (req, res) => {
  ProductModel.find({ inStock: true })
    .populate("postedBy", "_id, userName")
    .then((data) => {
      res.status(200).json({ inStockProducts: data });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

export default getInStockProducts;
