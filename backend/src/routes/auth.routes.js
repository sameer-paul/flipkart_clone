import Router from "express"
import logout from "../controllers/user/logout.controller.js"
import refreshAccessToken from "../controllers/refreshAccessToken.controller.js"
import requestOtp from "../controllers/user/requestOtp.controller.js"
import signupAndLoginUser from "../controllers/user/signupAndLoginUser.controller.js"
import verifyJWT from "../middlewares/verifyJWT.middleware.js"

const router = Router()


// registering user

router.route("/request-auth-otp").post(requestOtp)
router.route("/user-authentication").post(signupAndLoginUser)



// secured routes

router.route("/logout").post(verifyJWT,logout)
router.route("/refresh-token").post(refreshAccessToken)

export default router