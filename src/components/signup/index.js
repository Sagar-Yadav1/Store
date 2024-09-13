import React, { Fragment, useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import signupImg from "../../assets/images/signpage.png";
import { Link, useNavigate } from "react-router-dom";
import EyeIcon from "../../icons/eyeicon";
import Button from "../../components/button";
import styles from "./style.module.css";
import { SignContext } from "../../cartcontext/registrprovider";
import Footer1 from "../footer1";
import Navbar from "../header/navbar";

const SignupForm = () => {
    const { signUpUser } = useContext(SignContext);
    const [formValues, setFormValues] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        terms: false,
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formValues.terms &&
            formValues.name &&
            formValues.email &&
            formValues.username &&
            formValues.password
        ) {
            signUpUser(formValues);
            navigate("/");
        } else {
            alert("Fill every field");
        }
    };

    return (
        <Fragment>
            <Navbar />
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className={styles.leftSide}>
                            <img src={signupImg} alt="Chair" className={styles.chairImage} />
                            <h1 className={styles.logo}>3legant.</h1>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.rightSide}>
                            <div className={styles.formWrapper}>
                                <h2>Sign up</h2>
                                <p>
                                    Already have an account?
                                    <Link to="/signin" className={styles.signInLink}>
                                        Sign in
                                    </Link>
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={formValues.name}
                                        onChange={handleInputChange}
                                        className={styles.inputField}
                                    />

                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={formValues.username}
                                        onChange={handleInputChange}
                                        className={styles.inputField}
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
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

                                    <div className={styles.terms}>
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            checked={formValues.terms}
                                            onChange={handleInputChange}
                                        />
                                        <label>
                                            I agree with <Link to="#">Privacy Policy</Link> and{" "}
                                            <Link to="#">Terms of Use</Link>
                                        </label>
                                    </div>

                                    <Button
                                        isButton={true}
                                        text={"Sign Up"}
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

export default SignupForm;
