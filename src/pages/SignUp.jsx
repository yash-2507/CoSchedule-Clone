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
                    <div>Create My Marketing Callender</div>
                    <div>Free for Life. No credit card required.</div>
                </div>
                <div className={styles.SignUp_container}>
                    <form>
                        <label>Full Name</label>
                        <input type="text" placeholder="Full Name" required />
                        <label>Email Address</label>
                        <input
                            type="text"
                            placeholder="Email Address"
                            required
                        />
                        <label>Company</label>
                        <input
                            type="text"
                            placeholder="Company Name"
                            required
                        />
                        <label>Website URL</label>
                        <input
                            type="text"
                            placeholder="Company Website URL"
                            required
                        />
                        <label>Password</label>
                        <input
                            type="text"
                            placeholder="Password (minimum 8 characters)"
                            required
                        />
                        <button type="submit">Get Started Now</button>
                    </form>
                    <p>
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
