import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import axiosApi from "../axios-config";
import { baseUrl } from "../config";
import Dynasty from "../models/api/Dynasty";
import { Person } from "../models/Person";
import { GetAccessTokenSilently } from "./interface/auth";

const getDynastyTreeById = async (
  id: string,
  getToken: GetAccessTokenSilently
) => {
  const token = await getToken();

  return await axiosApi
    .get<Dynasty>(baseUrl + "/dynasties/" + id + "/tree", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};
export const useDynastyTree = (id: string) => {
  const { getAccessTokenSilently } = useAuth0();
  return useQuery(["dynasty", id], () =>
    getDynastyTreeById(id, getAccessTokenSilently)
  );
};

interface CreateMemberParams {
  id: string;
  person: Person;
}
const createMember = async ({ id, person }: CreateMemberParams) => {
  return await axiosApi
    .post<Person, string>(baseUrl + "/dynasties/" + id, { ...person })
    .then((response) => response);
};

export const useCreateMember = () =>
  useMutation<string, unknown, CreateMemberParams>(createMember);

interface CreateDynastyParams {
  name: string;
}
const createDynasty = async (
  body: CreateDynastyParams,
  getToken: GetAccessTokenSilently
) => {
  const token = await getToken();
  return await axiosApi
    .post<CreateDynastyParams, Dynasty>(
      baseUrl + "/dynasties",
      { ...body },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((response) => response);
};
export const useCreateDynasty = () => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation<Dynasty, unknown, CreateDynastyParams>(
    (params: CreateDynastyParams) =>
      createDynasty(params, getAccessTokenSilently)
  );
};

const getDynasties = async (getToken: GetAccessTokenSilently) => {
  const token = await getToken();
  return await axiosApi
    .get<Dynasty[]>(baseUrl + "/dynasties", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};
export const useDynasties = () => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery("dynasties", () => getDynasties(getAccessTokenSilently));
};
