import { Route, Routes } from "react-router-dom";
import Articles from "../pages/Articles";
import Article from "../pages/Article";
import styles from "../styles/main.module.css";
import SignIn from "../pages/SignIn";

const Main = ({
  selectedTopic,
  sortedBy,
  setSearchParams,
  searchParams,
  page,
  setPage,
}) => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Articles page={page} setPage={setPage} />} />
        <Route
          path="/articles"
          element={
            <Articles
              selectedTopic={selectedTopic}
              sortedBy={sortedBy}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              page={page}
              setPage={setPage}
            />
          }
        />

        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </main>
  );
};

export default Main;
