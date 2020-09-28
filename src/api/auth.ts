import { LoginFormModel } from "../models/Login";
import axiosApi from "../axios-config";
import { User } from "../models/api/User";

const auth = {
  async login(body: LoginFormModel): Promise<User> {
    return axiosApi.post<User>('/api/auth/login', body)
    .then(response => response.data)
    .catch(error => error);
  }
}

export default auth;