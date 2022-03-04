import { HStack } from "@chakra-ui/react";
import React from "react";
import InputField from "../../../components/Form/InputField";
import SelectField from "../../../components/Form/SelectField";
import withValidation from "../../../components/Form/WithValidation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CreateMemberProps } from "./AddChildForm";
import { DrawerForm } from "../../../components/DrawerForm";

const Input = withValidation(InputField);
const Select = withValidation(SelectField);

const schema = yup.object({
  firstname: yup.string().required().label("Firstname"),
  lastname: yup.string().required().label("Lastname"),
  middlename: yup.string().label("Middlename"),
});

export type CreateMemberForm = yup.InferType<typeof schema>;

const CreateRelationshipForm: React.FC<CreateMemberProps> = ({
  createMember,
  dynasty,
  onClose,
  onOpen,
  isOpen,
  isLoading,
}) => {
  const { register, handleSubmit, formState } = useForm<CreateMemberForm>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  return (
    <DrawerForm
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      onSubmit={handleSubmit(createMember)}
      isLoading={isLoading}
      header="Add Member"
      size="md"
    >
      <Input
        error={errors.firstname}
        label="Firstname"
        name="firstname"
        register={register}
        placeholder="Firstname"
      />

      <Input
        error={errors.middlename}
        label="Middlename"
        name="middlename"
        register={register}
        placeholder="Middlename"
      />
      <Input
        error={errors.lastname}
        label="Lastname"
        name="lastname"
        register={register}
        placeholder="Lastname"
      />
      <HStack>
        <Input
          type="date"
          name="birthdate"
          label="Date of birth"
          placeholder="Date of birth..."
          register={register}
        />
      </HStack>
    </DrawerForm>
  );
};

export default CreateRelationshipForm;
