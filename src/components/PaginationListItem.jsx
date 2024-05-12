import styles from "../styles/paginationListItem.module.css";

const PaginationListItem = ({ num, handlePageClick, page }) => {
  const classname = num === page ? styles.selected : styles.paginationNum;

  return (
    <li className={classname} onClick={() => handlePageClick(num)}>
      {num}
    </li>
  );
};

export default PaginationListItem;
