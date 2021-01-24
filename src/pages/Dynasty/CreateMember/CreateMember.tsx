import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../../layout/Layout";
import Dynasty from "../../../models/api/Dynasty";
import { Person } from "../../../models/Person";
import CreateMemberForm from "./CreateMemberForm";

export interface CreateMemberProps {
  dynasty: Dynasty;
  createMember: (formData: Person) => void;
}

const CreateMember: React.FC<CreateMemberProps> = ({
  dynasty,
  createMember,
}) => {
  return (
    <Flex justifyContent="space-between">
      <Box w="100%">
        <CreateMemberForm dynasty={dynasty} createMember={createMember} />
      </Box>
    </Flex>
  );
};

export default CreateMember;
