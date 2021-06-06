import { Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Members, Tree } from "../api/interface/FlatTree";
import { getRoots } from "../util/treeUtils";
import { TreeNode } from "./TreeNode";

export const TreeContext = React.createContext<Members>({});

interface TreeView {
  tree: Tree;
}

export const TreeView: React.FC<TreeView> = ({ tree }) => {
  const rootRef = useRef(null);

  return (
    <TreeContext.Provider value={tree.members}>
      <ScrollContainer>
        <Flex justifyContent="space-around">
          {Object.values(getRoots(tree.members)).map((m) => {
            return <TreeNode person={m} key={m.id} ref={rootRef} />;
          })}
        </Flex>
      </ScrollContainer>
    </TreeContext.Provider>
  );
};
