"use client";
import { client } from "ts-contract";

export default function Page() {
  const { data } = client.users.getAll.useQuery(["users"]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {JSON.stringify({ data })}
        {/* {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))} */}
      </ul>
    </div>
  );
}
