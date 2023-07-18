import useGenre from "../hooks/useGenre";
import { Genre } from "../hooks/useGenre";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (data: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { datas, error, isLoading } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading marginY={2} fontSize={"2xl"}>
        {" "}
        Genres
      </Heading>
      <List>
        {datas.map((data) => (
          <ListItem key={data.id} paddingY={"10px"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(data.image_background)}
                objectFit="cover"
              />
              <Button
                onClick={() => onSelectGenre(data)}
                fontSize="lg"
                variant={"link"}
                fontWeight={selectedGenre?.id === data.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default GenreList;
