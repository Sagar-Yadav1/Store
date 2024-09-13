import React, { Fragment } from "react";
import styles from "./style.module.css";

const Shiping = ({ text, price }) => {
  return (
    <Fragment>
      <div className={`${styles.shiping}`}>
        <div className={styles.s_input}>
          <input type="radio" id="text" className={styles.checkmark} />
          <label for="text">{text}</label>
        </div>
        <div className={styles.s_price}>
          <p>{price}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Shiping;
