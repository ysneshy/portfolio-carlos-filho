import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';


const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <div className={styles.stars}></div>
          <div className={styles.stars2}></div>
          <div className={styles.stars3}></div>
          <div className={styles.shooting_star}></div>
          <div className={styles.shooting_star} ></div>
          <div className={styles.terra}></div>
          <div className={styles.containere}></div>
          <div className={styles.loader}></div>
          <div className={styles.earth}></div>
          <div className={styles.planetEarth}></div>
          <div className={styles.planetMars}></div>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Bottombar />

    </>
  );
};

export default Layout;


