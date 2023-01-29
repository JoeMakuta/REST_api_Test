import { Router } from "express";
import addProduct from "../../controllers/products/add_product.js";
import product_controller from "../../controllers/products/product_controller.js";

const product_router = Router();

product_router.get("/", product_controller);
product_router.post("/add", addProduct);

export default product_router;
