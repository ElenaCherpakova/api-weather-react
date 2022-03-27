import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <h1 className={styles.heading}>
      <span className={styles.light}>Weather</span>
    </h1>
  );
};

export default Header;
