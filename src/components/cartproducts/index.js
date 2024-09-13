import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css';
import Button from '../button';
import Cross from '../../icons/cross';
import { CartContext } from '../../cartcontext';

const CartProduct = ({ image, color, title, quantity, price, id, removeFromCart, handleQuantityChange }) => {
  const [newQuantity, setNewQuantity] = useState(quantity);

  const quantityChange = (type) => {
    if (type === "min") {
      setNewQuantity(newQuantity - 1);
    } else if (type === "plus") {
      setNewQuantity(newQuantity + 1);
    }
  }

  useEffect(() => {
    if (newQuantity < 1) {
      removeFromCart(id);
    } else {
      handleQuantityChange(id, newQuantity);
    }
  }, [newQuantity])

  const subtotle = (
    price * quantity
  );

  return (
    <div className={styles.cart_product}>
      <div className={styles.cart_item}>
        <div className={styles.cart_img}>
          <img src={image} alt="Cart Image" />
        </div>
        <div className={styles.cart_cnt}>
          <h3>{title}</h3>
          <p>Color : Black</p>
          <Button icon={<Cross />} text={"Remove"} type={"text"} onClick={() => removeFromCart(id)} />
        </div>
      </div>
      <div className={styles.cart_price}>
        <div className={styles.cart_qty}>
          <button onClick={() => quantityChange('min')}>-</button>
          <input type="number" value={quantity} />
          <button onClick={() => quantityChange('plus')}>+</button>
        </div>
        <div className={styles.price}> ${price} </div>
        <div className={styles.subtotle}> ${subtotle.toFixed(2)} </div>
      </div>
    </div>
  );
}

export default CartProduct;