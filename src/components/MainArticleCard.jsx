import styles from "../styles/mainArticleCard.module.css";
import UserMainArticle from "./UserMainArticle";
import CommentsMainArticle from "./CommentsMainArticle";
import VotesMainArticle from "./VotesMainArticle";

const MainArticleCard = ({ article, users }) => {
  const {
    title,
    body,
    author,
    votes,
    comment_count,
    article_img_url,
    created_at,
    topic,
  } = article;

  let userName = "";
  let avatar_url = "";

  const dateStamp = new Date(created_at).toLocaleDateString();
  const timeStamp = new Date(created_at).toLocaleTimeString();

  users &&
    users.map((user) => {
      if (author === user.username) {
        userName = user.username;
        avatar_url = user.avatar_url;
      }
    });
  return (
    <div className={styles.mainArticleCard}>
      <div className={styles.textContainer}>
        <span className={styles.category}>{topic}</span>
        <h2 className={styles.articleTitle}>{title}</h2>
        <p className={styles.articleBody}>{body}</p>
        <div className={styles.time}>
          <span className={styles.timeStamp}>
            <i>{timeStamp}</i>
          </span>
          <span className={styles.dateStamp}>
            <i>{dateStamp}</i>
          </span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.articleImage} src={article_img_url} alt="" />
        <div className={styles.articleStats}>
          <UserMainArticle userName={userName} avatar_url={avatar_url} />
          <CommentsMainArticle numComments={comment_count} />
          <VotesMainArticle numVotes={votes} />
        </div>
      </div>
    </div>
  );
};

export default MainArticleCard;
