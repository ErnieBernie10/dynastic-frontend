import React from "react";
import { useParams } from "react-router-dom";
import { useCreateMember } from "../../../api/dynasty";
import { DisclosureProps } from "../../../interface/DisclosureProps";
import Dynasty from "../../../models/api/Dynasty";
import { Person } from "../../../models/Person";
import CreateMemberForm from "./CreateMemberForm";

interface CreateMemberContainerProps extends DisclosureProps {
  type: "child" | "relationship";
  dynasty?: Dynasty;
}

const CreateMemberContainer: React.FC<CreateMemberContainerProps> = ({
  type,
  onOpen,
  onClose,
  isOpen,
  dynasty,
}) => {
  const { id } = useParams<{ id: string }>();
  const { mutateAsync, isLoading } = useCreateMember();

  const handleSubmit = async (formData: Person) => {
    const result = await mutateAsync({ id, person: formData });
    if (result) {
      onClose();
    }
  };

  if (type === "child") {
    return (
      <CreateMemberForm
        isLoading={isLoading}
        dynasty={dynasty}
        createMember={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    );
  } else {
    return <div>Not implemented</div>;
  }
};

export default CreateMemberContainer;
