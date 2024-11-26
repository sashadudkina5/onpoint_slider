import React from "react";
import logo from "../../assets/logo.png";
import styles from "./styles.module.css";

function Logo() {
  return <img src={logo} alt="Onpoint logo" className={styles.logo} />;
}

export default Logo;
