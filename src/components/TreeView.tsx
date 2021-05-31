import { Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import Payload from "../__tests__/mock/tree.json";
import ScrollContainer from "react-indiana-drag-scroll";
import { Member } from "../api/interface/Tree";
import { TreeNode } from "./TreeNode";

export const TreeView: React.FC = () => {
  const rootRef = useRef(null);

  return (
    <ScrollContainer>
      <Flex justifyContent="space-around">
        {((Payload.nestedTree as unknown) as Member[]).map((m) => {
          return <TreeNode person={m} key={m.id} ref={rootRef} />;
        })}
      </Flex>
    </ScrollContainer>
  );
};
