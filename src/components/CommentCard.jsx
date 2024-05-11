import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserMainArticle from "../components/UserMainArticle";
import styles from "../styles/commentCard.module.css";
import VotesDetails from "../components/VotesDetails";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CommentCard = ({ comment, users, setDeleteCommentId, setComments }) => {
  const { comment_id, body, article_id, author, votes, created_at } = comment;

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
      console.log(Number(id), comment_id);
      console.log("this ran!!");
      setDeleteCommentId(id);
      setComments((comment) =>
        comment.filter((comment) => comment.comment_id !== Number(id))
      );
    }
  }

  return (
    <li className={styles.commentCard}>
      <div className={styles.commentAuthorBox}>
        <UserMainArticle avatar_url={avatar_url} />
        <p className={styles.author}>{author}</p>
      </div>
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
      <div className={styles.commentVoteBox}>
        <VotesDetails numVotes={votes} />
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
