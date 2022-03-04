import { AddIcon } from "@chakra-ui/icons";
import { Box, IconButton, Text, Tooltip } from "@chakra-ui/react";
import React, { memo, useContext, useEffect } from "react";
import { Handle, NodeProps, Position, Node } from "react-flow-renderer";
import { TreeContext } from "../../context/TreeContext";
import { makeNodeFromProps } from "../../util/treeUtils";
import { PersonNode } from "../PersonNode";

export const CustomNode: React.FC<NodeProps> = memo<NodeProps>((props) => {
  return (
    <>
      <Handle type="target" position={Position.Left} id="tl">
        <AddRelationship node={makeNodeFromProps(props, Position.Left)} />
      </Handle>
      <Handle type="target" position={Position.Right} id="tr">
        <AddRelationship node={makeNodeFromProps(props, Position.Right)} />
      </Handle>
      <Handle type="target" position={Position.Top} id="tt">
        <AddChild node={makeNodeFromProps(props, Position.Top)} />
      </Handle>
      <PersonNode person={props.data} />
      <Handle type="source" position={Position.Right} id="sr">
        <AddRelationship node={makeNodeFromProps(props, Position.Right)} />
      </Handle>
      <Handle type="source" position={Position.Top} id="st">
        <AddChild node={makeNodeFromProps(props, Position.Top)} />
      </Handle>
      <Handle type="source" position={Position.Bottom} id="sb">
        <AddChild node={makeNodeFromProps(props, Position.Bottom)} />
      </Handle>
      <Handle type="source" position={Position.Left} id="sl">
        <AddRelationship node={makeNodeFromProps(props, Position.Left)} />
      </Handle>
    </>
  );
});

export const AddRelationship: React.FC<{ node: Node }> = ({ node }) => {
  const { onOpenAddPartnerForm, setSelectedNode } = useContext(TreeContext);

  const handleClick = () => {
    setSelectedNode(node);
    onOpenAddPartnerForm();
  };

  return (
    <Box ml={node.data.side === Position.Left ? -9 : 0} mt={-4}>
      <Tooltip label="Add relationship">
        <IconButton
          icon={<AddIcon />}
          aria-label="Add relaionship"
          onClick={handleClick}
        />
      </Tooltip>
    </Box>
  );
};

export const AddChild: React.FC<{ node: Node }> = ({ node }) => {
  const { onOpenAddChildForm, setSelectedNode } = useContext(TreeContext);

  const handleClick = () => {
    setSelectedNode(node);
    onOpenAddChildForm();
  };

  return (
    <Box ml={-4} mt={node.data.side === Position.Top ? -9 : 0}>
      <Tooltip label="Add child">
        <IconButton
          icon={<AddIcon />}
          aria-label="Add child"
          onClick={handleClick}
        />
      </Tooltip>
    </Box>
  );
};
