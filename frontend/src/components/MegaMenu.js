import { useState } from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories"; // Import your categories data

const MegaMenu = () => {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div
      className="flex gap-6 justify-center relative"
    >
      {/* Top-Level Categories */}
      {categories.map((item, index) => (
        <Link to={`/${item.category}`}>
          <div
            key={index}
            className={`relative group h-full p-4 cursor-pointer font-semibold ${openCategory===item?"bg-red-400 text-white":""}`}
            onMouseEnter={() => setOpenCategory(item)} // Open dropdown on hover
            onMouseLeave={() => setOpenCategory(null)} // Close dropdown when leaving both category and dropdown
          >
              {item.category} 
          </div>
        </Link>
      ))}

      {/* Full-Width Dropdown */}
      {openCategory?.sections.length > 0 && (
        <div
          className="absolute w-full top-full shadow-lg border-t-0 border rounded-md p-8 transition-opacity duration-200 bg-gradient-to-r from-[#f9f9f7] to-[#e7e7e7] text-gray-800"
          onMouseEnter={() => setOpenCategory(openCategory)} // Keep dropdown open
          onMouseLeave={() => setOpenCategory(null)} // Close when leaving dropdown
        >
          <div className="flex flex-row gap-x-10 justify-center">
            {openCategory.sections.map((section, sectionIndex) => {
              const category = openCategory.category
              const sectionName = Object.keys(section)[0]; // Get section name
              const subCategories = section[sectionName]; // Get subcategories

              return (
                <div key={sectionIndex} className="min-w-[200px]">
                  <h4 className="font-semibold text-gray-900 mb-2 border-b border-gray-400 pb-2 pl-2 pt-2 uppercase">
                    {sectionName}
                  </h4>
                  <ul className="space-y-1 text-gray-700 font-medium text-sm">
                    {subCategories.map((sub, subIndex) => (
                      <Link to={`/${category}/${sectionName}/${sub}`}>
                          <li
                            key={subIndex}
                            className="cursor-pointer rounded-md hover:bg-gray-200 duration-200 pl-2 pt-2 pb-2 transition-all"
                          >
                              {sub}
                          </li>
                        </Link>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
