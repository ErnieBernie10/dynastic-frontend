import React from "react";
import { Person } from "../../models/Person";
import { treeMock } from "./TreeMock";
import { Relationship } from "../../components/Relationship";
import { Layout } from "../../layout/Layout";

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
      <Layout>
        <Relationship person={tree.find(p => p.id === 1) as Person} partner={tree.find(p => p.id === 2) as Person} people={tree} />
      </Layout>
    );
  }
}