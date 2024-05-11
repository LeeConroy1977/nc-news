import React, { useEffect, useState } from "react";
import { getAllArticles } from "../utils/articlesApi";
import { getAllUsers } from "../utils/usersApi";
import Loading from "../components/Loading";
import ArticleList from "../components/ArticleList";
import styles from "../styles/articles.module.css";
import { useSearchParams } from "react-router-dom";

const Articles = ({ selectedTopic }) => {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const topicParam = searchParams.get("topic");
  console.log(topicParam);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(topicParam).then(({ data }) => {
      setArticles(data.results.articles);
      setIsLoading(false);
    });
  }, [topicParam]);

  console.log(articles);
  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data.users);
    });
  }, []);

  return (
    <div className={styles.articles}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2 className={styles.categoryTitle}>{selectedTopic}</h2>
          <ArticleList articles={articles} users={users} />
        </>
      )}
    </div>
  );
};

export default Articles;
