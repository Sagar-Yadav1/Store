import React, { Fragment, useContext, useState } from "react";
import styles from "./style.module.css";
import SideCartBar from "../sideCartBar";
import CartIcon from "../../icons/cart";
import { CartContext } from "../../cartcontext";

const CartButton = ({ onClick, onClose }) => {
  const { cart } = useContext(CartContext);
  const [cartBar, setCartBar] = useState(false);

  return (
    <Fragment>
      <button className={`${styles.cart}`} onClick={onClick}>
        <CartIcon />
        <span className={styles.item_count}>{cart.length}</span>
      </button>
      {cartBar ? (
        <SideCartBar cartBar={cartBar} onClose={onClose} />
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default CartButton;
