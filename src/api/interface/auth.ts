import { GetTokenSilentlyOptions } from "@auth0/auth0-react";

export interface GetAccessTokenSilently {
  (options?: GetTokenSilentlyOptions | undefined): Promise<string>;
}
