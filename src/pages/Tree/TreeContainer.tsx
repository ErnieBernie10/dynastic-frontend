import React from "react";
import { Person } from "../../models/Person";
import { treeMock } from "./TreeMock";
import RelationshipNode from "../../components/RelationshipNode";

import {
  TransformComponent,
  TransformWrapper
} from "react-zoom-pan-pinch";

interface State {
  tree: Person[]
}

interface Props {

}

export default class TreeContainer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { tree: [...treeMock] };
  }

  render() {
    const { tree } = this.state;
    return (
      <TransformWrapper options={{
        limitToBounds: false
      }}>
          <TransformComponent>
            <div style={{ width: "100vw", height: "100vh"}}>
              <RelationshipNode person={tree.find(p => p.id === 1) as Person} partner={tree.find(p => p.id === 2) as Person} people={tree} />
            </div>
          </TransformComponent>
          {/*<SteppedLineTo borderColor={"red"} within={"tree-container"} from={"node-6"} to={"node-3"} orientation={"v"} fromAnchor={"bottom"} toAnchor={"top"} />*/}
      </TransformWrapper>
    );
  }
}