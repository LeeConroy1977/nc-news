import { Route, Routes } from "react-router-dom";
import Articles from "../pages/Articles";
import styles from "../styles/main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
    </main>
  );
};

export default Main;
