import React, { Fragment } from "react";
import styles from "./style.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../button";
import TopIcon from "../../icons/topicon";
import WhiteArrow from "../../icons/whitearrow";

const Topbar = ({type, iconclr, textcolor}) => {
  return (
    <Fragment>
      <div className={`${styles.header_topbar} ${styles[type]}`}>
        <Container>
          <Row>
            <Col lg={12}>
            <div className={styles.ht_text}>
              <div className={`${styles.htt_icon} ${styles[iconclr]}`}>
                <TopIcon />
              </div>
              <p className= {`${styles[textcolor]}`}>30% off storewide — Limited time!</p>
              <Button text={"Shop Now"} type={"textblack"} icon={<WhiteArrow/>} customCss={styles.topbtn} />
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Topbar;
