import React from "react";
import styles from './Indicator.module.scss'
const Indicator = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
    </aside>
  );
};

export default Indicator;
