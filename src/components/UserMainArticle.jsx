import styles from "../styles/userMainArticle.module.css";
const UserMainArticle = ({ userName, avatar_url }) => {
  return (
    <div className={styles.userDetail}>
      <img className={styles.userAvatar} src={avatar_url} alt="" />
      <p className={styles.authorName}>{userName}</p>
    </div>
  );
};

export default UserMainArticle;
