import ArticleCard from "./ArticleCard";
import styles from "../styles/articleList.module.css";
import { Link } from "react-router-dom";

const ArticleList = ({ articles, users }) => {
  return (
    <ul className={styles.articleList}>
      {articles &&
        articles.map((article) => {
          return (
            <div
              id={article.article_id}
              className={styles.articleCard}
              key={article.article_id}
            >
              <Link
                className={styles.defaultLink}
                to={`/articles/${article.article_id}`}
              >
                <ArticleCard
                  key={article.article_id}
                  article={article}
                  users={users}
                />
              </Link>
            </div>
          );
        })}
    </ul>
  );
};

export default ArticleList;
