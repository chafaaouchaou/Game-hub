import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Gameresult {
  id: number;
  name: string;
}
interface Gamefetch {
  count: number;
  results: Gameresult[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Gameresult[]>([]);
  const [error, setError] = useState("");

  const getgames = () => {
    apiClient
      .get<Gamefetch>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    getgames();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <div>
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GamesGrid;
