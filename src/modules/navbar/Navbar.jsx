import React from "react";
import styles from "./Navbar.module.css";

function Navbar(props) {
  return (
    <div className={styles.Nav}>
      <li onClick={() => props.setPageSelect("home")}>Home</li>
      <li onClick={() => props.setPageSelect("streak")}>Streak</li>
      <li onClick={() => props.setPageSelect("map")}>Map</li>
      <li onClick={() => props.setPageSelect("profile")}>Profile</li>
    </div>
  );
}

export default Navbar;
