import React from "react";
import { useParams } from "react-router-dom";
import { useCreateMember, useDynasty } from "../../../api/dynasty";
import { Person } from "../../../models/Person";
import CreateMember from "./CreateMember";
import CreateRelationship from "./CreateRelationship";

interface CreateMemberContainerProps {
  type: "child" | "relationship";
}

const CreateMemberContainer: React.FC<CreateMemberContainerProps> = ({
  type,
}) => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useDynasty(id);
  const { mutate } = useCreateMember();

  const handleSubmit = (formData: Person) => {
    // console.log(formData);
    mutate({ id, person: formData });
  };

  if (!isLoading && data) {
    if (type === "child") {
      return <CreateMember dynasty={data} createMember={handleSubmit} />;
    } else {
      return <CreateRelationship dynasty={data} createMember={handleSubmit} />;
    }
  } else {
    return <div>Loading ...</div>;
  }
};

export default CreateMemberContainer;
