import ProductModel from "../../models/products/productModel.js";

const getOneProduct = (req, res) => {
  ProductModel.findById(req.params.id)
    .populate("postedBy", "_id, userName")
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: data,
        });
      } else {
        res.status(404).json({
          err: "Product does not exist",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
};

export default getOneProduct;
