import React, { useState } from "react";
import { Person } from "../../models/Person";
import RelationshipNode from "../../components/RelationshipNode";

import {
  TransformComponent,
  TransformWrapper
} from "react-zoom-pan-pinch";
import { useDynasty } from "../../api/dynasty";

interface Props {

}

const TreeContainer: React.FC<Props> = () => {

  const [tree, setTree] = useState<Person[]>([]);
  const { status, data, error, isFetching } = useDynasty("5fc76ba2aa60f95ff0c0af06");
  
  if (data) {
    return (
      <TransformWrapper options={{
        limitToBounds: false
      }}>
          <TransformComponent>
            <div style={{ width: "100vw", height: "100vh"}}>
              <RelationshipNode person={data.members[0] as Person} partner={data.members[1] as Person} people={data.members} />
            </div>
          </TransformComponent>
          {/*<SteppedLineTo borderColor={"red"} within={"tree-container"} from={"node-6"} to={"node-3"} orientation={"v"} fromAnchor={"bottom"} toAnchor={"top"} />*/}
      </TransformWrapper>
    );
  }
  return (
    <div>No data</div>
  );
}

export default TreeContainer;