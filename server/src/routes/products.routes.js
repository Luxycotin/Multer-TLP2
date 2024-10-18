import { Router } from "express";
import { createrProductControl } from "../controllers/product.controller.js";
import { uploadImage } from "../middlewares/upload.middleware.js";
import { validationsProduct } from "../validations/product.validations.js";
import { applyValidation } from "../middlewares/apply.validations.js";

const productsRouter = Router();

productsRouter.post('/', uploadImage, validationsProduct, applyValidation , createrProductControl)

export { productsRouter }