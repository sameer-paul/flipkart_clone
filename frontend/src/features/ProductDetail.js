import { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  // Dummy product data
  const product = {
    id: 1,
    name: "Men's Casual Shirt",
    brand: "FashionWear",
    rating: 4.5,
    reviews: 120,
    price: 1299,
    sizes: ["S", "M", "L", "XL"],
    description: "A stylish and comfortable casual shirt made with premium cotton fabric. Perfect for everyday wear.",
    image: "https://via.placeholder.com/400", // Placeholder image
  };

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="container mx-auto px-4 py-6 flex gap-10">
      {/* <nav className="text-sm text-gray-600 mb-4">
        <Link to="/" className="text-blue-500">Home</Link> &gt; 
        <span className="font-semibold">{category}</span>
      </nav> */}

      {/* Product Image */}
      <div className="w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
      </div>

      {/* Product Details */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 text-lg">Brand: <span className="font-semibold">{product.brand}</span></p>
        <p className="text-yellow-500 font-semibold">⭐ {product.rating} ({product.reviews} reviews)</p>
        <p className="text-2xl font-bold mt-2">₹{product.price}</p>
        
        {/* Size Selection */}
        <div className="mt-4">
          <p className="font-semibold mb-1">Select Size:</p>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700">{product.description}</p>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Add to Cart</button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
