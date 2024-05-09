import styles from "../styles/avatarCard.module.css";

const AvatarCard = ({ avatar, handleClick }) => {
  return (
    <div className={styles.avatarBox} onClick={() => handleClick(avatar.id)}>
      <img className={styles.avatarImage} src={avatar.avatar_url} alt="" />
      <p className={styles.avatarName}>{avatar.name}</p>
    </div>
  );
};

export default AvatarCard;
