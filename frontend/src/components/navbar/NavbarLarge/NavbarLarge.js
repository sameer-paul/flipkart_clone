import React from 'react';
import styles from './NavbarLarge.module.css';




// file imports
import LogoFeature from '../../../features/header/LogoFeature'; 
import SearchbarFeature from '../../../features/header/SearchbarFeature';
import CartFeature from '../../../features/header/CartFeature';
import BecomeSellerFeature from '../../../features/header/BecomeSellerFeature';
import VerticalEllipseFeature from '../../../features/header/VerticalEllipseFeature';
import Button from '../../button/Button.component';
import { LuCircleUserRound } from "react-icons/lu";

const NavbarLarge = () => {
  return (
    <nav className='flex justify-center items-center gap-8 py-3 h-1/4 border-2'>
      <LogoFeature/>
      <SearchbarFeature/>
      <Button className="flex h-10 w-fit items-center gap-2 justify-center pl-2 pr-2 text-lg rounded hover:bg-blue-700 hover:text-white" icon={<LuCircleUserRound size="1.3rem"/>} text="Login"/>
      <CartFeature/>
      <BecomeSellerFeature/>
      <VerticalEllipseFeature/>
    </nav>
  );
};

export default NavbarLarge;
