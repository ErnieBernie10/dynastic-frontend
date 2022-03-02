import React, { forwardRef } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Person } from "../models/api/FlatTree";

interface Props {
  person: Person;
  className?: string;
}

export const PersonNode = forwardRef<HTMLDivElement, Props>(
  ({ person, className }, ref) => {
    const fullName = `${person.firstname}${
      person.middlename ? person.middlename + " " : " "
    }${person.lastname}`;

    return (
      <Box
        ref={ref}
        w={240}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        m={16}
        className={className}
      >
        <Image src="https://via.placeholder.com/240x240" height="240" />
        <Box padding={2}>{fullName}</Box>
      </Box>
    );
  }
);
