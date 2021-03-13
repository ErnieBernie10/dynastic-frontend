import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../components/Form/InputField";
import withValidation from "../../../components/Form/WithValidation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@chakra-ui/react";
import { Layout } from "../../../layout/Layout";

export type CreateDynastySchema = yup.InferType<typeof schema>;

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
});

const Input = withValidation(InputField);

interface CreateDynastyFormProps {
  createDynasty: (formData: CreateDynastySchema) => void;
}

const CreateDynastyForm: React.FC<CreateDynastyFormProps> = ({
  createDynasty,
}) => {
  const { register, handleSubmit, formState } = useForm<CreateDynastySchema>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  return (
    <Layout>
      <Box md={12}>
        <form onSubmit={handleSubmit(createDynasty)}>
          <Input
            error={errors.name}
            inputRef={register}
            label="Name"
            name="name"
            placeholder="Name of the dynasty..."
          />
          <Button type="submit" color={"green"}>
            Submit
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default CreateDynastyForm;
