import styles from "../styles/articleCard.module.css";
import CommentsDetails from "./CommentsDetails";
import UserDetail from "./UserDetail";
import VotesDetails from "./VotesDetails";

const ArticleCard = ({ article, users }) => {
  const {
    title,
    article_img_url,
    topic,
    created_at,
    votes,
    comment_count,
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

  return (
    <>
      <div className={styles.topContainer}>
        <img
          className={styles.articleImage}
          src={article_img_url}
          alt={`Image for the article ${article.title}`}
        />
        <span className={styles.category}>{topic}</span>
      </div>

      <div className={styles.bottomContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.articleDetails}>
          <div className={styles.userBox}>
            <UserDetail
              timeStamp={created_at}
              userName={userName}
              avatar_url={avatar_url}
            />
          </div>
          <div className={styles.articleStats}>
            <CommentsDetails numComments={comment_count} />
            <VotesDetails numVotes={votes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
