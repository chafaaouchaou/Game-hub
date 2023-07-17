import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GameGrid/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setselectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(
    null
  );

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
        <PlatformSelector
          onSelectPlatform={(Platform) => setselectedPlatform(Platform)}
          selectedPlatform={selectedPlatform}
        />
        <GamesGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </div>
    </div>
  );
}

export default App;
