import Router from "express"
import signupVerification from "../controllers/signupVerification.controller.js"
import signupConsumer from "../controllers/signupConsumer.controller.js"
import loginVerification from "../controllers/loginVerification.controller.js"
import loginConsumer from "../controllers/loginConsumer.controller.js"
import verifyJWT from "../middlewares/auth.middleware.js"
import logoutConsumer from "../controllers/logoutConsumer.controller.js"
import refreshAccessToken from "../controllers/refreshAccessToken.controller.js"

const router = Router()

router.route("/signup-verification").post(signupVerification)
router.route("/signup").post(signupConsumer)

router.route("/login-verification").post(loginVerification)
router.route("/login").post(loginConsumer)


// secured routes

router.route("/logout").post(verifyJWT,logoutConsumer)
router.route("/refresh-token").post(refreshAccessToken)

export default router