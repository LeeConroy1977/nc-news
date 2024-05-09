import styles from "../styles/avatarList.module.css";
import AvatarCard from "./AvatarCard";

const AvatarList = ({ avatars, handleClick }) => {
  return (
    <ul className={styles.avatarList}>
      {avatars.map((avatar) => {
        return (
          <AvatarCard
            avatar={avatar}
            key={avatar.id}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
};

export default AvatarList;
