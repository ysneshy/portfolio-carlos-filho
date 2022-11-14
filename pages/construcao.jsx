import React from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Typewriter from 'typewriter-effect';
import {
  FaMailchimp,
  FaUserAstronaut,
  FaLaptopCode,
  FaHiking,
} from "react-icons/fa";


export default function HomePage() {


  return (
    <>

      <Typewriter
        options={{
          strings: ['Linguagem: Next, react, JavaScript, Sass, Css.', 'Portfolio em constante Atualização.'],
          autoStart: true,
          loop: true,
          skipAddStyles: true,
        }}
      />
      <br></br>
      <div className={styles.container}>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}><FaLaptopCode />&nbsp;Pagina em construcao</h1>
            <h6 className={styles.bio}><FaHiking />&nbsp;area em construcao</h6>
            <Link href="/">
              <button className={styles.button}><FaUserAstronaut />&nbsp;Volta Para Home?</button>
            </Link>
            <div></div>
            <br></br>
            <Link href="/settings">
              <button className={styles.outlined}><FaMailchimp />&nbsp;Escolhe thema?</button>
            </Link>
          </div>
          <img src="https://imgur.com/YfTnTcu.png" className={styles.foreground} alt="background" />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
