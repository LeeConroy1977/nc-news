import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./index.css";
import { getAllTopics } from "./utils/topics.Api";
import { useSearchParams } from "react-router-dom";

function App() {
  const [topics, setTopics] = useState([]);
  const [sortedBy, setSortedBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  function handleSortedByParams(sort) {
    setSortedBy(sort);
    const newParams = new URLSearchParams(searchParams);

    newParams.set("sorted_by", sort);
    setSearchParams(newParams);
  }

  function handleOrderParams(order) {
    setOrderBy(order);
    const newParams = new URLSearchParams(searchParams);

    newParams.set("order", order);
    setSearchParams(newParams);
  }

  useEffect(() => {
    getAllTopics().then(({ data }) => {
      setTopics(data.topics);
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <SideBar
        topics={topics}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
        handleSortedByParams={handleSortedByParams}
        handleOrderParams={handleOrderParams}
        setPage={setPage}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
      <Main
        selectedTopic={selectedTopic}
        sortedBy={sortedBy}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
