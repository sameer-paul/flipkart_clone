import crypto from "crypto"

const generateOtp = () => {
    return crypto.randomInt(100000,999999); // generates a 6 digit OTP
}

export default generateOtp