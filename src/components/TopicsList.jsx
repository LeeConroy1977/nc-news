import { Link } from "react-router-dom";
import TopicsCard from "../components/TopicsCard";
import styles from "../styles/topicsList.module.css";
import { useState } from "react";

const TopicsList = ({
  topics,
  setSelectedTopic,
  setPage,
  selectedTopic,
  setSortedBy,
  setOrderBy,
}) => {
  // const [isSelected, setIsSelected] = useState(selectedTopic);
  const classname =
    selectedTopic === "Articles" || selectedTopic === ""
      ? styles.selected
      : styles.defaultTopic;

  function handleArticleClick() {
    setPage(1);
    setSelectedTopic("Articles");
    setSortedBy("created_at");
    setOrderBy("desc");
  }

  return (
    <ul className={styles.topicsList}>
      <li className={styles.topicHeader} key="">
        TOPICS
      </li>
      <Link to="/" className={styles.link}>
        <li className={classname} key="articles" onClick={handleArticleClick}>
          Articles
        </li>
      </Link>
      {topics &&
        topics.map((topic) => {
          return (
            <>
              <Link
                to={`/articles?topic=${topic.slug}`}
                className={styles.link}
              >
                <TopicsCard
                  topic={topic}
                  key={topic.slug}
                  setSelectedTopic={setSelectedTopic}
                  setPage={setPage}
                  selectedTopic={selectedTopic}
                />
              </Link>
            </>
          );
        })}
    </ul>
  );
};

export default TopicsList;
