import { Router } from "express";
import product_controller from "../../controllers/products/product_controller.js";

const product_router = Router();

product_router.get("/", product_controller);

export default product_router;
