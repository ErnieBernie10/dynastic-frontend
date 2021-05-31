import React, { forwardRef } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Member } from "../api/interface/Tree";

interface Props {
  person: Member;
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
        <Box header={fullName} padding={2}>
          {fullName}
        </Box>
      </Box>
    );
  }
);
