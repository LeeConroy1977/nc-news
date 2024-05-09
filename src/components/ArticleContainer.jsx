import { useContext, useEffect, useRef, useState } from "react";
import styles from "../styles/articleContainer.module.css";
import ArticleComments from "./ArticleComments";
import CommentsController from "./CommentsController";
import MainArticleCard from "./MainArticleCard";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { postArticleComment } from "../utils/commentsApi";

const ArticleContainer = ({
  article,
  users,
  comments,
  setComments,
  setArticle,
}) => {
  const { user } = useContext(UserContext);
  const { username } = user;
  const { article_id } = useParams();
  const [isComments, setIsComments] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userComment, setUserComment] = useState({
    body: "",
  });
  const { body } = userComment;

  const isFirst = useRef(true);
  useEffect(() => {
    if (!isFirst.current) {
      postArticleComment(article_id, body, username).then((comment) => {
        console.log(comment);
        setComments([comment, ...comments]);
      });
    }
  }, [userComment]);
  console.log(comments);

  useEffect(() => {
    isFirst.current = false;
  }, []);

  function handleViewComments() {
    return setIsComments((isComments) => !isComments);
  }

  return (
    <div className={styles.articleContainer}>
      <MainArticleCard
        article={article}
        users={users}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        setArticle={setArticle}
      />
      <CommentsController
        handleViewComments={handleViewComments}
        isComments={isComments}
        setIsComments={setIsComments}
        setIsLoggedIn={setIsLoggedIn}
        setUserComment={setUserComment}
      />
      {isComments && <ArticleComments comments={comments} users={users} />}
    </div>
  );
};

export default ArticleContainer;
