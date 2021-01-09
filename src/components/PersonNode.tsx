import React from "react";
import { Person } from "../models/Person";
import { Box, Image } from "@chakra-ui/react";

interface Props {
  person: Person;
  className?: string;
  style?: object;
}

export const PersonNode: React.FC<Props> = ({ person, className, style }: Props) => {
  return (
    <div>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" className={className}>
        <Image src="https://via.placeholder.com/240x240" height="240" />
        <Box header={`${person.firstname}${person.middlename ? person.middlename + " " : " "}${person.lastname}`}>
        </Box>
      </Box>
    </div>
  );
}