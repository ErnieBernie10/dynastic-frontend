import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { isEmpty } from "ramda";
import React, { useContext, useEffect, useMemo, useState } from "react";
import ReactFlow, { Elements } from "react-flow-renderer";
import { TreeContext } from "../context/TreeContext";
import { Tree } from "../models/api/FlatTree";
import { CustomNode } from "./CustomNode/CustomNode";
import { InitialNode } from "./CustomNode/InitialNode";
import { IntersectionNode } from "./CustomNode/IntersectionNode";
import { Node } from "react-flow-renderer";

interface TreeView {
  tree?: Elements;
}

export const TreeView: React.FC<TreeView> = ({ tree }) => {
  const { elements, setElements } = useContext(TreeContext);

  console.log(elements);

  const handleNodeDragStop = (event: React.MouseEvent, node: Node) => {
    setElements([...elements.filter((n) => n.id !== node.id), node]);
  };

  useEffect(() => {
    if (isEmpty(elements)) {
      setElements([
        {
          id: "initial",
          position: {
            x: 500,
            y: 0,
          },
          type: "initial",
        },
      ]);
    }
  }, [elements]);

  return (
    <>
      <ReactFlow
        elements={elements}
        onLoad={(instance) => instance.fitView()}
        style={{ height: 1000 }}
        nodeTypes={{
          multi: CustomNode,
          intersection: IntersectionNode,
          initial: InitialNode,
        }}
        onNodeDragStop={handleNodeDragStop}
        snapToGrid
      />
    </>
  );
};
