import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import withValidation from "../../components/Form/WithValidation";
import InputField from "../../components/Form/InputField";
import { Layout } from "../../layout/Layout";
import SelectField from "../../components/Form/SelectField";
import { AddIcon } from "@chakra-ui/icons";

const schema = yup.object().shape({
  firstname: yup.string().required().label("Firstname"),
  lastname: yup.string().required().label("Lastname"),
  father: yup.string().required().label("Father"),
  mother: yup.string().required().label("Mother"),
});

type CreateMemberForm = yup.InferType<typeof schema>;

const Input = withValidation(InputField);
const Select = withValidation(SelectField);

const CreateMemberContainer = () => {
  const { register, handleSubmit, errors } = useForm<CreateMemberForm>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: CreateMemberForm) => {
    console.log(data);
  };
  return (
    <Layout>
      <Flex justifyContent="space-between">
        <Box w="100%">
          <Flex>
            <Box
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
            >
              <Box
                borderWidth="1px"
                borderRadius="full"
                minH="250px"
                maxW="250px"
                m="0 auto"
              >
                <Image
                  boxSize="250px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wapen_van_West-Vlaanderen.svg/1487px-Wapen_van_West-Vlaanderen.svg.png"
                  alt="Van Vlaanderen"
                  objectFit="contain"
                  borderRadius="full"
                />
              </Box>
              <Heading size="lg" wordBreak="break-word" mr="10px">
                Arne Boedt
              </Heading>
              <Flex justifyContent="flex-start" flexDir="column" mt={5}>
                <Flex justify="space-between">
                  <Text as="span" fontWeight="bold" fontSize="lg">
                    Father:
                  </Text>
                  <Text as="p" fontSize="lg">
                    Thomas Boedt
                  </Text>
                </Flex>
                <Flex justify="space-between">
                  <Text as="span" fontWeight="bold" fontSize="lg">
                    Mother:
                  </Text>
                  <Text as="p" fontSize="lg">
                    Ann Bullinck
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box w="100%">
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Select
              options={[{ name: "Thomas Boedt", value: "1" }]}
              error={errors.father}
              inputRef={register}
              name="father"
              placeholder="Father"
              label="Father"
            />
            <Select
              options={[{ name: "Ann Bullinck", value: "1" }]}
              error={errors.mother}
              inputRef={register}
              name="mother"
              placeholder="Mother"
              label="Mother"
            />
            <Button type="submit" colorScheme="green">
              Save
            </Button>
          </form>
        </Box>
      </Flex>
    </Layout>
  );
};

export default CreateMemberContainer;
