import React, { Fragment } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const BreadcrumbPages = ({ items }) => {
  return (
    <Fragment>
      <nav className={styles.breadcrumb_pages}>
        {items.map((item, index) => (
          <div key={item.label} className={styles.bread_page}>
            <Link to={item.to} className={styles.breadcrumbItem}>
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <span className={styles.separator}>›</span>
            )}
          </div>
        ))}
      </nav>
    </Fragment>
  );
};

export default BreadcrumbPages;
