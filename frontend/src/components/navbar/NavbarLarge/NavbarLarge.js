import React from 'react';
import styles from './NavbarLarge.module.css';




// file imports
import LogoFeature from '../../../features/header/LogoFeature'; 
import SearchbarFeature from '../../../features/header/SearchbarFeature';
import LoginDropdownFeature from '../../../features/header/LoginDropdownFeature';
import CartFeature from '../../../features/header/CartFeature';
import BecomeSellerFeature from '../../../features/header/BecomeSellerFeature';
import VerticalEllipseFeature from '../../../features/header/VerticalEllipseFeature';


const NavbarLarge = () => {
  return (
    <nav className='flex justify-center items-center gap-8 py-3 h-1/4 border-2'>
      <LogoFeature/>
      <SearchbarFeature/>
      <LoginDropdownFeature/>
      <CartFeature/>
      <BecomeSellerFeature/>
      <VerticalEllipseFeature/>
    </nav>
  );
};

export default NavbarLarge;