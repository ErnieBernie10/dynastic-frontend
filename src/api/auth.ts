import { LoginFormModel } from "../models/Login";
import axiosApi from "../axios-config";
import { User } from "../models/api/User";

export const login = async (body: LoginFormModel): Promise<User> => {
  return axiosApi
    .post<User>("/auth/login", body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => error);
};
