import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  datas: platforms,
  error: false,
  isLoading: false,
});

export default usePlatforms;
