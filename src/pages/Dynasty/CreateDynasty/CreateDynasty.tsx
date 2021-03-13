import React from "react";
import CreateDynastyForm, { CreateDynastySchema } from "./CreateDynastyForm";

interface CreateDynastyProps {
  createDynasty: (FormData: CreateDynastySchema) => void;
}

const CreateDynasty: React.FC<CreateDynastyProps> = ({ createDynasty }) => {
  return <CreateDynastyForm createDynasty={createDynasty} />;
};

export default CreateDynasty;
