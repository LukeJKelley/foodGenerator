import React from "react";
import styles from "./InitialButton.module.scss";

const InitialButton = ({ initialLabel, onClick }) => {
  return (
    <button className={styles.Initial__button} onClick={onClick}>
      {initialLabel}
    </button>
  );
};

export default InitialButton;
