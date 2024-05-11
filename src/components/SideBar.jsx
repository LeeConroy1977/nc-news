import styles from "../styles/sideBar.module.css";
import TopicsContainer from "./TopicsContainer";

const SideBar = ({ topics, setSelectedTopic }) => {
  return (
    <section className={styles.sideBar}>
      <TopicsContainer topics={topics} setSelectedTopic={setSelectedTopic} />
    </section>
  );
};

export default SideBar;
