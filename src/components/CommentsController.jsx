import styles from "../styles/commentsController.module.css";
import { MdOutlineExpandLess } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";

const CommentsController = ({ handleViewComments, isComments }) => {
  return (
    <div className={styles.commentsController}>
      <div className={styles.commentExpander}>
        {isComments ? (
          <>
            <MdOutlineExpandLess
              onClick={handleViewComments}
              className={styles.expandLess}
            />
            <p className={styles.expanderText}>Hide Comments</p>
          </>
        ) : (
          <>
            <p className={styles.expanderText}>View Comments</p>
            <MdOutlineExpandMore
              onClick={handleViewComments}
              className={styles.expandMore}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CommentsController;
