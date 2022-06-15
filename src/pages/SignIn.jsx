import React from "react";
import { useEffect } from "react";
import styles from "./styles/SignIn.module.css";

export default function SignIn() {
    useEffect(() => {
        document.title = "CoSchedule Accounts";
    }, []);
    return (
        <div className={styles.SignIn_Parent}>
            <div className={styles.SignIn_Container}>
                <div className={styles.LogoWrapper}>
                    <img
                        src="https://accounts.coschedule.com/img/cos-logo-horz.svg"
                        alt=""
                    />
                </div>
                <form className={styles.SignIn_Form}>
                    <div>
                        <label>EMAIL ADDRESS</label>
                        <input
                            type="text"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <input
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className={styles.SignIn_btn_Wrapper}>
                        <button type="submit" className={styles.SignIn_Btn}>
                            Sign In
                        </button>
                    </div>
                </form>
                <div className={styles.SignIn_bottom}>
                    <span>Need an account?</span>
                    {" | "}
                    <span>Forgot your Password?</span>
                </div>
            </div>
            <img
                className={styles.LeftBox}
                src="https://accounts.coschedule.com/img/login-boxes.svg"
                alt=""
            />
            <img
                className={styles.RightBox}
                src="https://accounts.coschedule.com/img/login-boxes.svg"
                alt=""
            />
        </div>
    );
}
