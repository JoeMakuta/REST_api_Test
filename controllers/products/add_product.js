import ProductModel from "../../models/products/productModel.js";

const addProduct = (req, res) => {
  ProductModel.findOne({ productName: req.body.productName }).then(
    (product) => {
      if (product) {
        console.log("Product exists");
        res.status(403).json({ message: "Product exists" });
      } else {
        console.log("Product does not exist yet");
        const admin = new ProductModel({
          productName: req.body.productName,
          productId: req.body.productId,
          productDescription: req.body.productDescription,
          inStock: req.body.inStock,
        });
        admin
          .save()
          .then(() => {
            console.log("Product saved");
            res.status(200).json({ message: "Product saved" });
          })
          .catch(() => {
            console.log("An error occured when trying to save the user");
            res.status(500).json({ message: "Error server" });
          });
      }
    }
  );
};

export default addProduct;
