import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { games, error } = useGames();

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
