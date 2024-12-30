import React from "react";
import styles from "./FeatureCss.module.css"
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

function VerticalEllipseFeature() {
  return (
      <div className={`${styles.navItem}`}>
        <PiDotsThreeOutlineVerticalFill size="1.3rem"/>
      </div>
  )}

export default VerticalEllipseFeature;
