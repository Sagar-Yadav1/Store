import React from 'react';
import styles from './style.module.css';
import Section from '../section';
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../logo';
import Instagram from '../../icons/instagram';
import Facebook from '../../icons/facbook';
import Youtube from '../../icons/youtuber';
import Button from '../button';
import Arrow from '../../icons/arrow';
import WhiteArrow from '../../icons/whitearrow';
import Payment from '../../assets/images/payment methods.png';

const Footer = () => {
  return (
    <Section bgcolor={"#E8ECEF"}>
        <Container>
            <Row className={styles.footer}>
                <Col lg={4} sm={12} xs={12}>
                    <div className={styles.footer_logo}><Logo/></div>
                    <div className={styles.footer_address}>43111 Hai Trieu street, <br/> District 1, HCMC <br/> Vietnam</div>
                    <div className={styles.footer_contact}>84-756-3237</div>
                    <div className={styles.footer_icons}>
                        <Instagram/>
                        <Facebook/>
                        <Youtube/>
                    </div>
                </Col>
                <Col lg={2} sm={12} xs={12}>
                    <div className={styles.footer_page}>
                        <p>Page</p>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Product</li>
                            <li>Articles</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={2} sm={12} xs={12}>
                    <div className={styles.footer_page}>
                        <p>Info</p>
                        <ul>
                            <li>Shipping Policy</li>
                            <li>Return & Refund</li>
                            <li>Support</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                </Col>
                <Col lg={4} sm={12} xs={12}>
                    <div className={styles.footer_page}>
                        <p>Join Newsletter</p>
                    </div>
                    <div className={styles.footer_cnt}>
                        <span>Subscribe our newsletter to get more deals, new products and promotions</span>
                    </div>  
                    <div className={styles.footer_email}>
                        <input type="Email" placeholder='Enter your email'/>
                        <div className={styles.footericon}><WhiteArrow/></div>
                    </div>                  
                </Col>
            </Row>
            <div className={styles.bottom_bar}>
                <div className={styles.copyright}>Copyright © 2023 3legant. All rights reserved</div>
                <div className={styles.policy}>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
                </div>
                <div className={styles.payments}>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </Container>
    </Section>
  );
}

export default Footer;