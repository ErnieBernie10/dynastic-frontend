import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosApi from "../axios-config";
import { baseUrl } from "../config";
import Dynasty from "../models/api/Dynasty";
import { Person } from "../models/Person";
import { Guid } from "../interface/Common";
import { Tree as FlatTree } from "../models/api/FlatTree";

const getDynastyFlatTreeById = async (id: Guid) =>
  await axiosApi
    .get<FlatTree>(baseUrl + "/dynasties/" + id + "/flattree")
    .then((response) => response.data);
export const useDynastyFlatTree = (id: Guid) =>
  useQuery(["dynastyFlatTree", id], () => getDynastyFlatTreeById(id));

interface CreateMemberParams {
  id: Guid;
  person: Partial<Person>;
}
const createMember = async ({ id, person }: CreateMemberParams) =>
  await axiosApi
    .post<Person, string>(baseUrl + "/dynasties/" + id + "/members", {
      ...person,
    })
    .then((response) => response);

export const useCreateMember = () =>
  useMutation<string, unknown, CreateMemberParams>((params) =>
    createMember(params)
  );

interface CreateDynastyParams {
  name: string;
  description?: string;
}
interface UpdateDynastyParams {
  id: Guid;
  body: CreateDynastyParams;
}
const createDynasty = async (body: CreateDynastyParams) =>
  await axiosApi
    .post<CreateDynastyParams, Dynasty>(baseUrl + "/dynasties", { ...body })
    .then((response) => response);
const updateDynasty = async (id: Guid, body: CreateDynastyParams) =>
  await axiosApi
    .put<CreateDynastyParams, Dynasty>(baseUrl + "/dynasties/" + id, {
      ...body,
    })
    .then((response) => response);
export const useMutateDynasty = () => {
  const queryClient = useQueryClient();
  return {
    create: useMutation<Dynasty, unknown, CreateDynastyParams>(
      (params: CreateDynastyParams) => createDynasty(params),
      { onSuccess: () => queryClient.invalidateQueries("dynasties") }
    ),
    update: useMutation<Dynasty, unknown, UpdateDynastyParams>(
      ({ id, body }: UpdateDynastyParams) => updateDynasty(id, body),
      { onSuccess: () => queryClient.invalidateQueries("dynasties") }
    ),
  };
};

export const getDynasties = async () =>
  await axiosApi
    .get<Dynasty[]>(baseUrl + "/dynasties")
    .then((response) => response.data);
export const useDynasties = () => useQuery("dynasties", getDynasties);

const getDynastyById = async (id: Guid) =>
  await axiosApi
    .get<Dynasty>(baseUrl + "/dynasties/" + id)
    .then((response) => response.data);
export const useDynasty = (id: Guid) =>
  useQuery(["dynasty", id], () => getDynastyById(id));
