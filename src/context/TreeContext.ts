import React from "react";
import { Elements, Node } from "react-flow-renderer";
import { DisclosureProps } from "../interface/DisclosureProps";

export interface TreeContextState {
  elements: Elements;
  setElements: (elements: Elements) => void;
  selectedNode?: Node;
  setSelectedNode: (node: Node) => void;
  isAddPartnerFormOpen: boolean;
  onCloseAddPartnerForm: () => void;
  onOpenAddPartnerForm: () => void;
  onToggleAddPartnerForm: () => void;
  isAddChildFormOpen: boolean;
  onCloseAddChildForm: () => void;
  onOpenAddChildForm: () => void;
  onToggleAddChildForm: () => void;
}
/* eslint-disable @typescript-eslint/no-empty-function */
const noop = () => {};

export const TreeContext = React.createContext<TreeContextState>({
  elements: [],
  setElements: noop,
  setSelectedNode: noop,
  isAddPartnerFormOpen: false,
  onCloseAddPartnerForm: noop,
  onOpenAddPartnerForm: noop,
  onToggleAddPartnerForm: noop,
  isAddChildFormOpen: false,
  onCloseAddChildForm: noop,
  onOpenAddChildForm: noop,
  onToggleAddChildForm: noop,
});
