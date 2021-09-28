import {
  Box,
  Flex,
  Heading,
  IconButton,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Dynasty from "../models/api/Dynasty";
import { isEmpty } from "ramda";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface DynastyFeatureProps {
  dynasty: Dynasty;
  onEdit: () => void;
  onDelete: () => void;
}

const DynastyFeature: React.FC<DynastyFeatureProps> & {
  Skeleton: React.FC;
} = ({ dynasty, onEdit, onDelete }) => {
  return (
    <Box p={5} m={1} rounded={5} shadow="md" w={"250px"} borderWidth="1px">
      <Flex justifyContent="space-between">
        <Heading fontSize="xl" as={Link} to={`/dynasty/${dynasty.id}/tree`}>
          {dynasty.name}
        </Heading>
        <Flex justifyContent="flex-end">
          <IconButton
            size="sm"
            aria-label="Edit"
            icon={<EditIcon />}
            marginTop="-2"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
          />
          <IconButton
            size="sm"
            aria-label="Delete"
            icon={<DeleteIcon />}
            marginTop="-2"
            marginLeft="2"
            marginRight="-2"
            bgColor="red.400"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          />
        </Flex>
      </Flex>
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
