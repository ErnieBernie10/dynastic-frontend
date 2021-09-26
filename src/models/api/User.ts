export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
}

export interface LoggedUser {
  user: User;
  tokens: {
    access: {
      token: string;
      expires: string;
    };
    refresh: {
      token: string;
      expires: string;
    };
  };
}
