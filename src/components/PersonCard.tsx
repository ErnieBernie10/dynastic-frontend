import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Person } from "../models/Person";

interface PersonCardProps {
  person: Person;
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
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
        {person.firstname + " " + person.middlename + " " + person.lastname}
      </Heading>
      <Flex justifyContent="flex-start" flexDir="column" mt={5}>
        <Flex justify="space-between">
          <Text as="span" fontWeight="bold" fontSize="lg">
            Father:
          </Text>
          <Text as="p" fontSize="lg">
            {person.father}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text as="span" fontWeight="bold" fontSize="lg">
            Mother:
          </Text>
          <Text as="p" fontSize="lg">
            {person.mother}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PersonCard;
