import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";
import { Layout } from "../../layout/Layout";

const DynastyContainer = () => {
  return (
    <Layout>
      <Flex>
        <Box
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={5}
        >
          <Box
            borderWidth="1px"
            borderRadius="full"
            minH="250px"
            maxW="250px"
            m="0 auto"
          >
            <Image
              boxSize="250px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wapen_van_West-Vlaanderen.svg/1487px-Wapen_van_West-Vlaanderen.svg.png"
              alt="Van Vlaanderen"
              objectFit="contain"
              borderRadius="full"
            />
          </Box>
          <Heading size="lg" wordBreak="break-word" mr="10px">
            Van Vlaanderen
          </Heading>
          <Flex justify="space-between" mt={5}>
            <Text as="span" fontWeight="bold" fontSize="lg">
              Members:
            </Text>
            <Text as="p" fontSize="lg">
              15
            </Text>
          </Flex>
          <Button
            size="sm"
            colorScheme="green"
            aria-label="Add member"
            rightIcon={<AddIcon />}
            float="right"
          >
            Add Member
          </Button>
        </Box>
      </Flex>
    </Layout>
  );
};

export default DynastyContainer;
