import { useState } from "react";
import styles from "../styles/commentForm.module.css";

const CommentForm = ({ setUserComment }) => {
  const [commentBody, setCommentBody] = useState("");

  function handleCommentSubmit(e) {
    e.preventDefault();
    setUserComment((obj) => (obj = { ...obj, body: commentBody }));
    setCommentBody("");
  }

  return (
    <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
      <textarea
        className={styles.textArea}
        required
        name="comment"
        id="comment"
        method="POST"
        placeholder="Add Comment..."
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
      ></textarea>
      <button className={styles.formBtn}>Submit</button>
    </form>
  );
};

export default CommentForm;
