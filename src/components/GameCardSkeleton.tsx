import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
