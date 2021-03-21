import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Dynasty from "../models/api/Dynasty";

interface DynastyFeatureProps {
  dynasty: Dynasty;
}

export const DynastyFeature: React.FC<DynastyFeatureProps> = ({ dynasty }) => {
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
      <Text mt={4}>{dynasty.description}</Text>
    </Box>
  );
};
