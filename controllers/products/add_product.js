import ProductModel from "../../models/products/productModel.js";

const addProduct = (req, res) => {
  ProductModel.findOne({ productName: req.body.productName }).then(
    (product) => {
      if (product) {
        console.log("Product exists");
        res.status(403).json({ message: "Product exists" });
      } else {
        console.log("Product does not exist yet");

        const Product = new ProductModel(req.body);

        Product.save()
          .then((product) => {
            console.log("Product saved");
            res.status(200).json({ message: "Product saved" });
          })
          .catch((err) => {
            console.log("An error occured when trying to save the product");
            res
              .status(500)
              .json({ message: "Could not save the data", err: err });
          });
      }
    }
  );
};

export default addProduct;
