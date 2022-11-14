import React from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Loading from '../components/Loading';
import Typewriter from 'typewriter-effect';
import { FaUserAstronaut, } from "react-icons/fa";
import {
  DiAndroid,
  DiMsqlServer,
} from "react-icons/di";
import { FaMailchimp } from "react-icons/fa";
import { Rotate } from "react-reveal";

export default function HomePage() {

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);

    }, 1000);
  }, []);

  return (
    <>

      {!loading ? (
        <Loading />
      ) : (

        <Typewriter
          options={{
            strings: ['Linguagem: Next, react, Sass.', 'Portfolio em Atualização.'],
            autoStart: true,
            loop: true,
            skipAddStyles: true,
          }}
        />
      )
      }
      <div>
      </div>
      <div className={styles.container}>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}><FaUserAstronaut />&nbsp;Carlos Augusto Diniz Filho</h1>
            <h6 className={styles.bio}>Desenvolvedor Web Front-End</h6>
            <Link href="/projects">
              <button className={styles.button}><DiAndroid />Meus projetos</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}><DiMsqlServer />Contato</button>
            </Link>
            <div></div>
            <br></br>
            <Link href="/settings">
              <button className={styles.outlined}><FaMailchimp />&nbsp;Troca tema</button>
            </Link>
          </div>
          <Rotate delay={2000} duration={1000} count={5}><img src="background.svg" className={styles.illustration} alt="" /></Rotate>
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
