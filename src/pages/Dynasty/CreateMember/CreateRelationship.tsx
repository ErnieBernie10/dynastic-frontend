import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../../layout/Layout";
import { CreateMemberProps } from "./CreateMember";
import CreateRelationshipForm from "./CreateRelationshipForm";

const CreateRelationship: React.FC<CreateMemberProps> = ({
  dynasty,
  createMember,
}) => {
  return (
    <Layout>
      <Flex justifyContent="space-between">
        <Box w="100%">
          <CreateRelationshipForm
            dynasty={dynasty}
            createMember={createMember}
          />
        </Box>
      </Flex>
    </Layout>
  );
};

export default CreateRelationship;