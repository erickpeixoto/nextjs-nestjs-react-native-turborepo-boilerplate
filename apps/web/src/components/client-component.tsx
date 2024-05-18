"use client";

import { use, useEffect, useState } from "react";
import { apiClientQuery, apiClient, User } from "ts-contract";

export function ClientComponent() {
  const [data, setData] = useState<User[]>([]);
  const {
    isLoading,
    isError,
    data: dataReactQUery,
  } = apiClientQuery.users.getAll.useQuery(["users"]);

  useEffect(() => {
    apiClient.users.getAll().then((res) => {
      setData(res.body);
    });
  }, []);

  if (isError) return <div>Error</div>;

  return (
    <div className="flex flex-col gap-3 p-5">
      <div className="font-bold">React Query Render</div>
      <div className="bg-slate-600 text-slate-300 p-5 rounded ">
        {isLoading && <div>Loading...</div>}
        {JSON.stringify(dataReactQUery?.body, null, 2)}
      </div>

      <div className="font-bold">Fetch Render</div>
      <div className="bg-slate-600 text-slate-300 p-5 rounded ">
        {data.length === 0 && <div>Loading...</div>}
        {data.length > 0 && JSON.stringify(data, null, 2)}
      </div>
    </div>
  );
}
