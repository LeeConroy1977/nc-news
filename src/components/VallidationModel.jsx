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
      <h4>You need to be signed in to vote!</h4>
      <Link className={styles.signInBtn} to="/signIn">
        Sign In
      </Link>
    </div>
  );
};

export default VallidationModel;
