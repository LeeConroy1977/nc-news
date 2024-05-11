import { Link } from "react-router-dom";
import styles from "../styles/sortByContainer.module.css";
import SortByCard from "./SortByCard";

const sortByArr = [
  { title: "Date", sort: "created_at" },
  { title: "Title", sort: "title" },
  { title: "Votes", sort: "votes" },
  { title: "Author", sort: "author" },
];

const SortByContainer = ({ setSortedBy, handleSortedByParams }) => {
  return (
    <ul className={styles.sortByContainer}>
      <li>SORT BY</li>
      {sortByArr.map((item) => {
        return (
          <SortByCard
            item={item}
            key={item.title}
            setSortedBy={setSortedBy}
            handleSortedByParams={handleSortedByParams}
          />
        );
      })}
    </ul>
  );
};

export default SortByContainer;