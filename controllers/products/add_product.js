import ProductModel from "../../models/products/productModel.js";

const addProduct = (req, res) => {
  const { productName, productPrice, productDescription, inStock } = req.body;
  
  ProductModel.findOne({ productName: req.body.productName }).then(
    (product) => {
      if (product) {
        console.log("Product exists");
        res.status(403).json({ message: "Product exists" });
      } else {
        console.log("Product does not exist yet");
        const admin = new ProductModel({
          productName: productName,
          productPrice: productPrice,
          productDescription: productDescription,
          inStock: inStock,
        });
        admin
          .save()
          .then((product) => {
            console.log("Product saved");
            res.status(200).json({ message: "Product saved", data: product });
          })
          .catch((err) => {
            console.log("An error occured when trying to save the product");
            res.status(500).json({ message: err });
          });
      }
    }
  );
};

export default addProduct;
