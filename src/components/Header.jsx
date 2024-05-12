import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.css";
import { RxAvatar } from "react-icons/rx";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const { username, avatar_url } = user;

  function handleSignOut() {
    if (username) {
      setUser({});
    }
  }

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          <div className={styles.logo}>
            <img
              className={styles.logoImage}
              src="https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
              alt=""
            />

            <p className={styles.logoText}>Mr News</p>
          </div>
        </NavLink>
        <div className={styles.rightContainer}>
          <ul className={styles.navLinks}>
            <NavLink to="/" className={styles.navLinks}>
              <li className={styles.link}>ARTICLES</li>
            </NavLink>
            {username ? (
              <NavLink to="/" className={styles.navLinks}>
                <li className={styles.link} onClick={handleSignOut}>
                  SIGN OUT
                </li>
              </NavLink>
            ) : (
              <NavLink to="/signIn" className={styles.navLinks}>
                <li className={styles.link} onClick={handleSignOut}>
                  SIGN IN
                </li>
              </NavLink>
            )}
          </ul>
          <span className={styles.userAvatar}>
            {username ? (
              <img className={styles.navImage} src={avatar_url} alt="" />
            ) : (
              <RxAvatar />
            )}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
