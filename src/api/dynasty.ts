import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import axiosApi from "../axios-config";
import { baseUrl } from "../config";
import Dynasty from "../models/api/Dynasty";
import { Person } from "../models/Person";
import { Tree } from "../api/interface/Tree";
import { GetAccessTokenSilently } from "./interface/auth";
import { Guid } from "../interface/Common";
import { Tree as FlatTree } from "./interface/FlatTree";

const getDynastyFlatTreeById = async (
  id: Guid,
  getToken: GetAccessTokenSilently
) => {
  const token = await getToken();

  return await axiosApi
    .get<FlatTree>(baseUrl + "/dynasties/" + id + "/flattree", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};
export const useDynastyFlatTree = (id: Guid) => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(["dynastyFlatTree", id], () =>
    getDynastyFlatTreeById(id, getAccessTokenSilently)
  );
};

const getDynastyTreeById = async (
  id: Guid,
  getToken: GetAccessTokenSilently
) => {
  const token = await getToken();

  return await axiosApi
    .get<Tree>(baseUrl + "/dynasties/" + id + "/tree", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};
export const useDynastyTree = (id: Guid) => {
  const { getAccessTokenSilently } = useAuth0();
  return useQuery(["dynastyTree", id], () =>
    getDynastyTreeById(id, getAccessTokenSilently)
  );
};

interface CreateMemberParams {
  id: Guid;
  person: Person;
}
const createMember = async (
  { id, person }: CreateMemberParams,
  getToken: GetAccessTokenSilently
) => {
  const token = await getToken();
  return await axiosApi
    .post<Person, string>(
      baseUrl + "/dynasties/" + id + "/members",
      {
        ...person,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => response);
};

export const useCreateMember = () => {
  const { getAccessTokenSilently } = useAuth0();
  return useMutation<string, unknown, CreateMemberParams>((params) =>
    createMember(params, getAccessTokenSilently)
  );
};

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

const getDynastyById = async (id: Guid, getToken: GetAccessTokenSilently) => {
  const token = await getToken();
  return await axiosApi
    .get<Dynasty>(baseUrl + "/dynasties/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => response.data);
};
export const useDynasty = (id: Guid) => {
  const { getAccessTokenSilently } = useAuth0();
  return useQuery(["dynasty", id], () =>
    getDynastyById(id, getAccessTokenSilently)
  );
};
