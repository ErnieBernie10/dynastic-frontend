import React from "react";
import ReactFlow from "react-flow-renderer";
import { Tree } from "../models/api/FlatTree";

export const TreeContext = React.createContext<Tree>({ members: [] });

interface TreeView {
  tree: Tree;
}

export const TreeView: React.FC<TreeView> = ({ tree }) => {
  return (
    <TreeContext.Provider value={tree}>
      {/* <ScrollContainer> */}
      {/* <Flex justifyContent="space-around">
          {Object.values(getRoots(tree.members)).map((m) => {
            return <TreeNode person={m} key={m.id} ref={rootRef} />;
          })}
        </Flex> */}
      {/* <ReactFlow
        elements={treeElements}
        onLoad={(instance) => instance.fitView()}
        style={{ height: 1000 }}
      /> */}
      {/* </ScrollContainer> */}
    </TreeContext.Provider>
  );
};
