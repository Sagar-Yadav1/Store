import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const CartItem = ({ id, imgUrl, name, color, price, quantity, removeFromCart, handleQuantityChange }) => {
  
 const quantityChange = useCallback((type) => {
    if (type === "min" && quantity > 1) {
      handleQuantityChange(id, quantity - 1);
    } else if (type === "plus") {
      handleQuantityChange(id, quantity + 1);
    } else {
      removeFromCart(id);
    }
  }, [handleQuantityChange, id, quantity]);
 
return (
  <div className={styles.product_box}>
    <div className={styles.product_detail}>
      <Link to="#" className={styles.product_img}>
        <img src={imgUrl} alt="product" />
      </Link>
      <div className={styles.product_info}>
        <div className={styles.product_name}>{name}</div>
        <div className={styles.product_color}>Color: {color}</div>
        <div className={styles.product_quotient}>
          <button onClick={()=> quantityChange('min')}>-</button>
          <input type="number" value={quantity}/>
          <button onClick={()=> quantityChange('plus')}>+</button>
        </div>
      </div>
    </div>
    <div className={styles.product_price}>
      <div className={styles.price}>${price}</div>
      <button
        className={styles.close_button}
        onClick={() => removeFromCart(id)}
      >
        x
      </button>
    </div>
  </div>
);
};

export default CartItem;
