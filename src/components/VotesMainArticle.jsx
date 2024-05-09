import styles from "../styles/votesMainArticle.module.css";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const VotesMainArticle = ({
  numVotes,
  handleDecVotesClick,
  handleIncVotesClick,
}) => {
  return (
    <div className={styles.voteDetails}>
      <span className={styles.thumbUp} onClick={handleIncVotesClick}>
        {<FaRegThumbsUp />}
      </span>
      <span className={styles.thumbDown} onClick={handleDecVotesClick}>
        {<FaRegThumbsDown />}
      </span>
      <p className={styles.numVotes}>{numVotes}</p>
    </div>
  );
};

export default VotesMainArticle;
