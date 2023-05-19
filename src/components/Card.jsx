import React from "react";
import styles from "../styles/Cards.module.scss";

const Card = ({ image, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={image} alt="" width="70px" height="70px" />
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
