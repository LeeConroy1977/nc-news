import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import styles from "../styles/commentCard.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import AuthorAvatarContainer from "./AuthorAvatarContainer";

const CommentCard = ({ comment, users, setDeleteCommentId, setComments }) => {
  const { comment_id, body, author, created_at } = comment;

  const { user } = useContext(UserContext);
  const { username } = user;

  let avatar_url;

  const dateStamp = new Date(created_at).toLocaleDateString();
  const timeStamp = new Date(created_at).toLocaleTimeString();

  const isUser = author === username;

  users &&
    users.map((user) => {
      if (user.username === author) {
        avatar_url = user.avatar_url;
      }
    });

  function handleDeleteCommentClick(id) {
    if (Number(id) === comment_id) {
      setDeleteCommentId(id);
      setComments((comment) =>
        comment.filter((comment) => comment.comment_id !== Number(id))
      );
    }
  }

  return (
    <li className={styles.commentCard}>
      <AuthorAvatarContainer
        author={author}
        avatar_url={avatar_url}
        containerClassname={"containerComments"}
        avatarClassname={"avatarImageComments"}
        nameClassname={"authorNameComments"}
      />
      <div className={styles.commentBodyBox}>
        <p className={styles.commentBody}>{body}</p>
        <div className={styles.time}>
          <span className={styles.timeStamp}>
            <i>{timeStamp}</i>
          </span>

          <span className={styles.dateStamp}>
            <i>{dateStamp}</i>
          </span>
        </div>
      </div>

      {isUser && (
        <IoMdCloseCircleOutline
          id={comment_id}
          onClick={(e) => handleDeleteCommentClick(e.target.id)}
          className={styles.deleteBtn}
        />
      )}
    </li>
  );
};

export default CommentCard;
