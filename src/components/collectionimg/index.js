import React from 'react';
import styles from './style.module.css';
import { Container, Row } from 'react-bootstrap';
import VideoImg from '../../assets/images/video.png';

const CollectionImg = () => {
  return (
    <Container>
        <Row>
            <div className={styles.collections}>
                <img src={VideoImg} alt="" />
            </div>
        </Row>
    </Container>
  );
}

export default CollectionImg;