import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchbarFeature() {
  return (
    <div className='flex h-10 items-center bg-srch w-5/12  gap-2 rounded-lg pl-2 pr-2'>
            <IoIosSearch size="2rem"  color='grey' className=''/>
            <input type='text' placeholder='Search for Products, Brands and More' className='bg-transparent w-full h-full placeholder-txt text-lg border-none outline-none'/>
    </div>
)}

export default SearchbarFeature;
