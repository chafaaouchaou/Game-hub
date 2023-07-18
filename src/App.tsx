import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GameGrid/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import { Box, HStack } from "@chakra-ui/react";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  filter: { value: string; label: string } | null;
  searchquery: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="grid-container">
      <div className="nav">
        <NavBar
          onSearch={(searchquery) => {
            setGameQuery({ ...gameQuery, searchquery });
          }}
        />
      </div>
      <div className="sidebar">
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </div>
      <div className="content">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              selectedfilter={gameQuery.filter}
              onFilterSelect={(filter) =>
                setGameQuery({ ...gameQuery, filter })
              }
            />
          </HStack>
        </Box>
        <GamesGrid gamequery={gameQuery} />
      </div>
    </div>
  );
}

export default App;
