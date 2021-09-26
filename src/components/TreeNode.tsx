import React, { forwardRef, useContext } from "react";
import { Person } from "../api/interface/FlatTree";
import { getChildren } from "../util/treeUtils";
import { CoupleNode } from "./CoupleNode";
import { SingleNode } from "./SingleNode";
import { TreeContext } from "./TreeView";

interface TreeNodeProps {
  person: Person;
}
export const TreeNode = forwardRef<HTMLDivElement, TreeNodeProps>(
  ({ person }, ref) => {
    const tree = useContext(TreeContext);

    if (person.relationships && person.relationships.length > 0) {
      // TODO: Add support for multiple partners per person
      const rel = person.relationships[0];
      const partner = tree[rel.partner];
      const children = getChildren(tree, rel);

      return (
        <CoupleNode
          ref={ref}
          person={person}
          partner={partner}
          couplesChildren={children}
        />
      );
    } else {
      return <SingleNode person={person} />;
    }
  }
);
