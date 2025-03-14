import { useParams } from "react-router-dom";
import Button from "../../components/button/Button.component";
import login from "../../services/auth/login.services";

function UserAuth() {

    const {userType} = useParams()

    // Background images for Consumer & Seller
    const bgImages = {
        seller: "https://res.cloudinary.com/dwxntaowy/image/upload/v1740972386/footwear-store-advertising-poster-or-banner-flat-vector-39858657_cav9by.webp",
        consumer: "https://res.cloudinary.com/dwxntaowy/image/upload/v1740763160/asset_01_js4c8m.webp"
    };
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="border border-gray-300 shadow-lg w-3/4 md:w-1/2 h-3/4 flex">
                {/* Left Section with Background Image */}
                <div 
                    className="w-1/2 hidden md:block bg-cover bg-center" 
                    style={{ backgroundImage: `url(${bgImages[userType] || bgImages.consumer})` }}
                ></div>

                {/* Right Section - Login Form */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 bg-white">
                    <p className="text-2xl font-semibold mb-4">Login to Your Account</p>
                    <form className="flex flex-col w-full">
                        <input className="border p-2 mb-2 rounded" type="email" placeholder="Email" required />
                        <Button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700" text="Send OTP" />
                    </form>
                    <p className="text-sm mt-4">
                        <a href="#" className="text-blue-600">Forgot Password?</a>
                    </p>
                    <p className="text-sm mt-2">
                        Don't have an account? <a href="#" className="text-blue-600">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserAuth;
