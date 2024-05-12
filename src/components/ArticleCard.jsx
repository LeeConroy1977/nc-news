import styles from "../styles/articleCard.module.css";
import AuthorAvatarContainer from "./AuthorAvatarContainer";

const ArticleCard = ({ article, users }) => {
  const {
    title,
    article_img_url,
    topic,

    author,
  } = article;

  let userName = "";
  let avatar_url = "";

  users &&
    users.map((user) => {
      if (author === user.username) {
        userName = user.username;
        avatar_url = user.avatar_url;
      }
    });

  const classname =
    article.topic === "coding"
      ? `${styles.category} ${styles.coding}`
      : article.topic === "football"
      ? `${styles.category} ${styles.football}`
      : article.topic === "cooking"
      ? `${styles.category} ${styles.cooking}`
      : styles.paginationNum;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.articleImage}
          src={article_img_url}
          alt={`Image for the article ${article.title}`}
        />
        <span className={classname}>{topic}</span>
        <AuthorAvatarContainer
          author={author}
          avatar_url={avatar_url}
          containerClassname={"containerMainArticles"}
          avatarClassname={"avatarImageMainArticles"}
          nameClassname={"authorNameMainArticles"}
        />
      </div>
      <div className={styles.textArea}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
