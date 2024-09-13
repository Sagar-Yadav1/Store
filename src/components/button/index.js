import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Button = ({ isButton, type, text, icon, to, btnwidth, customCss, onClick }) => {
  return (
    isButton === true ?
      <button
        className={` ${styles.button} ${styles[type]} ${styles[btnwidth]} ${customCss}`} onClick={onClick}
      // type="submit"
      >
        <span>{text}</span>
        {icon}
      </button>
      :
      <Link
        to={to}
        className={` ${styles.button} ${styles[type]} ${styles[btnwidth]} ${customCss}`} onClick={onClick}
      >
        <span>{text}</span>
        {icon}
      </Link>



  );
};

export default Button;
