import { Router } from "express";
import addProduct from "../../controllers/products/add_product.js";
import deleteProduct from "../../controllers/products/delete_product.js";
import getInStockProducts from "../../controllers/products/get_inStock_products.js";
import getOneProduct from "../../controllers/products/get_one_product.js";
import getProducts from "../../controllers/products/get_products.js";
import product_controller from "../../controllers/products/product_controller.js";
import updateProduct from "../../controllers/products/update_product.js";

const product_router = Router();

product_router.get("/", product_controller);
product_router.get("/get", getProducts);
product_router.get("/getInStock", getInStockProducts);
product_router.get("/getOne/:id", getOneProduct);

product_router.post("/add", addProduct);

product_router.put("/update/:id", updateProduct);

product_router.delete("/delete/:id", deleteProduct);

export default product_router;
