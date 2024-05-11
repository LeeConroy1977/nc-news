import styles from "../styles/sideBar.module.css";
import OrderByList from "./OrderByList";
import SortByContainer from "./SortByContainer";
import TopicsContainer from "./TopicsContainer";

const SideBar = ({
  topics,
  setSelectedTopic,
  setSortedBy,
  handleOrderParams,
  handleSortedByParams,
}) => {
  return (
    <section className={styles.sideBar}>
      <TopicsContainer topics={topics} setSelectedTopic={setSelectedTopic} />
      <SortByContainer
        setSortedBy={setSortedBy}
        handleSortedByParams={handleSortedByParams}
      />
      <OrderByList handleOrderParams={handleOrderParams} />
    </section>
  );
};

export default SideBar;
