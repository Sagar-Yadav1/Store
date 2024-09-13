import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';

const Cards = ({Icon, title, description}) => {
  return (
    <div className={styles.cards}>
        <div className={styles.card_icon}>
            {Icon}
        </div>
        <div className={styles.card_title}>
            {title}
        </div>
        <div className={styles.card_description}>
            {description}
        </div>
    </div>
  );
}

export default Cards;