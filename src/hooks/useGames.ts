import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gamequery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gamequery.genre?.id,
        platforms: gamequery.platform?.id,
        ordering: gamequery.filter?.value,
        search: gamequery.searchquery,
      },
    },
    [gamequery]
  );

export default useGames;
