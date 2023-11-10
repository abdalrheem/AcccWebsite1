import React, { useEffect } from "react";
import useGentes from "../hooks/useGentes";
import { HStack, Image, List, ListItem, Text, VStack } from "@chakra-ui/react";

const GenresList = () => {
  const { genress } = useGentes();
  return (
    <List>
      {genress.map((ge) => (
        <ListItem key={ge.id}>
          <HStack justify="" margin={4}>
            <Image src={ge.image_background} boxSize="32px" borderRadius={8} />
            <Text>{ge.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
