import { useEffect, useState } from "react";
import styles from "../styles/article.module.css";
import { useParams } from "react-router-dom";

import ArticleContainer from "../components/ArticleContainer";
import Loading from "../components/Loading";
import { getAllUsers } from "../utils/usersApi";
import { getArticle } from "../utils/articlesApi";
import { getArticleComments } from "../utils/commentsApi";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    article_id &&
      getArticle(article_id).then((article) => {
        setArticle(article);
        setIsLoading(false);
      });

    getAllUsers().then(({ data }) => {
      setUsers(data.users);
    });
    getArticleComments(article_id).then((articleComments) => {
      setComments(articleComments);
    });
  }, [article_id]);

  return (
    <main className={styles.article}>
      {isLoading ? (
        <Loading />
      ) : (
        <ArticleContainer
          article={article}
          users={users}
          comments={comments}
          setComments={setComments}
          setIsLoggedIn={setIsLoggedIn}
          setArticle={setArticle}
        />
      )}
    </main>
  );
};

export default Article;
