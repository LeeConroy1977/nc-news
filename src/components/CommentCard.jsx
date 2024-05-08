import React from "react";
import UserMainArticle from "../components/UserMainArticle";
import styles from "../styles/commentCard.module.css";
import VotesDetails from "../components/VotesDetails";

const CommentCard = ({ comment, users }) => {
  const { comment_id, body, article_id, author, votes, created_at } = comment;

  let avatar_url;

  const dateStamp = new Date(created_at).toLocaleDateString();
  const timeStamp = new Date(created_at).toLocaleTimeString();

  users &&
    users.map((user) => {
      if (user.username === author) {
        avatar_url = user.avatar_url;
      }
    });

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
    </li>
  );
};

export default CommentCard;
