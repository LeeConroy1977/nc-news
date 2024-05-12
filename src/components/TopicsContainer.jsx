import styles from "../styles/topicsContainer.module.css";
import TopicsList from "./TopicsList";

const TopicsContainer = ({
  topics,
  selectedTopic,
  setSelectedTopic,
  setPage,
  setSortedBy,
  setOrderBy,
}) => {
  return (
    <div className={styles.topicsConatainer}>
      <TopicsList
        topics={topics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        setPage={setPage}
        setSortedBy={setSortedBy}
        setOrderBy={setOrderBy}
      />
    </div>
  );
};

export default TopicsContainer;
