import React from "react";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useDynasties } from "../../../api";
import { DynastyFeature } from "../../../components/DynastyFeature";
import { Layout } from "../../../layout/Layout";
import CreateDynastyDrawer from "../CreateDynasty/CreateDynastyDrawer";

const ListDynastiesContainer: React.FC = () => {
  const { data } = useDynasties();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <CreateDynastyDrawer onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      <Button
        leftIcon={<AddIcon />}
        colorScheme="green"
        onClick={onOpen}
        float="right"
      >
        Create Tree
      </Button>
      <Flex flexWrap="wrap" justifyContent="flex-start">
        {data?.map((d, i) => (
          <DynastyFeature dynasty={d} key={i} />
        ))}
      </Flex>
    </Layout>
  );
};

export default ListDynastiesContainer;
