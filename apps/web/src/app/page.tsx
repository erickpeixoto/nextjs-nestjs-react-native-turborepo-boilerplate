"use client";
import { client } from "ts-contract";


export default function Page() {
  const { data } = client.users.getAll.useQuery(["users"]);
  return (
    <div className="container">
      <h1 className="text-red-500 p-5">Lets see</h1>
      <ul>
        {JSON.stringify({ data })}
        {/* {data.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))} */}
      </ul>
    </div>
  );
}
