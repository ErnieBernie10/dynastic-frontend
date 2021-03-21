import { HStack, Button } from "@chakra-ui/react";
import React from "react";
import InputField from "../../../components/Form/InputField";
import SelectField from "../../../components/Form/SelectField";
import withValidation from "../../../components/Form/WithValidation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DatePickerField from "../../../components/Form/DatePickerField";
import { DrawerForm } from "../../../components/DrawerForm";
import Dynasty from "../../../models/api/Dynasty";
import { Person } from "../../../models/Person";
import { DisclosureProps } from "../../../interface/DisclosureProps";

export type CreateMemberForm = yup.InferType<typeof schema>;

export interface CreateMemberProps extends DisclosureProps {
  dynasty?: Dynasty;
  createMember: (formData: Person) => void;
}

const Input = withValidation(InputField);
const Select = withValidation(SelectField);
const DatePicker = withValidation(DatePickerField);

const schema = yup.object().shape({
  firstname: yup.string().required().label("Firstname"),
  lastname: yup.string().required().label("Lastname"),
  middlename: yup.string().label("Middlename"),
  father: yup.string().label("Father"),
  mother: yup.string().label("Mother"),
});

const CreateMemberForm: React.FC<CreateMemberProps> = ({
  createMember,
  dynasty,
  onClose,
  onOpen,
  isOpen,
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
      header="Add Member"
      size="md"
    >
      <Input
        error={errors.firstname}
        label="Firstname"
        name="firstname"
        inputRef={register}
        placeholder="Firstname"
      />

      <Input
        error={errors.middlename}
        label="Middlename"
        name="middlename"
        inputRef={register}
        placeholder="Middlename"
      />
      <Input
        error={errors.lastname}
        label="Lastname"
        name="lastname"
        inputRef={register}
        placeholder="Lastname"
      />
      {dynasty && (
        <HStack>
          <Select
            options={dynasty.members.map((p) => ({
              name: p.firstname + " " + p.lastname,
              value: p._id,
            }))}
            error={errors.father}
            inputRef={register}
            name="father"
            placeholder="Father"
            label="Father"
          />
          <Select
            options={dynasty.members.map((p) => ({
              name: p.firstname + " " + p.lastname,
              value: p._id,
            }))}
            error={errors.mother}
            inputRef={register}
            name="mother"
            placeholder="Mother"
            label="Mother"
          />
        </HStack>
      )}
      <HStack>
        <DatePicker
          inputRef={register}
          onChange={() => {}}
          label="Birth date"
          name="birthdate"
        />
      </HStack>
      <Button type="submit" colorScheme="green">
        Save
      </Button>
    </DrawerForm>
  );
};

export default CreateMemberForm;
