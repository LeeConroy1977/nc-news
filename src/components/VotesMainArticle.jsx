import styles from "../styles/votesMainArticle.module.css";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const VotesMainArticle = ({ numVotes }) => {
  return (
    <div className={styles.voteDetails}>
      <span className={styles.thumbUp}>{<FaRegThumbsUp />}</span>
      <span className={styles.thumbDown}>{<FaRegThumbsDown />}</span>
      <p className={styles.numVotes}>{numVotes}</p>
    </div>
  );
};

export default VotesMainArticle;
