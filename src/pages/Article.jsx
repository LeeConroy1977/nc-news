import { useEffect, useState } from "react";
import styles from "../styles/article.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArticleContainer from "../components/ArticleContainer";
import Loading from "../components/Loading";
import { getAllUsers } from "../utils/usersApi";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const { article_id } = useParams();

  const loudSpeakerApi = axios.create({
    baseURL: `https://nc-news-northcoders-project.onrender.com/api/articles/${article_id}`,
  });

  useEffect(() => {
    setIsLoading(true);
    loudSpeakerApi.get(loudSpeakerApi.baseURL).then(({ data }) => {
      console.log(data.article);
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      console.log(data.users);
      setUsers(data.users);
    });
  }, []);

  return (
    <main className={styles.article}>
      {isLoading ? (
        <Loading />
      ) : (
        <ArticleContainer article={article} users={users} />
      )}
    </main>
  );
};

export default Article;
