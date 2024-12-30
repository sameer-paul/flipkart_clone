import React from "react";
import styles from './FeatureCss.module.css'
import { PiShoppingCartLight } from "react-icons/pi";


function CartFeature() {
  return (
        <div className={`${styles.navItem}`}>
            <PiShoppingCartLight size="1.3rem"/>
            <p>Cart</p>
        </div>
  )}

export default CartFeature;
