import React, { useState } from 'react';
import styles from './style.module.css';
import Button from '../button';

const Summary = () => {
  const [shippingCost, setShippingCost] = useState(0);
  const [subtotal] = useState(1234);
  const [total, setTotal] = useState(subtotal);

  const shippingOptions = [
    { name: 'Free shipping', cost: 0 },
    { name: 'Express shipping', cost: 15 },
    { name: 'Pick Up', cost: 21 },
  ];

  const handleShippingChange = (cost) => {
    setShippingCost(cost);
    setTotal(subtotal + cost);
  };

  return (
    <div className={styles.cartSummary}>
      <h3>Cart summary</h3>

      <div className={styles.shippingOptions}>
        {shippingOptions.map((option, index) => (
          <label className={styles.radioOption} key={index}>
            <input
              type="radio"
              name="shipping"
              value={option.cost}
              checked={shippingCost === option.cost}
              onChange={() => handleShippingChange(option.cost)}
            />
            <span class={styles.custom_radio}></span>
            <span className={styles.shipping_name}>{option.name}</span>
            <span className={styles.price}>
              {option.cost === 0 ? '$0.00' : `+${option.cost}.00`}
            </span>
          </label>
        ))}
      </div>

      <div className={styles.summary}>
        <div className={styles.subtotal}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <hr />

        <div className={styles.total}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Button text={"Checkout"} btnwidth={"medium"} type={"outline"} display={"block"} align={"center"} to={"/checkOut"} />
    </div>
  );
};

export default Summary;
