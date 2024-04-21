import React from "react";
import styles from "./Navbar.module.css"

function Navbar(){
    return
    <div>
        <ol className={styles.Nav}>
            <li>Home</li>
            <li>Streak</li>
            <li>Map</li>
            <li>Profile</li>
        </ol>
    </div>;
}
Export default Navbar;