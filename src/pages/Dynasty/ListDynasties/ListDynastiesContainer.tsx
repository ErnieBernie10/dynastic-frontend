import React, { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Flex, useDisclosure, Button } from "@chakra-ui/react";
import { useDynasties } from "../../../api";
import { DynastyFeature } from "../../../components/DynastyFeature";
import { Layout } from "../../../layout/Layout";
import CreateDynastyDrawer from "../CreateDynasty/CreateDynastyDrawer";
import { Guid } from "../../../interface/Common";

const ListDynastiesContainer: React.FC = () => {
  const { data, isLoading } = useDynasties();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editingId, setEditingId] = useState<Guid | undefined>();

  const handleEdit = (id: Guid) => {
    setEditingId(id);
    onOpen();
  };

  const handleDelete = (id: Guid) => {
    console.log("delete", id);
  };

  const handleClose = () => {
    setEditingId(undefined);
    onClose();
  };

  return (
    <Layout>
      <CreateDynastyDrawer
        onClose={handleClose}
        id={editingId}
        onOpen={onOpen}
        isOpen={isOpen}
      />
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
          : data?.map((d, i) => (
              <DynastyFeature
                dynasty={d}
                key={i}
                onEdit={() => handleEdit(d.id)}
                onDelete={() => handleDelete(d.id)}
              />
            ))}
      </Flex>
    </Layout>
  );
};

export default ListDynastiesContainer;
