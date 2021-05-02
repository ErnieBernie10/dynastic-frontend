import { Flex, Link, Switch, useColorMode } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { logout } = useAuth0();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p={5} justifyContent="space-between">
      <Flex>
        <Link as={ReachLink} to="/dynasties">
          Dynasties
        </Link>
      </Flex>
      <Flex justifyContent="end">
        <Link
          mr={8}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </Link>
        Dark mode{" "}
        <Switch
          colorScheme="green"
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
        />
      </Flex>
    </Flex>
  );
};

export default NavBar;
