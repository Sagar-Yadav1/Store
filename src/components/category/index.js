import React, { Fragment } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Category = ({ Name, Img, id }) => {
  return (
      <div className={`${styles.categories}`}>
        <div className={styles.category_img}>
          <Link to={`/singlepage/${id}`}><img src={Img} /></Link>
        </div>
        <div className={styles.category_text}>
          <p>{Name}</p>
        </div>
      </div>
  );
};

export default Category;