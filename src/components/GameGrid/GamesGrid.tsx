import { Text } from "@chakra-ui/react";
import { Platform } from "../../hooks/usePlatforms";
import GameCard from "../GameCard";
import style from "./GameGrid.module.css";
import GameCardSkeleton from "../GameCardSkeleton";
import GameCardContainer from "../GameCardContainer";
import { Genre } from "../../hooks/useGenre";
import useGames from "../../hooks/useGames";
import { GameQuery } from "../../App";

interface Props {
  gamequery: GameQuery;
}

const GamesGrid = ({ gamequery }: Props) => {
  const { datas, error, isLoading } = useGames(gamequery);

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
            : datas.map((game) => (
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
