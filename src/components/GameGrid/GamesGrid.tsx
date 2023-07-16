import { Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import style from "./GameGrid.module.css";
import GameCardSkeleton from "../GameCardSkeleton";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <div>
        <div className={style.grid}>
          {isLoading
            ? skeletons.map((Skeleton) => <GameCardSkeleton key={Skeleton} />)
            : games.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </div>
    </>
  );
};

export default GamesGrid;
