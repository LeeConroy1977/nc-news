import styles from "../styles/topicsCard.module.css";

const TopicsCard = ({ topic, setSelectedTopic }) => {
  const { slug } = topic;

  function handleClick() {
    setSelectedTopic(slug);
  }
  return (
    <li className={styles.topicsCard} onClick={handleClick}>
      {slug}
    </li>
  );
};

export default TopicsCard;
