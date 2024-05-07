import React, { useEffect, useState } from "react";
import { getAllArticles } from "../utils/articlesApi";
import { getAllUsers } from "../utils/usersApi";
import Loading from "../components/Loading";
import ArticleList from "../components/ArticleList";
import styles from "../styles/articles.module.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then(({ data }) => {
      console.log(data.results.articles);
      setArticles(data.results.articles);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      console.log(data.users);
      setUsers(data.users);
    });
  }, []);

  return (
    <div className={styles.articles}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2 className={styles.categoryTitle}>Category</h2>
          <ArticleList articles={articles} users={users} />
        </>
      )}
    </div>
  );
};

export default Articles;
