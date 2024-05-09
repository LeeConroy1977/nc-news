import styles from "../styles/mainArticleCard.module.css";
import UserMainArticle from "./UserMainArticle";
import CommentsMainArticle from "./CommentsMainArticle";
import VotesMainArticle from "./VotesMainArticle";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { patchArticle } from "../utils/articlesApi";
import { useParams } from "react-router-dom";
import VallidationModel from "./VallidationModel";

const MainArticleCard = ({ article, users, setArticle }) => {
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
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const { username } = user;
  const [votesCount, setVotesCount] = useState(votes);
  const [inc_votes, setInc_votes] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  let userName = "";
  let avatar_url = "";

  const dateStamp = new Date(created_at).toLocaleDateString();
  const timeStamp = new Date(created_at).toLocaleTimeString();

  useEffect(() => {
    patchArticle(article_id, inc_votes).then((article) => {
      console.log(article);
      setArticle(article);
    });
  }, [inc_votes, votesCount]);

  function handleIncVotesClick() {
    if (!username) {
      return setIsLoggedIn(false);
    }
    setVotesCount((c) => c + 1);
    setInc_votes(1);
  }
  function handleDecVotesClick() {
    if (!username) {
      return setIsLoggedIn(false);
    }
    setVotesCount((c) => c - 1);
    setInc_votes(-1);
  }

  users &&
    users.map((user) => {
      if (author === user.username) {
        userName = user.username;
        avatar_url = user.avatar_url;
      }
    });
  return (
    <div className={styles.mainArticleCard}>
      <VallidationModel isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
          <VotesMainArticle
            numVotes={votesCount}
            handleIncVotesClick={handleIncVotesClick}
            handleDecVotesClick={handleDecVotesClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MainArticleCard;
