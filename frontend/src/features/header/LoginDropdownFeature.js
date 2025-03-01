import React from "react";
import styles from './FeatureCss.module.css'
import { LuCircleUserRound } from "react-icons/lu";

function LoginDropdownFeature() {
  return (
    <div className={`${styles.navItem}`}>
            <LuCircleUserRound size="1.3rem"/>
            <p>Login</p>
    </div>
)}

export default LoginDropdownFeature;
