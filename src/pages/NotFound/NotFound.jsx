import React from "react";
import styles from "./NotFound.module.css";
import image from "../../assets/huh.png"


function NotFound() {
  return <div className={styles.container}>
    <img src={image} alt="" />
    404
    <span>Page Not found</span>
  </div>;

}

export default NotFound;
