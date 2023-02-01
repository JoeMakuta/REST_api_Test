import { Router } from "express";
import admin_controller from "../../controllers/admin/admin_controller.js";
import login from "../../controllers/admin/login.js";
import signUp from "../../controllers/admin/signup.js";

const admin_router = Router();

admin_router.get("/", admin_controller);
admin_router.post("/signup", signUp);
admin_router.post("/login", login);

export default admin_router;
