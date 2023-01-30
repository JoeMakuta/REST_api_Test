import { Router } from "express";
import addProduct from "../../controllers/products/add_product.js";
import getOneProduct from "../../controllers/products/get_one_product.js";
import getProducts from "../../controllers/products/get_products.js";
import product_controller from "../../controllers/products/product_controller.js";

const product_router = Router();

product_router.get("/", product_controller);
product_router.post("/add", addProduct);
product_router.get("/get", getProducts);
product_router.get("/getOne/:id", getOneProduct);

export default product_router;
