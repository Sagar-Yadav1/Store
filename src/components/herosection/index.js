import React from "react";
import styles from "./style.module.css";
import Img from "../../assets/images/heroimg.png";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../button";

const HeroSection = () => {
  return (
    <div className={`${styles.hero}`}>
      <Container fluid>
        <Row>
          <Col lg={6} className={styles.h_col}>
            <div className={styles.h_img}>
              <img src={Img} alt="HeroImage" />
            </div>
          </Col>
          <Col lg={6} className={styles.h_col}>
            <div className={styles.h_content}>
              <div className={styles.hc_text}>
                <h2>
                  Bring the <br /> warmth.
                </h2>
                <p>
                  Everyone needs a good winter jacket.
                  <br /> Find yours with our collection and more.
                </p>
                <div className={styles.herobtn}>
                <Button text={"Shopping Now"} type={"fill"}/></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;