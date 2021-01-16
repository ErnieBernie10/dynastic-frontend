import React from "react";
import { useParams } from "react-router-dom";
import { useCreateMember, useDynasty } from "../../api/dynasty";
import { Person } from "../../models/Person";
import CreateMember from "./CreateMember";

const CreateMemberContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useDynasty(id);
  const [mutate] = useCreateMember();

  const handleSubmit = (formData: Person) => {
    mutate({ id, person: formData });
  };

  if (!isLoading && data) {
    return <CreateMember dynasty={data} createMember={handleSubmit} />;
  } else {
    return <div>Loading ...</div>;
  }
};

export default CreateMemberContainer;
