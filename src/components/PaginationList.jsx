import styles from "../styles/paginationList.module.css";
import PaginationListItem from "./PaginationListItem";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const PaginationList = ({ paginationArr, setPage, page, selectedTopic }) => {
  function handlePageClick(num) {
    setPage(num);
  }

  function handlePageInc() {
    if (page < paginationArr.length) {
      setPage((page) => page + 1);
    }
  }

  function handlePageDec() {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  }

  return (
    <div className={styles.paginationBox}>
      <span className={styles.navigationBox} onClick={handlePageDec}>
        <MdNavigateBefore />
      </span>
      <ul className={styles.paginationList}>
        {paginationArr.map((num) => {
          return (
            <PaginationListItem
              num={num}
              key={num}
              handlePageClick={handlePageClick}
              page={page}
              selectedTopic={selectedTopic}
            />
          );
        })}
      </ul>
      <span className={styles.navigationBox} onClick={handlePageInc}>
        <MdNavigateNext />
      </span>
    </div>
  );
};

export default PaginationList;
