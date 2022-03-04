import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { memo, useContext } from "react";
import { NodeProps } from "react-flow-renderer";
import { TreeContext } from "../../context/TreeContext";

export const InitialNode: React.FC<NodeProps> = memo<NodeProps>(() => {
  const { onOpenAddPartnerForm } = useContext(TreeContext);
  const handleCreatePerson = () => {
    onOpenAddPartnerForm();
  };
  return (
    <IconButton
      icon={<AddIcon />}
      onClick={handleCreatePerson}
      aria-label="Create initial"
    />
  );
});
