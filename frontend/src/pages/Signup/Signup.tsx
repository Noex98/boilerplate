import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { apiService } from "../../services/apiService";
import { useUserContext } from "../../context";

export const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState(null);
    const setUser = useUserContext()[1];

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiService
            .signUp(email, password)
            .then((res) => {
                setUser(res);
                navigate("/");
            })
            .catch((err) => {
                setErrMessage(err);
            });
    };

    return (
        <div className={styles.wrapper}>
            <h1>Sign up</h1>
            <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
                <label>
                    <div>Email</div>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                    />
                </label>
                <label>
                    <div>Password</div>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
                {errMessage && (
                    <div className={styles.errMessage}>{errMessage}</div>
                )}
                <Link to={"/login"}>Already have an account? Login here!</Link>
            </form>
        </div>
    );
};
