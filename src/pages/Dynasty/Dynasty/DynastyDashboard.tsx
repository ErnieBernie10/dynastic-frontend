import { Box, Flex, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import DynastyCard from "../../../components/DynastyCard";
import { Layout } from "../../../layout/Layout";
import Dynasty from "../../../models/api/Dynasty";

interface DynastyProps {
  dynasty: Dynasty;
  id: string;
}

const DynastyDashboard: React.FC<DynastyProps> = ({ dynasty, id }) => {
  return (
    <Layout>
      <Flex justifyContent="space-around">
        <DynastyCard dynasty={dynasty} id={id} />
        <Box borderRadius="lg" borderWidth="1px">
          <Table colorScheme="green">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Relation</Th>
                <Th>Birth Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dynasty.members.map((m) => (
                <Tr key={m._id}>
                  <Td>{m.firstname + " " + m.lastname}</Td>
                  <Td>TODO</Td>
                  <Td>TODO</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Layout>
  );
};

export default DynastyDashboard;
