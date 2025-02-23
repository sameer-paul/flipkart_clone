import { Router } from "express";
import {readSellerInfo,updateSellerInfo,deleteSellerInfo} from "../../controllers/seller/sellerProfile.controller.js"
import { createStore, deleteStore, getStoreCategory} from "../../controllers/seller/storeInfo.controller.js";
import verifyJWT from "../../middlewares/verifyJWT.middleware.js";

const router = Router()

// seller details related routes
router.route("/readSellerInfo").get(verifyJWT,readSellerInfo)
router.route("/updateSellerinfo").post(verifyJWT,updateSellerInfo)
router.route("/deleteSellerInfo").post(verifyJWT,deleteSellerInfo)


// seller category related routes
router.route("/readCategory").post(verifyJWT,getStoreCategory)
router.route("/createCategory").post(verifyJWT,createStore)
router.route("/deleteCategory").get(verifyJWT,deleteStore)

export default router