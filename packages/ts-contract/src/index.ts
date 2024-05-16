import { initContract } from "@ts-rest/core";
import { initQueryClient } from "@ts-rest/react-query";
import { initClient } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
  email: z.string(),
});

export type User = z.infer<typeof userSchema>;

export const contract = c.router(
  {
    users: {
      getAll: {
        method: "GET",
        path: "/users",
        responses: {
          200: z.array(userSchema),
        },
      },
      create: {
        method: "POST",
        path: "/users",
        body: z.object({
          name: z.string(),
          age: z.number(),
          email: z.string(),
        }),
        responses: {
          201: userSchema,
        },
      },
    },
  },
  {
    pathPrefix: "/api",
    strictStatusCodes: true,
  }
);

export const apiClient = initClient(contract, {
  baseUrl: "http://localhost:3000",
  baseHeaders: {},
});

export const apiClientQuery = initQueryClient(contract, {
  baseUrl: "http://localhost:3000",
  baseHeaders: {},
});
