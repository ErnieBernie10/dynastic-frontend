import { Flex } from "@chakra-ui/react";
import React, { forwardRef, useRef } from "react";
import { Person } from "../api/interface/FlatTree";
import { usePos } from "../util/hooks/usePos";
import { PersonNode } from "./PersonNode";
import { TreeNode } from "./TreeNode";

interface CoupleNodeProps {
  person: Person;
  partner?: Person;
  couplesChildren: Person[];
}
export const CoupleNode = forwardRef<HTMLDivElement, CoupleNodeProps>(
  ({ person, partner, couplesChildren }, ref) => {
    const personRef = useRef(null);
    const partnerRef = useRef(null);
    const personPos = usePos<HTMLDivElement>(personRef);
    const partnerPos = usePos<HTMLDivElement>(partnerRef);

    return (
      <div ref={ref}>
        <Flex justifyContent="center">
          <PersonNode person={person} ref={personRef} />
          {partner && <PersonNode person={partner} ref={partnerRef} />}
        </Flex>
        <Flex justifyContent="center">
          {couplesChildren.map((c) => {
            return <TreeNode person={c} key={c.id} />;
          })}
        </Flex>
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <line
            strokeWidth="1px"
            stroke="#fff"
            x1={personPos.left + personPos.width / 2}
            y1={personPos.bottom + personPos.height / 2}
            x2={partnerPos.left + partnerPos.width / 2}
            y2={partnerPos.bottom + partnerPos.height / 2}
            id="mySVG"
          />
        </svg>
      </div>
    );
  }
);
