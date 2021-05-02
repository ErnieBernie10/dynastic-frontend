import React, { useEffect, useState } from "react";
import { useDynasty, useDynastyTree } from "../../api/dynasty";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import CreateMemberContainer from "../Dynasty/CreateMember/CreateMemberContainer";
import { useDisclosure } from "@chakra-ui/react";
import { Layout } from "../../layout/Layout";
import { TreeView } from "../../components/TreeView";

interface Props {}

const TreeContainer: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const { data: tree, isFetching } = useDynastyTree(id);
  const { data: dynasty } = useDynasty(id);
  const [ready, setReady] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    if (!ready) {
      setTimeout(() => {
        setReady(true);
      }, 1);
      setTimeout(() => {
        setReady(false);
      }, 1);
    }
  }, [isFetching, ready]);

  return (
    <Layout>
      <CreateMemberContainer
        type="child"
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        dynasty={dynasty}
        tree={tree}
      />
      <Button colorScheme="green" leftIcon={<AddIcon />} onClick={onOpen}>
        Add Member
      </Button>
      <TreeView />
    </Layout>
  );
};

export default TreeContainer;
