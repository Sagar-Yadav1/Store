import React, { Fragment, useContext, useState } from "react";
import styles from "./style.module.css";
import Close from "../../icons/closeIcon";
import Button from "../button";
import CartItem from "./cartItem";
import { CartContext } from "../../cartcontext";

const SideCartBar = ({ CartBar, onClose }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const TotalAmount = cart.reduce((totle, item) => {
    return totle + item.price * item.quantity;
  }, 0);

  return (
    <Fragment>

      <div className={`${styles.sidebar} ${CartBar ? styles.open : ""}`}>
        <div className={styles.sb_head}>
          <div className={styles.sbh_inner}>
            <div className={styles.sbh_title}>Shopping Cart ({cart.length})</div>
            <button onClick={onClose} className={styles.sbh_cls}>
              <Close />
            </button>
          </div>
        </div>
        <div className={styles.sb_body}>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              id={item.id}
              quantity={item.quantity}
              imgUrl={item.image}
              name={item.title}
              color={item.color}
              price={item.price}
              count={item.count}
              removeFromCart={removeFromCart}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
        <div className={styles.sb_foot}>
          <div className={styles.sbf_inner}>
            <div className={styles.sbfi_pc}>
              <span>{cart.length} Product(s)</span>
              <strong>${TotalAmount.toFixed(2)}</strong>
            </div>
            <div className={styles.sbfi_btns}>
              <Button to={"/checkout"} size="large" type="fillround" text="Checkout" customCss={styles.sidecartbtn} onClick={onClose} />
              <Button to={"/cart"} size="small" type="outlineround" text="View Cart" onClick={onClose} />
              <Button size="small" type="text" text="Clear Cart" onClick={clearCart} customCss={styles.clear_btn} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.cb_overlay} ${CartBar ? styles.open : ""}`} onClick={onClose}></div>
    </Fragment>
  );
};

export default SideCartBar;
