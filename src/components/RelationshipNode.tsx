import React, { Component } from "react";
import { Person } from "../models/Person";
import { Panel } from "rsuite";
import { getChildrenFromCouple, getRelationship } from "../utils/treeUtils";
import { PersonNode } from "./PersonNode";
import { SteppedLineTo } from "react-lineto";
import { SingleNode } from "./SingleNode";

interface Props {
  person: Person;
  partner: Person;
  parent?: React.Component<Props>;
  people: Person[];
}

export default class RelationshipNode extends Component<Props> {
  render() {

    const { person, partner, parent, people } = this.props;

    return (
      <div>
        <div style={{ margin: 50 }} className={"node-" + person.id}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PersonNode person={person} />
            <PersonNode person={partner} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {getChildrenFromCouple({ person, partner }, people).map(p => {
              const relationship = getRelationship(p, people);
              const child = relationship.person;
              const partner = relationship.partner;
              if (partner) {
                return (
                  <RelationshipNode person={child} partner={partner} people={people} parent={this} />
                );
              } else {
                return (
                  <SingleNode person={child} />
                );
              }
            })}
          </div>
        </div>
        {parent && <SteppedLineTo borderColor={"red"} within={"tree-container"} from={"node-" + parent.props.person.id} to={"node-" + person.id} orientation={"v"} fromAnchor={"bottom"} toAnchor={"top"} />}
      </div>
    );
  }
}