import styles from "../styles/mainArticleCard.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { patchArticle } from "../utils/articlesApi";
import { useParams } from "react-router-dom";
import VallidationModel from "./VallidationModel";
import AuthorAvatarContainer from "./AuthorAvatarContainer";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const MainArticleCard = ({
  article,
  users,
  setArticle,
  isLoggedIn,
  setIsLoggedIn,
}) => {
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

  let userName = "";
  let avatar_url = "";

  const dateStamp = new Date(created_at).toLocaleDateString();
  const timeStamp = new Date(created_at).toLocaleTimeString();

  const isFirst = useRef(true);

  useEffect(() => {
    if (!isFirst.current) {
      patchArticle(article_id, inc_votes).then((article) => {
        console.log(article);
        setArticle(article);
      });
    }
  }, [inc_votes, votesCount]);

  useEffect(() => {
    isFirst.current = false;
  }, []);

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

  const classname =
    author === "grumpy19"
      ? styles.paulGrump
      : author === "tickle122"
      ? styles.tomTickle
      : author === "jessjelly"
      ? styles.jessJelly
      : author === "cooljmessy"
      ? styles.peterMessy
      : author === "weegembump"
      ? styles.gemmaBump
      : author === "happyamy2016"
      ? styles.amyHappy
      : "";

  const topicClassname =
    topic === "coding"
      ? styles.coding
      : topic === "football"
      ? styles.football
      : topic === "cooking"
      ? styles.cooking
      : "";
  return (
    <div className={styles.mainArticleCard}>
      <VallidationModel isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className={styles.imageContainer}>
        <img className={styles.articleImage} src={article_img_url} alt="" />
        <div className={`${styles.iconBox} ${classname}`}>
          <AuthorAvatarContainer
            author={author}
            avatar_url={avatar_url}
            containerClassname={"containerArticle"}
            avatarClassname={"avatarImageArticle"}
            nameClassname={"authorNameArticle"}
          />
          <div className={styles.commentsIconBox}>
            <FaRegCommentAlt className={styles.commentsIcon} />
            <p className={styles.iconCommentCount}>{comment_count}</p>
          </div>
          <div className={styles.votesBox}>
            <div className={styles.votesContainer}>
              <FaRegThumbsUp
                className={styles.thumbUp}
                onClick={handleIncVotesClick}
              />
              <FaRegThumbsDown
                className={styles.thumbDown}
                onClick={handleDecVotesClick}
              />
              <p className={styles.votesCount}>{votes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${topicClassname}`}>{topic}</span>
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
    </div>
  );
};

export default MainArticleCard;
