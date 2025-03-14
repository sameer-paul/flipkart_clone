const categories = [
  {
    category: "Mens",
    sections: [
      { Topwear: ["Shirts", "T-Shirts", "Jackets", "Sweaters", "Hoodies", "Blazers"] },
      { Bottomwear: ["Jeans", "Trousers", "Track Pants", "Shorts", "Joggers", "Cargo Pants"] }
    ]
  },
  {
    category: "Womens",
    sections: [
      { Topwear: ["Dresses", "Tops", "T-Shirts", "Kurtas", "Sweaters", "Jackets"] },
      { Bottomwear: ["Jeans", "Trousers", "Track Pants", "Shorts", "Leggings", "Palazzos", "Skirts"] }
    ]
  },
  {
    category: "Footwear",
    sections: [
      { Mens: ["Sneakers", "Formal Shoes", "Sandals", "Boots"] },
      { Womens: ["Heels", "Flats", "Sneakers", "Ballerinas"] }
    ]
  },
  {
    category: "Mobile",
    sections: [] // No subsections
  },
  {
    category: "Appliances",
    sections: [
      { "Home Appliances": ["TV", "Washing Machine", "Refrigerator", "Air Conditioner"] },
      { "Kitchen Appliances": ["Microwave", "Mixer Grinder", "Dishwasher"] }
    ]
  },
  {
    category: "Electronics",
    sections: [
      {Computers: ["Laptops", "Desktops", "Monitors", "Printers"]},
      {Accessories: ["Headphones", "Smartwatches", "VR Headsets"]},
      {Entertainment: ["Smart TVs", "Projectors", "Home Theaters"]}
    ]
  }
];

export default categories