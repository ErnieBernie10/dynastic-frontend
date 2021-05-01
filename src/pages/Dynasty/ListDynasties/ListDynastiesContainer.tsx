import React from "react";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useDynasties } from "../../../api";
import { DynastyFeature } from "../../../components/DynastyFeature";
import { Layout } from "../../../layout/Layout";
import CreateDynastyDrawer from "../CreateDynasty/CreateDynastyDrawer";

const ListDynastiesContainer: React.FC = () => {
  const { data, isLoading } = useDynasties();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <CreateDynastyDrawer onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      <Flex justifyContent="start">
        <Button
          leftIcon={<AddIcon />}
          colorScheme="green"
          onClick={onOpen}
          mb={2}
        >
          Create Tree
        </Button>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="flex-start">
        {isLoading
          ? Array(5)
              .fill(undefined)
              .map((_, i) => <DynastyFeature.Skeleton key={i} />)
          : data?.map((d, i) => <DynastyFeature dynasty={d} key={i} />)}
      </Flex>
    </Layout>
  );
};

export default ListDynastiesContainer;
