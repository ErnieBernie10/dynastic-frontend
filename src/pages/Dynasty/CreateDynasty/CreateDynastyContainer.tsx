import React from "react";
import { useCreateDynasty } from "../../../api";
import CreateDynasty from "./CreateDynasty";
import { CreateDynastySchema } from "./CreateDynastyForm";

const CreateDynastyContainer: React.FC = () => {
  const { mutateAsync } = useCreateDynasty();

  const createDynasty = async (formData: CreateDynastySchema) => {
    const dynasty = await mutateAsync(formData);
    console.log(dynasty);
  };
  return (
    <div>
      <CreateDynasty createDynasty={createDynasty} />
    </div>
  );
};

export default CreateDynastyContainer;
