import styles from "../styles/topicsCard.module.css";

const TopicsCard = ({ topic, setSelectedTopic, setPage }) => {
  const { slug } = topic;

  function handleClick() {
    setSelectedTopic(slug);
    setPage(1);
  }
  return (
    <li
      className={styles.topicsCard}
      onClick={() => {
        handleClick();
      }}
    >
      {slug}
    </li>
  );
};

export default TopicsCard;
