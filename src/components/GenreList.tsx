import useGenre from "../hooks/useGenre";
import { Genre } from "../hooks/useGenre";

import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (data: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { datas, error, isLoading } = useGenre();

  if (error) return null;
  return (
    <>
      {isLoading && <Spinner />}

      <List>
        {datas.map((data) => (
          <ListItem key={data.id} paddingY={"10px"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(data.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(data)}
                fontSize="lg"
                variant={"link"}
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
