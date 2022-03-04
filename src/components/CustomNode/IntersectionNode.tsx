import { AddIcon } from "@chakra-ui/icons";
import { Box, Tooltip, IconButton } from "@chakra-ui/react";
import React, { memo, useContext } from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";
import { TreeContext } from "../../context/TreeContext";
import { makeNodeFromProps } from "../../util/treeUtils";

export const IntersectionNode: React.FC<NodeProps> = memo<NodeProps>(
  (props) => {
    const { onOpenAddChildForm, setSelectedNode } = useContext(TreeContext);
    const handleClick = () => {
      setSelectedNode(makeNodeFromProps(props, Position.Bottom));
      onOpenAddChildForm();
    };
    return (
      <>
        <Handle type="target" position={Position.Left} id="tl" />
        <Handle type="target" position={Position.Right} id="tr" />
        <Handle type="target" position={Position.Top} id="tt" />
        <Box>
          <Tooltip label="Add child">
            <IconButton
              icon={<AddIcon />}
              aria-label="Add child"
              onClick={handleClick}
            />
          </Tooltip>
        </Box>
        <Handle type="source" position={Position.Right} id="sr" />
        <Handle type="source" position={Position.Bottom} id="sb" />
        <Handle type="source" position={Position.Left} id="sl" />
      </>
    );
  }
);
