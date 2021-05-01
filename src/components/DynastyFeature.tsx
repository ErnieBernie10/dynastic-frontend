import { Box, Heading, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Dynasty from "../models/api/Dynasty";
import { isEmpty } from "ramda";

interface DynastyFeatureProps {
  dynasty: Dynasty;
}

const DynastyFeature: React.FC<DynastyFeatureProps> & {
  Skeleton: React.FC;
} = ({ dynasty }) => {
  return (
    <Box
      p={5}
      m={1}
      rounded={5}
      shadow="md"
      w={"250px"}
      borderWidth="1px"
      as={Link}
      to={`/dynasty/${dynasty.id}/tree`}
    >
      <Heading fontSize="xl">{dynasty.name}</Heading>
      {isEmpty(dynasty.description) ? (
        <Text mt={4} color="gray.500">
          No description...
        </Text>
      ) : (
        <Text mt={4}>{dynasty.description}</Text>
      )}
    </Box>
  );
};

DynastyFeature.Skeleton = () => {
  return (
    <Box p={5} m={1} rounded={5} shadow="md" w={"250px"} borderWidth="1px">
      <Skeleton>
        <Heading fontSize="xl">Dynasty Name</Heading>
      </Skeleton>
      <SkeletonText mt={4} />
    </Box>
  );
};

export { DynastyFeature };
