import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./styles/SignUp.module.css";

export default function SignUp() {
    const [details, setDetails] = useState({
        name: "",
        mail: "",
        company: "",
        url: "",
        pass: "",
    });
    useEffect(() => {
        document.title = "Try CoSchedule Free Now - CoSchedule.com";
    }, []);
    const handleNameChange = (e) => {
        setDetails({ ...details, mail: e.target.value });
    };
    const handleMailChange = (e) => {
        setDetails({ ...details, pass: e.target.value });
    };
    const handleCompanyChange = (e) => {
        setDetails({ ...details, company: e.target.value });
    };
    const handleUrlChange = (e) => {
        setDetails({ ...details, url: e.target.value });
    };
    const handlePassChange = (e) => {
        setDetails({ ...details, pass: e.target.value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(details);
    };
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
                    <form
                        className={styles.SignUp_Form}
                        onSubmit={handleFormSubmit}
                    >
                        <div>
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                onChange={handleNameChange}
                            />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input
                                type="text"
                                placeholder="Email Address"
                                required
                                onChange={handleMailChange}
                            />
                        </div>
                        <div>
                            <label>Company</label>
                            <input
                                type="text"
                                placeholder="Company Name"
                                required
                                onChange={handleCompanyChange}
                            />
                        </div>
                        <div>
                            <label>Website URL</label>
                            <input
                                type="text"
                                placeholder="Company Website URL"
                                required
                                onChange={handleUrlChange}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password (minimum 8 characters)"
                                required
                                onChange={handlePassChange}
                                minLength="8"
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
