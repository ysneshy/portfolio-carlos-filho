import React from 'react';
import ButtonCV from '../components/ButtonCV';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';
import { FaUserAstronaut,} from "react-icons/fa";
import { Fade, Rotate } from 'react-reveal';

const ContactPage = () => {

  return (
    <>

      <div className={styles.container}>
        <div>
          <h3 className={styles.heading}><FaUserAstronaut />&nbsp;Encontre-me nas Redes Sociais.</h3>
          <div className={styles.illustration}>
          <Rotate Rotate delay={1000} count={5}>
            <img src="astrocontact.svg" width="200px"  alt="software" />
            </Rotate>
          </div>
          <ContactCode />
          <ButtonCV />
        </div>
        <div>
          <h3 className={styles.heading}>Ou envie um e-mail</h3>
          <form className={styles.form}
            action="https://formsquash.io/f/tdoUhsw05p5DZQxr9syO"
            method="POST">
            <div className={styles.flex}>
              <div>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="name">Assunto</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
