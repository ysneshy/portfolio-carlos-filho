import React from 'react';
import Link from 'next/link';
import styles from '../styles/HomePage.module.css';
import Loading from '../components/Loading';
import Typewriter from 'typewriter-effect';
import { FaUserAstronaut, } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { Fade, Rotate, Zoom, Swing, Flip } from 'react-reveal';
import { DiAndroid, DiMsqlServer } from "react-icons/di";
import AkiraYXK from '../components/Orion';


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
      <br></br>
      <div>
      </div>
      <div className={styles.container}>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <Flip delay={3000} count={2}>
              <h4 className={styles.name}><span><FaUserAstronaut /></span>&nbsp;Carlos Augusto Diniz Filho</h4>
            </Flip>
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
          <div>
          </div>
          <div className={styles.illustration} >
            <Flip delay={6000} count={2}>
              <span><img src="background.svg"  width="290px" alt="software" /></span>
            </Flip>
          </div>
          <AkiraYXK />
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
