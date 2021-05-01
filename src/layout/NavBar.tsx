import { Flex, Link, Switch, useColorMode } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p={5} justifyContent="space-between">
      <Flex>
        <Link as={ReachLink} to="/dynasties">
          Dynasties
        </Link>
      </Flex>
      <div>
        Dark mode{" "}
        <Switch
          colorScheme="green"
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
        />
      </div>
    </Flex>
  );
};

export default NavBar;
