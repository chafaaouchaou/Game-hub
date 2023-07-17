import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GameGrid/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="grid-container">
      <div className="nav">
        <NavBar />
      </div>
      <div className="sidebar">
        <GenreList
          selectedGenre={GameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
        />
      </div>
      <div className="content">
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({ ...GameQuery, platform })
          }
          selectedPlatform={GameQuery.platform}
        />
        <GamesGrid gamequery={GameQuery} />
      </div>
    </div>
  );
}

export default App;
