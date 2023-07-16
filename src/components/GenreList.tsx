import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { datas, error, isLoading } = useGenre();

  return (
    <ul>
      {datas.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
