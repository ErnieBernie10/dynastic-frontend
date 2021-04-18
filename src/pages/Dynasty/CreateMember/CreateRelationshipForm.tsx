import { HStack } from "@chakra-ui/react";
import React from "react";
import InputField from "../../../components/Form/InputField";
import SelectField from "../../../components/Form/SelectField";
import withValidation from "../../../components/Form/WithValidation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { CreateMemberProps } from "./CreateMemberForm";

const Input = withValidation(InputField);
const Select = withValidation(SelectField);

const schema = yup.object().shape({
  firstname: yup.string().required().label("Firstname"),
  lastname: yup.string().required().label("Lastname"),
});

export type CreateMemberForm = yup.InferType<typeof schema>;

const CreateRelationshipForm: React.FC<CreateMemberProps> = ({
  createMember,
  dynasty,
}) => {
  const { register, handleSubmit, formState } = useForm<CreateMemberForm>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(createMember)}>
      <HStack>
        <Input
          error={errors.firstname}
          label="Firstname"
          name="firstname"
          inputRef={register}
          placeholder="Firstname"
        />
        <Input
          error={errors.lastname}
          label="Lastname"
          name="lastname"
          inputRef={register}
          placeholder="Lastname"
        />
      </HStack>
      {dynasty && (
        <Select
          options={dynasty.members.map((p) => ({
            name: p.firstname + " " + p.lastname,
            value: p.id,
          }))}
          error={errors.partner}
          inputRef={register}
          name="partner"
          placeholder="Partner"
          label="Partner"
        />
      )}
    </form>
  );
};

export default CreateRelationshipForm;
