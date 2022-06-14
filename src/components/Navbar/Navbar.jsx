import React from "react";
import LogoSvg from "../SVG/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.Navbar_Parent}>
            <div className={styles.Navbar_Wrapper}>
                <div className={styles.Navbar_Left}>
                    <div className={styles.Navbar_Left_innerContent}>
                        <ul>
                            <li>
                                <LogoSvg />
                            </li>
                            <li>Products</li>
                            <li>Why CoSchedule</li>
                            <li>Resouorces</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.Navbar_Right}>
                    <div className={styles.Navbar_Right_innerContent}>
                        <ul>
                            <li>Sign In</li>
                            <li>Create Demo</li>
                            <li>
                                <div className={styles.createCallender}>
                                    Create My Callender
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
