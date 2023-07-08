import React from "react";
import styles from "./Card.module.css";
import { useHistory } from "react-router-dom";

const Card = ({ title, icon, children }) => {
  const history = useHistory();
  function goToHome() {
    history.push("/");
  }
  return (
    <div className={styles.card}>
      <div onClick={goToHome} className={styles.headingWrapper}>
        {icon && <img src={`/images/${icon}.png`} alt="" />}
        {title && <h1 className={styles.heading}>{title} </h1>}
      </div>
      {children}
    </div>
  );
};

export default Card;
