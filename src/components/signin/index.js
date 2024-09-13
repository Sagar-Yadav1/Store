import React, { Fragment, useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../../assets/images/signpage.png";
import EyeIcon from "../../icons/eyeicon";
import Button from "../../components/button";
import styles from "./style.module.css";
import { SignContext } from "../../cartcontext/registrprovider";
import Navbar from "../header/navbar";
import Footer1 from "../footer1";

const SignInForm = () => {
    const { signInUser } = useContext(SignContext);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formValues;

        if (email && password) {
            const success = signInUser(email, password);
            if (success) {
                navigate("/");
            }
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <Fragment>
            <Navbar />

            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className={styles.leftSide}>
                        <img src={signupImg} alt="Chair" className={styles.chairImage} />
                        <h1 className={styles.logo}>3legant.</h1>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.rightSide}>
                            <div className={styles.formWrapper}>
                                <h2>Sign In</h2>
                                <p>
                                    Don't have an account yet?
                                    <Link to="/signup" className={styles.signInLink}>
                                        Sign Up
                                    </Link>
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email address"
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                        className={styles.inputField}
                                    />
                                    <div className={styles.passwordWrapper}>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={formValues.password}
                                            onChange={handleInputChange}
                                            className={styles.inputField}
                                        />
                                        <EyeIcon />
                                    </div>
                                    <div className={styles.rem_pas}>
                                        <div className={styles.rememberMe}>
                                            <input type="checkbox" id="rememberMe" />
                                            <label htmlFor="rememberMe">Remember me</label>
                                        </div>
                                        <Link to="/reset-password" className={styles.forgotPassword}>
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Button
                                        isButton={true}
                                        text="Sign In"
                                        type={"outline"}
                                        customCss={styles.signbtn}
                                    />
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer1 />
        </Fragment>
    );
};

export default SignInForm;
