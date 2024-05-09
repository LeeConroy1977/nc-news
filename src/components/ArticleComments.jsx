import styles from "../styles/articleComments.module.css";

import ArticleCommentsList from "./ArticleCommentsList";

const ArticleComments = ({
  comments,
  users,
  setDeleteCommentId,
  setComments,
}) => {
  return (
    <div className={styles.articleComments}>
      <ArticleCommentsList
        comments={comments}
        users={users}
        setDeleteCommentId={setDeleteCommentId}
        setComments={setComments}
      />
    </div>
  );
};

export default ArticleComments;
