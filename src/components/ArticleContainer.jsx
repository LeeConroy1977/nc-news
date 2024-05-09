import { useState } from "react";
import styles from "../styles/articleContainer.module.css";
import ArticleComments from "./ArticleComments";
import ArticleCommentsList from "./ArticleCommentsList";
import CommentsController from "./CommentsController";
import MainArticleCard from "./MainArticleCard";

const ArticleContainer = ({
  article,
  users,
  comments,
  setIsLoggedIn,
  setArticle,
}) => {
  const [isComments, setIsComments] = useState(false);

  function handleViewComments() {
    return setIsComments((isComments) => !isComments);
  }

  return (
    <div className={styles.articleContainer}>
      <MainArticleCard
        article={article}
        users={users}
        setIsLoggedIn={setIsLoggedIn}
        setArticle={setArticle}
      />
      <CommentsController
        handleViewComments={handleViewComments}
        isComments={isComments}
      />
      {isComments && <ArticleComments comments={comments} users={users} />}
    </div>
  );
};

export default ArticleContainer;
