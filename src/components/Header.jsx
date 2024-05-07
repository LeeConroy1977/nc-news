import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.css";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <p className={styles.logoText}>LoudSpeaker</p>
        </div>
        <div className={styles.rightContainer}>
          <ul className={styles.navLinks}>
            <NavLink to="/">
              <li className={styles.link}>ARTICLES</li>
            </NavLink>
            <li className={styles.link}>COMPOSE</li>
          </ul>
          <span className={styles.userAvatar}>{<RxAvatar />}</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
