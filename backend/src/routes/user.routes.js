import Router from "express"
import registerConsumer from "../controllers/user_consumer.controller.js"

const router = Router()

router.route("/register").post(registerConsumer)

export default router