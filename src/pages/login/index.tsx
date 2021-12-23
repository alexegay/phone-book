import React from "react";
import styles from "./styles.module.scss";
export const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>login</h1>
      <input type="text" />
      <input type="password" />
    </div>
  );
};
