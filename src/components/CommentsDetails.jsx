import styles from "../styles/commentsDetails.module.css";
import { FaRegCommentAlt } from "react-icons/fa";

const CommentsDetails = ({ numComments }) => {
  return (
    <div className={styles.commentsDetails}>
      <span className={styles.commentLogo}>{<FaRegCommentAlt />}</span>
      <p className={styles.numComments}>{numComments}</p>
    </div>
  );
};

export default CommentsDetails;
