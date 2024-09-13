import React from 'react';
import styles from './style.module.css';
import Section from '../section';

const CartDetails = ({head, span1, tag1, span2, tag2, span3, tag3}) => {
  return (
    <div>
    <div className={styles.cart_head}>
        <h2>{head}</h2>
        </div>
        <div className={styles.cart_list}>
        <ul>
        <li><a className={styles.active} href="#"><span>{span1}</span>{tag1}</a></li>
        <li><a href="#"><span>{span2}</span>{tag2}</a></li>
        <li><a href="#"><span>{span3}</span>{tag3}</a></li>
        </ul>
    </div>
    </div>
  );
}

export default CartDetails;