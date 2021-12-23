import React, { ReactChild, ReactChildren } from "react";
import styles from "./styles.module.scss"

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export const Card = ({ children }: AuxProps) => {
  return <div className={styles.container}>{children}</div>;
};
