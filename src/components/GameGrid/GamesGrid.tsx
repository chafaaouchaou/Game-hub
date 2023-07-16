import { Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import style from "./GameGrid.module.css";
import GameCardSkeleton from "../GameCardSkeleton";
import GameCardContainer from "../GameCardContainer";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <div>
        <div className={style.grid}>
          {isLoading
            ? skeletons.map((Skeleton) => (
                <GameCardContainer key={Skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))
            : games.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
        </div>
      </div>
    </>
  );
};

export default GamesGrid;
