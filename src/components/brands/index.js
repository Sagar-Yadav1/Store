import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Logo1 from '../../assets/images/logo 01.png';
import Logo2 from '../../assets/images/logo 2.png';
import Logo3 from '../../assets/images/logo 03.png';
import Logo4 from '../../assets/images/logo 04.png';
import Logo5 from '../../assets/images/logo 05.png';
import Logo6 from '../../assets/images/logo 6.png';
import Section from '../section';

const Brands = () => {
  return (
    <Section>
        
    <div className={styles.brands}>
        <Container>
            <Row>
                <p>Trending Brands</p>
                <Col lg={2} md={4} sm={6} xs={6}>
                    <div className={styles.brands_logo}>
                        <img src={Logo1} alt="" />
                    </div>                
                </Col>
                <Col lg={2} md={4} sm={6} xs={6}>
                    <div className={styles.brands_logo}>
                        <img src={Logo2} alt="" />
                    </div>                
                </Col>
                <Col lg={2} md={4} sm={6} xs={6}>
                    <div className={styles.brands_logo}>
                        <img src={Logo3} alt="" />
                    </div>                
                </Col>
                <Col lg={2} md={4} sm={6} xs={6}>
                    <div className={styles.brands_logo}>
                        <img src={Logo4} alt="" />
                    </div>                
                </Col>
                <Col lg={2} md={4} sm={6} xs={6}>
                    <div className={styles.brands_logo}>
                        <img src={Logo5} alt="" />
                    </div>                
                </Col>
                <Col lg={2} md={4} sm={6} xs={6}>
                    <div className={styles.brands_logo}>
                        <img src={Logo6} alt="" />
                    </div>                
                </Col>
            </Row>
        </Container>
    </div>
    </Section>
  );
}

export default Brands;