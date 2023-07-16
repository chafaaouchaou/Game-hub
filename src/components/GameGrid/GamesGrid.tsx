import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import style from "./GameGrid.module.css";

const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <div>
        <div className={style.grid}>
          {games.map((game) => (
            // <li key={game.id}>{game.name}</li>
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GamesGrid;
