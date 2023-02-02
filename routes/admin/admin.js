import { Router } from "express";
import admin_controller from "../../controllers/admin/admin_controller.js";
import getAdmin from "../../controllers/admin/get_admin.js";
import login from "../../controllers/admin/login.js";
import signUp from "../../controllers/admin/signup.js";
import verifyToken from "../../validation/verify_token.js";

const admin_router = Router();

admin_router.get("/", admin_controller);
admin_router.get("/get", verifyToken, getAdmin);
admin_router.post("/signup", signUp);
admin_router.post("/login", login);

export default admin_router;
