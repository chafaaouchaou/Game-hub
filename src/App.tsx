import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GameGrid/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setselectedGenre] = useState<Genre | null>(null);

  return (
    <div className="grid-container">
      <div className="nav">
        <NavBar />
      </div>
      <div className="sidebar">
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setselectedGenre(genre)}
        />
      </div>
      <div className="content">
        <PlatformSelector />
        <GamesGrid selectedGenre={selectedGenre} />
      </div>
    </div>
  );
}

export default App;
