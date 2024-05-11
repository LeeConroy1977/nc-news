import { Link } from "react-router-dom";
import styles from "../styles/vallidationModel.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

const VallidationModel = ({ isLoggedIn, setIsLoggedIn }) => {
  function handleModelclick() {
    setIsLoggedIn(true);
  }

  const classname = isLoggedIn ? styles.hidden : styles.visible;

  return (
    <div className={classname}>
      <div className={styles.btn} onClick={handleModelclick}>
        {<IoMdCloseCircleOutline />}
      </div>
      <div className={styles.validationMsg}>
        <img
          className={styles.validationImage}
          src="https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553"
          alt=""
        />
        <h4>You need to be signed in...</h4>
      </div>
      <Link className={styles.signInBtn} to="/signIn">
        Sign In
      </Link>
    </div>
  );
};

export default VallidationModel;
