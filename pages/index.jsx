import React from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Loading from '../components/Loading';
import Typewriter from 'typewriter-effect';
import { FaUserAstronaut, } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { Fade, Rotate } from 'react-reveal';
import Swing from 'react-reveal/Swing';
import {
  DiAndroid,
  DiMsqlServer,
} from "react-icons/di";

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
      <br></br>
      <div>
      </div>
      <div className={styles.container}>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}><FaUserAstronaut />&nbsp;Carlos Augusto Diniz Filho</h1>
            <Swing delay={10000} count={2}>
            <h6 className={styles.bio}>Desenvolvedor Web Front-End</h6>
            </Swing>
            <Link href="/projects">
            <Rotate delay={1000} count={2}>
              <button className={styles.button}><DiAndroid />Meus projetos</button>
              </Rotate>
            </Link>
            <Link href="/contact">
            <Rotate delay={2800} count={2}>
              <button className={styles.outlined}><DiMsqlServer />Contato</button>
              </Rotate>
            </Link>
            <div></div>
            <br></br>
            <Link href="/settings">
            <Rotate delay={4400} count={2}>
              <button className={styles.outlined}><FaMailchimp />&nbsp;Troca tema</button>
              </Rotate>
            </Link>
          </div>
          <div>
          </div>
       <img src="background.svg" className={styles.illustration} alt="" />
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
