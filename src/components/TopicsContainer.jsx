import styles from "../styles/topicsContainer.module.css";
import TopicsList from "./TopicsList";

const TopicsContainer = ({ topics, setSelectedTopic, setPage }) => {
  return (
    <div className={styles.topicsConatainer}>
      <TopicsList
        topics={topics}
        setSelectedTopic={setSelectedTopic}
        setPage={setPage}
      />
    </div>
  );
};

export default TopicsContainer;
