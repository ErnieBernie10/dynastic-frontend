import config from "./config.json";

export const baseUrl = config.fetchUrl[process.env.NODE_ENV];
