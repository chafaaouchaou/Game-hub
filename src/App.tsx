import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GamesGrid";

function App() {
  return (
    <div className="grid-container">
      <div className="nav">
        <NavBar />
      </div>
      <div className="sidebar">Sidebar</div>
      <div className="content">
        <GamesGrid />
      </div>
    </div>
  );
}

export default App;
