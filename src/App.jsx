import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./index.css";
import { getAllTopics } from "./utils/topics.Api";
import { useSearchParams } from "react-router-dom";

function App() {
  const [topics, setTopics] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);
  const [orderBy, setOrderBy] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

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

  console.log(sortedBy);

  return (
    <div className="app">
      <Header />
      <SideBar
        topics={topics}
        setSelectedTopic={setSelectedTopic}
        setSortedBy={setSortedBy}
        handleSortedByParams={handleSortedByParams}
        handleOrderParams={handleOrderParams}
      />
      <Main
        selectedTopic={selectedTopic}
        sortedBy={sortedBy}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
    </div>
  );
}

export default App;
