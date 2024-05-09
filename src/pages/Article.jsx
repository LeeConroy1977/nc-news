import { useEffect, useState } from "react";
import styles from "../styles/article.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArticleContainer from "../components/ArticleContainer";
import Loading from "../components/Loading";
import { getAllUsers } from "../utils/usersApi";
import { getArticle } from "../utils/articlesApi";
import { getArticleComments } from "../utils/commentsApi";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();

  // const loudSpeakerApi = axios.create({
  //   baseURL: `https://nc-news-northcoders-project.onrender.com/api/articles/${article_id}`,
  // });

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then((article) => {
      console.log(article);
      setArticle(article);
      setIsLoading(false);
    });
    getAllUsers().then(({ data }) => {
      console.log(data.users);
      setUsers(data.users);
    });
    getArticleComments(article_id).then((articleComments) => {
      console.log(articleComments);
      setComments(articleComments);
    });
  }, [article_id]);

  return (
    <main className={styles.article}>
      {isLoading ? (
        <Loading />
      ) : (
        <ArticleContainer article={article} users={users} comments={comments} />
      )}
    </main>
  );
};

export default Article;
