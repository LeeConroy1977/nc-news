import styles from "../styles/articleCommentsList.module.css";
import CommentCard from "./CommentCard";

const ArticleCommentsList = ({
  comments,
  users,
  setDeleteCommentId,
  setComments,
}) => {
  return (
    <ul className={styles.articleCommentsList}>
      {comments &&
        comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              users={users}
              key={comment.comment_id}
              setDeleteCommentId={setDeleteCommentId}
              setComments={setComments}
            />
          );
        })}
    </ul>
  );
};

export default ArticleCommentsList;
