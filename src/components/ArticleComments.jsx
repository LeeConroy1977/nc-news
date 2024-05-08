import styles from "../styles/articleComments.module.css";

import ArticleCommentsList from "./ArticleCommentsList";

const ArticleComments = ({ comments, users }) => {
  return (
    <div className={styles.articleComments}>
      <ArticleCommentsList comments={comments} users={users} />
    </div>
  );
};

export default ArticleComments;
