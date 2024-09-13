import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";

const Banner = ({ bannerimg, alt, tag, title, description, button }) => {
  return (
    <Fragment>
      <Container fluid className="g-0">
        <Row className="align-iteme-center g-0">
          <Col lg={6}>
            <div className={styles.banner_img}>
              <img src={bannerimg} alt="BAnner Image" />
            </div>
          </Col>
          <Col lg={6}>
            <div
              className={`d-flex align-items-center ${styles.banner_content}`}
            >
              <div className={styles.banner_content_inner}>
                <div className={styles.b_content_tag}>{tag}</div>
                <h4 className={styles.b_content_title}>{title}</h4>
                <div className={styles.b_content_description}>
                  {description}
                </div>
                <div>{button}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Banner;
