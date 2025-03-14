import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <p className="text-xl mt-4 font-medium">Oops! Page not found.</p>
      <p className="text-gray-600 mt-2">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
