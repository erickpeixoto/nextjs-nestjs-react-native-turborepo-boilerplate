import { initQueryClient } from "@ts-rest/react-query";
import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const userSchema = z.object({
  id: z.string(),
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
    },
  },
  {
    pathPrefix: "/api",
    strictStatusCode: true,
  }
);

export const client = initQueryClient(contract, {
  baseUrl: "http://localhost:3000",
  baseHeaders: {},
});