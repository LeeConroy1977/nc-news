import styles from "../styles/articleContainer.module.css";
import MainArticleCard from "./MainArticleCard";

const ArticleContainer = ({ article, users }) => {
  return (
    <div className={styles.articleContainer}>
      <MainArticleCard article={article} users={users} />
    </div>
  );
};

export default ArticleContainer;
