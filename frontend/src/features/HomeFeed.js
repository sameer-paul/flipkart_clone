import React from "react";


const ProductSection = ({ title, products }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-900">{title}</h2>
      <div className="grid grid-cols-5 gap-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-all "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-md font-semibold text-gray-800">{product.name}</h3>
            <p className="text-red-500 font-bold">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturedProduct = ({ title, products }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-900">{title}</h2>
      <div className="grid grid-cols-8 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all min-w-[200px]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-red-500 font-bold">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SmallProductCard = ({ title, products }) => {
  return (
    <div className="bg-green-50 p-4 rounded-xl shadow-sm">
      <h2 className="text-md font-bold mb-2 text-green-900">{title}</h2>
      <div className="grid grid-cols-9 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-md mb-1"
            />
            <h3 className="text-xs font-semibold text-gray-800 truncate">{product.name}</h3>
            <p className="text-red-500 text-sm font-bold">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};





const HomeFeed = () => {
  return (
    <div className="p-6 space-y-10 bg-gray-100">
      {/* Featured Products - Large Display */}
      <FeaturedProduct
        title="Exclusive Deals"
        products={[
          { id: 1, name: "Premium Sneakers", price: 2999, image: "https://via.placeholder.com/400" },
          { id: 2, name: "Smartwatch", price: 4999, image: "https://via.placeholder.com/400" },
        ]}
      />

      {/* Products Under ₹499 - Standard Grid */}
      <ProductSection
        title="Products Under ₹499"
        products={[
          { id: 3, name: "Trendy T-Shirt", price: 499, image: "https://via.placeholder.com/150" },
          { id: 4, name: "Casual Sneakers", price: 450, image: "https://via.placeholder.com/150" },
          { id: 5, name: "Stylish Sunglasses", price: 399, image: "https://via.placeholder.com/150" },
        ]}
      />

      {/* Men's Casual Shirts - Highlighted */}
      <FeaturedProduct
        title="Men's Casual Shirts"
        products={[
          { id: 6, name: "Linen Shirt", price: 999, image: "https://via.placeholder.com/300" },
          { id: 7, name: "Checked Shirt", price: 899, image: "https://via.placeholder.com/300" },
          { id: 8, name: "Denim Shirt", price: 1099, image: "https://via.placeholder.com/300" },
        ]}
      />

      {/* Women's Heels - Small Cards */}
      <SmallProductCard
        title="Women's Heels"
        products={[
          { id: 9, name: "Block Heels", price: 1199, image: "https://via.placeholder.com/100" },
          { id: 10, name: "Stiletto Heels", price: 1599, image: "https://via.placeholder.com/100" },
          { id: 11, name: "Wedge Heels", price: 1399, image: "https://via.placeholder.com/100" },
        ]}
      />
    </div>
  );
};

export default HomeFeed;
