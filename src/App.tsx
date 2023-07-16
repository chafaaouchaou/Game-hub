import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GameGrid/GamesGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <div className="grid-container">
      <div className="nav">
        <NavBar />
      </div>
      <div className="sidebar">
        <GenreList />
      </div>
      <div className="content">
        <GamesGrid />
      </div>
    </div>
  );
}

export default App;
