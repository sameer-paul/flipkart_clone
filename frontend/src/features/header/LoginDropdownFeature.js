import React from "react";
import styles from './FeatureCss.module.css'
import { LuCircleUserRound } from "react-icons/lu";
import { IoIosArrowUp } from "react-icons/io";


function LoginDropdownFeature() {
  return (
    <div className={`${styles.navItem}`}>
            <LuCircleUserRound size="1.3rem"/>
            <p>Login</p>
            <IoIosArrowUp />
    </div>
)}

export default LoginDropdownFeature;
