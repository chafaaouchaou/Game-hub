import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface Gamefetch {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const getgames = () => {
    const controller = new AbortController();
    apiClient
      .get<Gamefetch>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
      });
    return () => controller.abort();
  };

  useEffect(() => {
    const abort = getgames();

    return abort;
  }, []);

  return { games, error };
};
export default useGames;
