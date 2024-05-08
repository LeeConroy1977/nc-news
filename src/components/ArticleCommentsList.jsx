import styles from "../styles/articleCommentsList.module.css";
import CommentCard from "./CommentCard";

const ArticleCommentsList = ({ comments, users }) => {
  return (
    <ul className={styles.articleCommentsList}>
      {comments &&
        comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              users={users}
              key={comment.comment_id}
            />
          );
        })}
    </ul>
  );
};

export default ArticleCommentsList;
