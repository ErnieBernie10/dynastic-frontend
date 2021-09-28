import React from "react";
import { useDynasty, useDynastyFlatTree } from "../../api/dynasty";
import { useParams } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import CreateMemberContainer from "../Dynasty/CreateMember/CreateMemberContainer";
import { useDisclosure, Button } from "@chakra-ui/react";
import { Layout } from "../../layout/Layout";
import { TreeView } from "../../components/TreeView";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const TreeContainer: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const { data: dynasty } = useDynasty(id);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: tree } = useDynastyFlatTree(id);

  // const transformedTree = useMemo(() => transformTree(tree), [tree]);

  return (
    <Layout>
      <CreateMemberContainer
        type="child"
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        dynasty={dynasty}
      />
      <Button colorScheme="green" leftIcon={<AddIcon />} onClick={onOpen}>
        Add Member
      </Button>
      {tree && <TreeView tree={tree} />}
    </Layout>
  );
};

export default TreeContainer;
