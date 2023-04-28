import React from "react";
import styles from "./Heading.module.scss";

const Heading = () => {
  return (
    <div>
      <h1 className={styles.heading}>
        What would you like for dinner tonight?
      </h1>
    </div>
  );
};

export default Heading;
