import Header from "./components/Header";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
