import { useState } from "react";
import { Link } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "Casual Shirt", price: 799, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Running Shoes", price: 1299, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smart Watch", price: 2499, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Backpack", price: 999, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Sunglasses", price: 599, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Casual Shirt", price: 799, image: "https://via.placeholder.com/150" },
  { id: 7, name: "Running Shoes", price: 1299, image: "https://via.placeholder.com/150" },
  { id: 8, name: "Smart Watch", price: 2499, image: "https://via.placeholder.com/150" },
  { id: 9, name: "Backpack", price: 999, image: "https://via.placeholder.com/150" },
  { id: 10, name: "Sunglasses", price: 599, image: "https://via.placeholder.com/150" }
];

const ProductShowcase = ({ category = "Men's Topwear" }) => {
  const [priceFilter, setPriceFilter] = useState(5000);

  const filteredProducts = dummyProducts.filter(product => product.price <= priceFilter);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-4">
        <Link to="/" className="text-blue-500">Home</Link> &gt; 
        <span className="font-semibold">{category}</span>
      </nav>

      {/* Category Title */}
      <h2 className="text-2xl font-bold mb-4">{category} ({filteredProducts.length} items)</h2>

      <div className="grid grid-cols-6 ">
        {/* Filters Sidebar */}
        <div className="p-4 border-t-2 border-b-2 border-gray-200 ">
          <h3 className="font-semibold mb-3">Filters</h3>
          <label className="block text-sm mb-2">Max Price: ₹{priceFilter}</label>
          <input 
            type="range" 
            min="0" 
            max="5000" 
            value={priceFilter} 
            onChange={(e) => setPriceFilter(Number(e.target.value))} 
            className="w-full" 
          />
        </div>

        {/* Product Grid */}
        <div className="col-span-5 grid grid-cols-5 gap-2 border-t-2 border-l-2 border-b-2 border-gray-200 p-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-3 rounded-md" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-700">₹{product.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
