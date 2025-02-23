import { Router } from "express";
import {readSellerInfo,updateSellerInfo} from "../../controllers/seller/sellerProfile.controller.js"
import verifyJWT from "../../middlewares/verifyJWT.middleware.js";

const router = Router()

router.route("/readSellerInfo").get(verifyJWT,readSellerInfo)
router.route("/updateSellerinfo").post(verifyJWT,updateSellerInfo)
// router.route("/deleteSellerInfo").post(verifyJWT,deleteSellerInfo)

export default router