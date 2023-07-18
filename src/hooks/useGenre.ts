import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenre = () => ({ datas: genres, error: false, isLoading: false });

export default useGenre;
