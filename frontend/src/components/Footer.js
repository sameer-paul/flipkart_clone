import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold text-white">ShopMate</h2>
            <p className="text-sm mt-2 text-gray-400">
              Your one-stop shop for everything you need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-green-400 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Careers</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-md font-semibold text-white">Customer Support</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-md font-semibold text-white">Follow Us</h3>
            <div className="flex mt-3 space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ShopMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  
  