import { Router } from "express";
import productListing from "../controllers/product/productListing.controller.js"
import verifyJWT from "../middlewares/verifyJWT.middleware.js";


const router = Router()

router.route("/create-product").post(verifyJWT,productListing)

export default router