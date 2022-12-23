import React from "react";
import styles from "../Loading/styles.module.sass";
export default function Loading() {
  return (
    <main className={styles.loaderer}>
      <span className={styles.loader}></span>
      <h6>&nbsp;CARREGANDO...</h6>
    </main>
  );
}
