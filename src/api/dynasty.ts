import { useQuery } from "react-query";
import axiosApi from "../axios-config";
import { baseUrl } from "../config";
import Dynasty from "../models/api/Dynasty";

const getDynastyById = async (key: string, id: string) =>
  await axiosApi
    .get<Dynasty>(baseUrl + "/dynasties/" + id)
    .then((response) => response.data);

export const useDynasty = (id: string) =>
  useQuery<Dynasty>(["dynasty", id], getDynastyById, {
    enabled: true,
  });
