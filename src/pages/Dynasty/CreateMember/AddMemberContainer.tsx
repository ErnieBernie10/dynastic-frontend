import { isEmpty } from "ramda";
import React, { useContext } from "react";
import { Position } from "react-flow-renderer";
import { useParams } from "react-router-dom";
import { useCreateMember } from "../../../api/dynasty";
import { TreeContext } from "../../../context/TreeContext";
import { DisclosureProps } from "../../../interface/DisclosureProps";
import Dynasty from "../../../models/api/Dynasty";
import { Person } from "../../../models/Person";
import {
  addChildNode,
  addPartnerNode,
  calculateNextPositions,
} from "../../../util/treeUtils";
import AddChildForm from "./AddChildForm";
import CreateMemberForm from "./AddChildForm";
import AddPartnerForm from "./AddPartnerForm";

interface CreateMemberContainerProps {
  dynasty?: Dynasty;
}

const AddMemberContainer: React.FC<CreateMemberContainerProps> = ({
  dynasty,
}) => {
  const { id } = useParams<{ id: string }>();
  const { mutateAsync, isLoading } = useCreateMember();
  const {
    elements,
    setElements,
    selectedNode,
    onCloseAddPartnerForm,
    onOpenAddPartnerForm,
    isAddPartnerFormOpen,
    isAddChildFormOpen,
    onCloseAddChildForm,
    onOpenAddChildForm,
  } = useContext(TreeContext);

  const handleAddPartner = async (formData: Partial<Person>) => {
    // const result = await mutateAsync({ id, person: formData });
    // if (result) {
    //   onClose();
    // }
    const filtered = elements.filter((e) => e.id !== "initial");
    const newElements = addPartnerNode(filtered, formData, selectedNode);
    setElements(newElements);
    onCloseAddPartnerForm();
  };

  const handleAddChild = async (formData: Partial<Person>) => {
    // const result = await mutateAsync({ id, person: formData });
    // if (result) {
    //   onClose();
    // }
    const filtered = elements.filter((e) => e.id !== "initial");
    const newElements = addChildNode(filtered, formData, selectedNode);
    setElements(newElements);
  };

  return (
    <>
      <AddChildForm
        isLoading={isLoading}
        dynasty={dynasty}
        createMember={handleAddChild}
        isOpen={isAddChildFormOpen}
        onClose={onCloseAddChildForm}
        onOpen={onOpenAddChildForm}
      />
      <AddPartnerForm
        isLoading={isLoading}
        dynasty={dynasty}
        createMember={handleAddPartner}
        isOpen={isAddPartnerFormOpen}
        onClose={onCloseAddPartnerForm}
        onOpen={onOpenAddPartnerForm}
      />
    </>
  );
};

export default AddMemberContainer;
