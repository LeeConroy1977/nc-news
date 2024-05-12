import styles from "../styles/topicsCard.module.css";
import { IntialisedWord } from "../utils/utliFunctions";

const TopicsCard = ({ topic, setSelectedTopic, setPage, selectedTopic }) => {
  const { slug } = topic;

  function handleClick() {
    setSelectedTopic(slug);
    setPage(1);
  }

  let classname =
    selectedTopic === "coding" && slug === "coding"
      ? styles.coding
      : selectedTopic === "football" && slug === "football"
      ? styles.football
      : selectedTopic === "cooking" && slug === "cooking"
      ? styles.cooking
      : styles.topicsCard;

  const slugInitial = IntialisedWord(slug);

  return (
    <li
      className={classname}
      onClick={() => {
        handleClick();
      }}
    >
      {slugInitial}
    </li>
  );
};

export default TopicsCard;
