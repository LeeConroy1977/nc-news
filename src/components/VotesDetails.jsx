import styles from "../styles/votesDetails.module.css";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

const VotesDetails = ({ numVotes }) => {
  return (
    <div className={styles.voteDetails}>
      <span className={styles.thumbUp}>{<FaRegThumbsUp />}</span>
      <span className={styles.thumbDown}>{<FaRegThumbsDown />}</span>
      <p>{numVotes}</p>
    </div>
  );
};

export default VotesDetails;
