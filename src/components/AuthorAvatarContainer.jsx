import React from "react";
import styles from "../styles/authorAvatarContainer.module.css";

const AuthorAvatarContainer = ({
  containerClassname,
  avatarClassname,
  nameClassname,
  avatar_url,
  author,
}) => {
  const classname =
    author === "grumpy19"
      ? styles.paulGrump
      : author === "tickle122"
      ? styles.tomTickle
      : author === "jessjelly"
      ? styles.jessJelly
      : author === "cooljmessy"
      ? styles.peterMessy
      : author === "weegembump"
      ? styles.gemmaBump
      : author === "happyamy2016"
      ? styles.amyHappy
      : "";

  return (
    <div className={`${styles[containerClassname]} ${classname}`}>
      <img className={styles[avatarClassname]} src={avatar_url} alt="" />
      <p className={styles[nameClassname]}>{author}</p>
    </div>
  );
};

export default AuthorAvatarContainer;
