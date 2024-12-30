import React from "react";
import styles from "./FeatureCss.module.css"
import { CiShop } from "react-icons/ci";

function BecomeSellerFeature() {
  return (
    <div className={`${styles.navItem}`}>
        <CiShop size="1.3rem"/>
        <p>Become a Seller</p>
    </div>
)}

export default BecomeSellerFeature;
