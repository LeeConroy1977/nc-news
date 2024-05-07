import ArticleCard from "./ArticleCard";
import styles from "../styles/articleList.module.css";

const ArticleList = ({ articles, users }) => {
  return (
    <ul className={styles.articleList}>
      {articles &&
        articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              article={article}
              users={users}
            />
          );
        })}
    </ul>
  );
};

export default ArticleList;
