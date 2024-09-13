import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Img1 from '../../assets/images/news1.png';
import Img2 from '../../assets/images/news2.png';
import Img3 from '../../assets/images/news3.png';
import Img4 from '../../assets/images/news4.png';

const NewsImg = () => {
  return (
    <Container>
        <Row>
            <Col lg={3}>
                <div className={styles.news_images}>
                    <img src={Img1} alt="" />
                </div>
            </Col>
            <Col lg={3}>
                <div className={styles.news_images}>
                    <img src={Img2} alt="" />
                </div>
            </Col>
            <Col lg={3}>
                <div className={styles.news_images}>
                    <img src={Img3} alt="" />
                </div>
            </Col>
            <Col lg={3}>
                <div className={styles.news_images}>
                    <img src={Img4} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default NewsImg;