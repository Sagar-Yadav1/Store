import React from "react";
import Styles from "./style.module.css";

const Section = ({ children, bgcolor, ptb, pb, pt, bgImg, customclass, customCss }) => {
  return (
    <>
      <div
        className={`${Styles.section} ${Styles[bgcolor]} ${Styles["pb-" + pb]} ${
        Styles["pt-" + pt]} ${
          Styles[ptb]
        } ${customclass}
         ${bgImg ? Styles.bgImg : ""} ${customCss}`}
        style={{ backgroundImage: `url(${bgImg})`,backgroundColor:`${bgcolor}` }}
      >
        {children}
      </div>
    </>
  );
};

export default Section;
