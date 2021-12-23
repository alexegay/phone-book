import React from "react";
import styles from "./styles.module.scss";

export const Input = (props: any) => {
  return <input {...props} className={styles.input} />;
};
