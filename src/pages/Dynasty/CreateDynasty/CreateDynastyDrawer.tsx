import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import * as yup from "yup";
import { useCreateDynasty } from "../../../api";
import { DrawerForm } from "../../../components/DrawerForm";
import InputField from "../../../components/Form/InputField";
import TextareaField from "../../../components/Form/TextArea";
import withValidation from "../../../components/Form/WithValidation";
import { DisclosureProps } from "../../../interface/DisclosureProps";

export type CreateDynastySchema = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  description: yup.string().label("Description"),
});

const Input = withValidation(InputField);
const Textarea = withValidation(TextareaField);

type CreateDynastyDrawerProps = DisclosureProps;

const CreateDynastyDrawer: React.FC<CreateDynastyDrawerProps> = ({
  onOpen,
  onClose,
  isOpen,
}) => {
  const { register, handleSubmit, formState } = useForm<CreateDynastySchema>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const { mutateAsync, isLoading } = useCreateDynasty();
  const queryClient = useQueryClient();

  const createDynasty = async (formData: CreateDynastySchema) => {
    const dynasty = await mutateAsync(formData);
    if (dynasty) {
      onClose();
      queryClient.invalidateQueries("dynasties");
    }
  };

  return (
    <DrawerForm
      onClose={onClose}
      onOpen={onOpen}
      isOpen={isOpen}
      isLoading={isLoading}
      header="Create new Tree"
      onSubmit={handleSubmit(createDynasty)}
    >
      <Input
        error={errors.name}
        inputRef={register}
        isRequired
        label="Name"
        name="name"
        placeholder="Name of the tree..."
      />
      <Textarea
        error={errors.description}
        inputRef={register}
        label="Description"
        name="description"
        placeholder="Description of the tree..."
      />
    </DrawerForm>
  );
};

export default CreateDynastyDrawer;
