import React from "react";
import styles from "./styles.module.scss";
export default function Loading() {
  return (
    <main className={styles.loaderer}>
      <span className={styles.loader}></span>
      <h6>CARREGANDO...</h6>
    </main>
  );
}
