import React from "react";
import styles from "./Navbar.module.css"


function Navbar(){
    return (

            <div className={styles.Nav}>
                <li>Home</li>
                <li>Streak</li>
                <li>Mappp</li>
                <li>Profile</li>
            </div>
    );
}

export default Navbar;