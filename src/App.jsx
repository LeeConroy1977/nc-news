import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./index.css";
import { getAllTopics } from "./utils/topics.Api";
import { useSearchParams } from "react-router-dom";

function App() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    getAllTopics().then(({ data }) => {
      setTopics(data.topics);
    });
  }, []);

  console.log(topics);

  return (
    <div className="app">
      <Header />
      <SideBar topics={topics} setSelectedTopic={setSelectedTopic} />
      <Main selectedTopic={selectedTopic} />
    </div>
  );
}

export default App;
