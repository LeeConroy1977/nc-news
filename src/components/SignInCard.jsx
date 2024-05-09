import styles from "../styles/signInCard.module.css";
import AvatarList from "./AvatarList";
import UserForm from "./UserForm";

const SignInCard = ({
  avatars,
  handleClick,
  userAvatarSelection,
  setUserAvatarSelection,
  userObj,
}) => {
  return (
    <div className={styles.signInCard}>
      <div className={styles.leftContainer}>
        <h3 className={styles.avatarTitle}>Choose A User</h3>
        <AvatarList avatars={avatars} handleClick={handleClick} />
      </div>
      <div className={styles.rightContainer}>
        <h3 className={styles.formTitle}>Press Submit</h3>
        <UserForm
          userAvatarSelection={userAvatarSelection}
          setUserAvatarSelection={setUserAvatarSelection}
          userObj={userObj}
        />
      </div>
    </div>
  );
};

export default SignInCard;
