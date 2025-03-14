import React from 'react';
import { LuCircleUserRound } from "react-icons/lu";
import { CiShop } from "react-icons/ci";



// file imports
import LogoFeature from '../../../features/header/LogoFeature'; 
import SearchbarFeature from '../../../features/header/SearchbarFeature';
import CartFeature from '../../../features/header/CartFeature';
import VerticalEllipseFeature from '../../../features/header/VerticalEllipseFeature';
import Button from '../../button/Button.component';
import { useNavigate } from 'react-router-dom';




const NavbarLarge = () => {
  const navigate = useNavigate()
  return (
    <nav className='flex justify-center items-center gap-8 py-3 h-1/4 border-b-0 border-2'>
      <LogoFeature/>
      <SearchbarFeature/>
      <Button className="flex h-10 w-fit items-center gap-2 justify-center pl-2 pr-2 text-lg rounded hover:bg-blue-600 hover:text-white" icon={<LuCircleUserRound size="1.5rem"/>} text="Login" onclick={() => navigate("/auth/customer")}/>
      <CartFeature/>
      <Button className="flex h-10 w-fit items-center gap-2 justify-center pl-2 pr-2 text-lg rounded hover:bg-blue-600 hover:text-white" icon={<CiShop size="1.5rem"/>} text="Become a Seller" onclick={() => navigate("/auth/seller")}/>
      <VerticalEllipseFeature/>
    </nav>
  );
};

export default NavbarLarge;
