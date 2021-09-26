import { Container } from "@chakra-ui/react";
import React, { FC } from "react";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <NavBar />

      <Container as="main" minW="80%">
        {children}
      </Container>
    </div>
  );
};
