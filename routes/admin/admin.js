import { Router } from "express";
import admin_controller from "../../controllers/admin/admin_controller.js";

const admin_router = Router()

admin_router.get("/", admin_controller)

export default admin_router