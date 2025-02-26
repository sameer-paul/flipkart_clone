import { Router } from "express";
import productListing from "../controllers/product/productListing.controller.js"
import deListProduct from "../controllers/product/productDeListing.controller.js";
import verifyJWT from "../middlewares/verifyJWT.middleware.js";


const router = Router()

router.route("/create-product").post(verifyJWT,productListing)
router.route("/delete-product").post(verifyJWT,deListProduct)

export default router