import React from "react";
import ReactFlow from "react-flow-renderer";
import { Members, Tree } from "../api/interface/FlatTree";
import { useTreeElements } from "../util/hooks/useTreeElements";

export const TreeContext = React.createContext<Members>({});

interface TreeView {
  tree: Tree;
}

export const TreeView: React.FC<TreeView> = ({ tree }) => {
  const treeElements = useTreeElements(tree.members);
  console.log(treeElements);

  return (
    <TreeContext.Provider value={tree.members}>
      {/* <ScrollContainer> */}
      {/* <Flex justifyContent="space-around">
          {Object.values(getRoots(tree.members)).map((m) => {
            return <TreeNode person={m} key={m.id} ref={rootRef} />;
          })}
        </Flex> */}
      <ReactFlow
        elements={treeElements}
        onLoad={(instance) => instance.fitView()}
        style={{ height: 1000 }}
      />
      {/* </ScrollContainer> */}
    </TreeContext.Provider>
  );
};
