import React, { useEffect, useState } from "react";
import { getAllArticles } from "../utils/articlesApi";
import { getAllUsers } from "../utils/usersApi";
import Loading from "../components/Loading";
import ArticleList from "../components/ArticleList";
import styles from "../styles/articles.module.css";
import { useSearchParams } from "react-router-dom";
import PaginationList from "../components/PaginationList";

const Articles = ({ page, setPage, selectedTopic }) => {
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState("");
  const [currentArticles, setCurrentArticles] = useState(null);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(6);

  const topicParam = searchParams.get("topic");
  const sortedByParam = searchParams.get("sorted_by");
  const orderedByParam = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    getAllArticles(topicParam, sortedByParam, orderedByParam, limit, page).then(
      (results) => {
        setArticles(results.articles);
        setCurrentArticles(results.articles.length);
        setIsLoading(false);
        setTotalArticles(results.total_count.total_count);
        console.log(page);
      }
    );
  }, [topicParam, sortedByParam, orderedByParam, limit, page]);

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data.users);
    });
  }, []);

  function getTotalPages(totalArticles, limit) {
    return Math.ceil(totalArticles / limit);
  }

  const numPages = getTotalPages(totalArticles, limit);
  console.log(numPages);

  const paginationArr = [...Array(numPages).keys()].map((num) => num + 1);
  console.log(paginationArr);

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <p className={styles.currentArticles}>{`Articles: ${totalArticles}`}</p>
        <PaginationList
          paginationArr={paginationArr}
          setPage={setPage}
          page={page}
          selectedTopic={selectedTopic}
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <ArticleList
          articles={articles}
          users={users}
          selectedTopic={selectedTopic}
        />
      )}
    </div>
  );
};

export default Articles;
