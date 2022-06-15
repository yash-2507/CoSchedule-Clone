import React from "react";
import CrossSvg from "../SVG/Cross";
import styles from "./Main.module.css";

export default function Main() {
    return (
        <div className={styles.parent}>
            <div className={styles.Main_parent_Notification}>
                <div></div>
                <div className={styles.Main_Top_Notification}>
                    Organize all your marketing in one place with marketing
                    calendar software from CoSchedule.
                    <span className={styles.Main_Top_Notification_Span}>
                        Get Started Free
                    </span>
                </div>
                <div className={styles.CrossSvg}>
                    <CrossSvg />
                </div>
            </div>
        </div>
    );
}
