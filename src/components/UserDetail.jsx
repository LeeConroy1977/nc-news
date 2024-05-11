import styles from "../styles/userDetails.module.css";

const UserDetail = ({ userName, avatar_url }) => {
  return (
    <div className={styles.userDetail}>
      <div className={styles.topContainer}>
        <img className={styles.userAvatar} src={avatar_url} alt="" />
        <p className={styles.authorName}>{userName}</p>
      </div>
    </div>
  );
};

export default UserDetail;
