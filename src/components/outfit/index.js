import React from 'react';
import styles from './style.module.css';
import Button from '../button';
import Arrow from '../../icons/arrow';
import WhiteArrow from '../../icons/whitearrow';

const Outfit = ({Img, text}) => {
  return (
    <div className={`${styles.outfit}`}>
    <div className={styles.outfit_img}>
      <img src={Img} />
      <div className={styles.outfit_text}>
        <h5>{text}</h5>
        <Button text={"Collection"} type={"textwhite"} icon={<WhiteArrow />}
        />
      </div>
    </div>
  </div>
  );
}

export default Outfit;