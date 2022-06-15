import React from "react";
import { useEffect } from "react";
import styles from "./styles/SignUp.module.css";

export default function SignUp() {
    useEffect(() => {
        document.title = "Try CoSchedule Free Now - CoSchedule.com";
    }, []);
    return (
        <div className={styles.SignUp_parent}>
            <div className={styles.SignUp_Wrapper}>
                <div>
                    <div className={styles.SignUp_Heading}>
                        Create My Marketing Callender
                    </div>
                    <div className={styles.SignUp_SubHeading}>
                        Free for Life. No credit card required.
                    </div>
                </div>
                <div className={styles.SignUp_container}>
                    <form className={styles.SignUp_Form}>
                        <div>
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input
                                type="text"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div>
                            <label>Company</label>
                            <input
                                type="text"
                                placeholder="Company Name"
                                required
                            />
                        </div>
                        <div>
                            <label>Website URL</label>
                            <input
                                type="text"
                                placeholder="Company Website URL"
                                required
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="text"
                                placeholder="Password (minimum 8 characters)"
                                required
                            />
                        </div>
                        <div className={styles.SignUp_Submit_Wrapper}>
                            <button
                                type="submit"
                                className={styles.SignUp_Submit}
                            >
                                Get Started Now
                            </button>
                        </div>
                    </form>
                    <p className={styles.SignUp_BottomPara}>
                        By clicking "Get Started Now", you agree to CoSchedule’s
                        terms of service, end user agreement, and privacy
                        policy; you are 16 years or older; and you will receive
                        information from CoSchedule from which you can opt out
                        at any time.
                    </p>
                </div>
            </div>
        </div>
    );
}
