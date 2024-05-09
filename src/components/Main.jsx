import { Route, Routes } from "react-router-dom";
import Articles from "../pages/Articles";
import Article from "../pages/Article";
import styles from "../styles/main.module.css";
import SignIn from "../pages/SignIn";

// import { getArticle } from "../utils/articlesApi";

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </main>
  );
};

export default Main;
