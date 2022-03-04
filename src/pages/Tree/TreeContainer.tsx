import React, { useState } from "react";
import { useDynasty, useDynastyFlatTree } from "../../api/dynasty";
import { useParams } from "react-router-dom";
import AddMemberContainer from "../Dynasty/CreateMember/AddMemberContainer";
import { useDisclosure } from "@chakra-ui/react";
import { Layout } from "../../layout/Layout";
// import treeDisplay from "../../mocks/static/treeDisplay.json";
import { TreeContext } from "../../context/TreeContext";
import { TreeView } from "../../components/TreeView";
import { Elements, Node } from "react-flow-renderer";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const TreeContainer: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const { data: dynasty } = useDynasty(id);
  const {
    isOpen: isAddPartnerFormOpen,
    onClose: onCloseAddPartnerForm,
    onOpen: onOpenAddPartnerForm,
    onToggle: onToggleAddPartnerForm,
  } = useDisclosure();
  const {
    isOpen: isAddChildFormOpen,
    onClose: onCloseAddChildForm,
    onOpen: onOpenAddChildForm,
    onToggle: onToggleAddChildForm,
  } = useDisclosure();
  const { data: tree } = useDynastyFlatTree(id);
  const [elements, setElements] = useState<Elements>([]);
  const [selectedNode, setSelectedNode] = useState<Node>();

  return (
    <Layout>
      <TreeContext.Provider
        value={{
          elements,
          setElements,
          selectedNode,
          setSelectedNode,
          isAddPartnerFormOpen,
          onCloseAddPartnerForm,
          onOpenAddPartnerForm,
          onToggleAddPartnerForm,
          isAddChildFormOpen,
          onCloseAddChildForm,
          onOpenAddChildForm,
          onToggleAddChildForm,
        }}
      >
        <AddMemberContainer dynasty={dynasty} />
        {tree && <TreeView />}
      </TreeContext.Provider>
    </Layout>
  );
};

export default TreeContainer;
