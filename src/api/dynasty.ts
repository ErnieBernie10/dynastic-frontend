import { useQuery } from "react-query"
import { baseUrl } from "../config"
import Dynasty from "../models/api/Dynasty";

const getDynastyById = (key: string, id: string) => fetch(baseUrl + "/dynasties/" + id).then(response => response.json());

export const useDynasty = (id: string) => useQuery<Dynasty>(["dynasty", id], getDynastyById, {
  enabled: true
});