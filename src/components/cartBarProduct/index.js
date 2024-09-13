import React from "react";
import styles from "./style.module.css";
import Close from "../../icons/closeIcon";

const CartBarProduct = ({ item }) => {
  return (
    <div className={`${styles.CartBarProduct}`}>
      <div className={styles.cp_image}>
        <img src={item.imgUrl} alt="" className="img-fluid" />
      </div>
      <div className={`${styles.product_info} flex-grow-1`}>
        <h5 className={styles.detail_1}>{item.title1}</h5>
        <h5 className={styles.detail_2}>
          <span className={styles.pi_title1}>{item.title2}</span> <br/>
          <span className={styles.pi_title2}>{item.title3}</span>
        </h5>
      </div>
      <div className={`${styles.close_icon} `}>
        <Close />
      </div>
    </div>
  );
};

export default CartBarProduct;
