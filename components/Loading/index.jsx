import React from "react";
import styles from "./styles.module.sass";
export default function Loading() {
  return (
    <div className={styles.loaderw}>
      <div className={styles.loader}></div>
    </div>
  );
}
