
import { initQueryClient } from "@ts-rest/react-query";

import { contract } from "ts-contract";
import { initClient } from "@ts-rest/core";




const client = initClient(contract, {
  baseUrl: 'http://localhost:3000',
  baseHeaders: {},
});
export default client;

export const clientQuery = initQueryClient(contract, {
  baseUrl: "http://localhost:3000",
  baseHeaders: {},
});
