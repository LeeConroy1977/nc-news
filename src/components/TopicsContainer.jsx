import styles from "../styles/topicsContainer.module.css";
import TopicsList from "./TopicsList";

const TopicsContainer = ({ topics, setSelectedTopic }) => {
  return (
    <div className={styles.topicsConatainer}>
      <TopicsList topics={topics} setSelectedTopic={setSelectedTopic} />
    </div>
  );
};

export default TopicsContainer;
