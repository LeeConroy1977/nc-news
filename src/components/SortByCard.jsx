import styles from "../styles/sortByCard.module.css";

const SortByCard = ({ item, handleSortedByParams, sortedBy, setSortedBy }) => {
  const { title, sort } = item;

  let classname =
    sortedBy === "created_at" && sort === "created_at"
      ? styles.selected
      : sortedBy === "title" && sort === "title"
      ? styles.selected
      : sortedBy === "votes" && sort === "votes"
      ? styles.selected
      : sortedBy === "author" && sort === "author"
      ? styles.selected
      : styles.sortByCard;

  return (
    <li
      className={classname}
      onClick={() => {
        setSortedBy(sort);
        handleSortedByParams(sort);
      }}
    >
      {title}
    </li>
  );
};

export default SortByCard;
