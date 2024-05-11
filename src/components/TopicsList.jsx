import { Link } from "react-router-dom";
import TopicsCard from "../components/TopicsCard";
import styles from "../styles/topicsList.module.css";

const TopicsList = ({ topics, setSelectedTopic }) => {
  return (
    <ul className={styles.topicsList}>
      <li className={styles.defaultTopic} key="articles">
        All
      </li>
      {topics &&
        topics.map((topic) => {
          return (
            <>
              <Link to={`/articles?topic=${topic.slug}`}>
                <TopicsCard
                  topic={topic}
                  key={topic.slug}
                  setSelectedTopic={setSelectedTopic}
                />
              </Link>
            </>
          );
        })}
    </ul>
  );
};

export default TopicsList;
