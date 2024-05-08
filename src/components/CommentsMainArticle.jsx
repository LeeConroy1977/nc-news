import styles from "../styles/commentsMainArticle.module.css";
import { FaRegCommentAlt } from "react-icons/fa";

const CommentsMainArticle = ({ numComments }) => {
  return (
    <div className={styles.commentsDetails}>
      <span className={styles.commentLogo}>{<FaRegCommentAlt />}</span>
      <p className={styles.numComments}>{numComments}</p>
    </div>
  );
};

export default CommentsMainArticle;
