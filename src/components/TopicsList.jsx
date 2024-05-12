import { Link } from "react-router-dom";
import TopicsCard from "../components/TopicsCard";
import styles from "../styles/topicsList.module.css";

const TopicsList = ({ topics, setSelectedTopic, setPage }) => {
  return (
    <ul className={styles.topicsList}>
      <li className={styles.topicHeader} key="">
        TOPICS
      </li>
      <Link to="/" className={styles.link}>
        <li
          className={styles.defaultTopic}
          key="articles"
          onClick={() => setPage(1)}
        >
          All
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
                />
              </Link>
            </>
          );
        })}
    </ul>
  );
};

export default TopicsList;
