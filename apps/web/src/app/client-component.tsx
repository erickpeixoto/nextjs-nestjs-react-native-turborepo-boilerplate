'use client';

import { apiClientQuery } from "ts-contract";


export function ClientComponent() {
  const { isLoading, isError, data } = apiClientQuery.users.getAll.useQuery(
    ['TEST'] );
    console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <ul role="list" className="divide-y divide-gray-100 w-80">
        <li className="flex gap-x-4 py-5">
          <div className="flex-auto">
            <div className="flex items-baseline justify-between gap-x-4">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Name
              </p>
            </div>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
              {data.body[0]?.name}
            </p>
          </div>
        </li>
        <li className="flex gap-x-4 py-5">
          <div className="flex-auto">
            <div className="flex items-baseline justify-between gap-x-4">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Email
              </p>
            </div>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
              {data.body[0]?.email}
            </p>
          </div>
        </li>
        <li className="flex gap-x-4 py-5">
          <div className="flex-auto">
            <div className="flex items-baseline justify-between gap-x-4">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Age
              </p>
            </div>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
              {data.body[0]?.age}
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
}
