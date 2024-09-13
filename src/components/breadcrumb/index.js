import React, { Fragment } from "react";
import styles from "./style.module.css";
import BreadcrumbPages from "../breadcrumbpages";

const Breadcrumb = () => {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
  ];

  return (
    <Fragment>
      <div className={styles.breadcrumb}>
        <BreadcrumbPages items={breadcrumbItems} />
        <h3 className={styles.title}>Shop Page</h3>
        <p className={styles.subtitle}>
          Let's design the place you always imagined.
        </p>
      </div>
    </Fragment>
  );
};

export default Breadcrumb;
