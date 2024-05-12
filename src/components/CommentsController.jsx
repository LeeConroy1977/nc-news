import styles from "../styles/commentsController.module.css";
import { MdOutlineExpandLess } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import CommentForm from "./CommentForm";
import { IoMdCloseCircleOutline } from "react-icons/io";
const CommentsController = ({
  handleViewComments,
  isComments,
  setIsComments,
  setIsLoggedIn,
  setUserComment,
  article,
}) => {
  const [isCommentClick, setIsCommentClick] = useState(false);
  const { user } = useContext(UserContext);
  const { username } = user;
  const { topic } = article;

  function handlePostCommentClick() {
    if (!username) {
      setIsCommentClick(false);
      setIsLoggedIn(false);
    }
    if (username) {
      setIsCommentClick((isCommentClick) => !isCommentClick);
      setIsComments(true);
    }
  }

  function handleCloseClick() {
    setIsCommentClick(false);
  }

  const classname = isCommentClick
    ? styles.commentsControllerExpanded
    : styles.commentsController;

  const topicClassname =
    topic === "coding"
      ? styles.coding
      : topic === "football"
      ? styles.football
      : topic === "cooking"
      ? styles.cooking
      : "";

  return (
    <div className={`${classname}  ${topicClassname}`}>
      <div className={styles.commentExpander}>
        {isComments ? (
          <>
            <p className={styles.expanderText}>Hide Comments</p>
            <MdOutlineExpandLess
              onClick={handleViewComments}
              className={styles.expandLess}
            />
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
      {!isCommentClick ? (
        <div className={styles.postExpander} onClick={handlePostCommentClick}>
          <p className={styles.postExpanderText}>Add Comment</p>
          <FaRegCommentAlt className={styles.commentIcon} />
        </div>
      ) : (
        <>
          <CommentForm setUserComment={setUserComment} />
          <IoMdCloseCircleOutline
            className={styles.commentformClose}
            onClick={handleCloseClick}
          />
        </>
      )}
    </div>
  );
};

export default CommentsController;
