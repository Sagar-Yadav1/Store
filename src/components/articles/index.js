import React, { Fragment } from "react";
import styles from "./style.module.css";

const Articles = ({ articlesimg, title, button }) => {
  return (
    <Fragment>
      <div className={styles.article_box}>
        <div className={styles.img_box}>
          <img src={articlesimg} alt="articleImg" />
        </div>
        <div className={styles.article_head}>
        <h6>{title}</h6>
        <div>{button}</div>
        </div>
      </div>
    </Fragment>
  );
};
export default Articles;
