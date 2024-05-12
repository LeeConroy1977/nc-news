import styles from "../styles/sideBar.module.css";
import OrderByList from "./OrderByList";
import SortByContainer from "./SortByContainer";
import TopicsContainer from "./TopicsContainer";

const SideBar = ({
  topics,
  selectedTopic,
  setSelectedTopic,
  sortedBy,
  setSortedBy,
  handleOrderParams,
  handleSortedByParams,
  setPage,
  orderBy,
  setOrderBy,
}) => {
  return (
    <section className={styles.sideBar}>
      <TopicsContainer
        topics={topics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        setPage={setPage}
        setSortedBy={setSortedBy}
        setOrderBy={setOrderBy}
      />
      <SortByContainer
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
        handleSortedByParams={handleSortedByParams}
      />
      <OrderByList
        handleOrderParams={handleOrderParams}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
    </section>
  );
};

export default SideBar;
