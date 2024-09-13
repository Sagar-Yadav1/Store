import React from "react";
import styles from "./style.module.css";
import { Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Insta1 from "../../icons/insta1";
import Facebook1 from "../../icons/facebook1";
import Youtube1 from "../../icons/youtube1";

const Footer1 = () => {
  return (
    <footer className={styles.footerContainer}>
      <Container>
        <Row className="gap-5">
          <div className={styles.footer_row}>
            <div className={styles.logoContainer}>
              <span className={styles.logoText}>3legant.</span>
              <span>|</span>
              <span className={styles.tagline}>Gift & Decoration Store</span>
            </div>

            <Nav className={styles.footerNav}>
              <Link to="/">Home</Link>
              <Link to="/">Shop</Link>
              <Link to="/">Product</Link>
              <Link to="/">Blog</Link>
              <Link to="/">Contact Us</Link>
            </Nav>
          </div>

          <div className={` ${styles.copyrightRow}`}>
            <div className={styles.copyrightText}>
              <p>Copyright © 2023 3legant. All rights reserved</p>
              <div className={styles.terms_policy}>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms of Use</Link>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <Link to="/">
                <Insta1 />
              </Link>
              <Link to="/">
                <Facebook1 />
              </Link>
              <Link to="/">
                <Youtube1 />
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer1;
