import { useMutation, useQuery } from "react-query";
import axiosApi from "../axios-config";
import { baseUrl } from "../config";
import Dynasty from "../models/api/Dynasty";
import { Person } from "../models/Person";

const getDynastyById = async (key: string, id: string) =>
  await axiosApi
    .get<Dynasty>(baseUrl + "/dynasties/" + id)
    .then((response) => response.data);

export const useDynasty = (id: string) =>
  useQuery<Dynasty>(["dynasty", id], getDynastyById);

interface CreateMemberParams {
  id: string;
  person: Person;
}
const createMember = async ({ id, person }: CreateMemberParams) =>
  await axiosApi
    .post<Person, string>(baseUrl + "/dynasties/" + id, { ...person })
    .then((response) => response);

export const useCreateMember = () =>
  useMutation<string, unknown, CreateMemberParams>((params) =>
    createMember(params)
  );
