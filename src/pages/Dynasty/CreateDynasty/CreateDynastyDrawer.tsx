import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useMutateDynasty, useDynasty } from "../../../api";
import { DrawerForm } from "../../../components/DrawerForm";
import InputField from "../../../components/Form/InputField";
import TextareaField from "../../../components/Form/TextArea";
import withValidation from "../../../components/Form/WithValidation";
import { Guid } from "../../../interface/Common";
import { DisclosureProps } from "../../../interface/DisclosureProps";
import Dynasty from "../../../models/api/Dynasty";

export type CreateDynastySchema = yup.InferType<typeof schema>;

const schema = yup.object({
  name: yup.string().required().label("Name"),
  description: yup.string().label("Description"),
});

const Input = withValidation(InputField);
const Textarea = withValidation(TextareaField);

interface CreateDynastyDrawerProps extends DisclosureProps {
  id?: Guid;
}

const CreateDynastyDrawer: React.FC<CreateDynastyDrawerProps> = ({
  onOpen,
  onClose,
  isOpen,
  id,
}) => {
  const { create, update } = useMutateDynasty();
  const { data } = useDynasty(id ?? "");

  const { register, handleSubmit, formState, setValue } =
    useForm<CreateDynastySchema>({
      mode: "onBlur",
      resolver: yupResolver(schema),
    });
  const { errors } = formState;

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("description", data.description);
    }
  }, [data, setValue]);

  const createDynasty = async (formData: CreateDynastySchema) => {
    let dynasty: Dynasty;
    if (id) {
      dynasty = await update.mutateAsync({ id, body: formData });
    } else {
      dynasty = await create.mutateAsync(formData);
    }
    if (dynasty) {
      onClose();
    }
  };

  const isLoading = create.isLoading || update.isLoading;

  return (
    <DrawerForm
      onClose={onClose}
      onOpen={onOpen}
      isOpen={isOpen}
      isLoading={isLoading}
      header={id ? "Edit Tree" : "Create New Tree"}
      onSubmit={handleSubmit(createDynasty)}
    >
      <Input
        error={errors.name}
        register={register}
        isRequired
        label="Name"
        name="name"
        placeholder="Name of the tree..."
      />
      <Textarea
        error={errors.description}
        register={register}
        label="Description"
        name="description"
        placeholder="Description of the tree..."
      />
    </DrawerForm>
  );
};

export default CreateDynastyDrawer;
