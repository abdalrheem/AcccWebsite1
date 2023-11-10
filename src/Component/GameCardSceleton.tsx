import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSceleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton width="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSceleton;
