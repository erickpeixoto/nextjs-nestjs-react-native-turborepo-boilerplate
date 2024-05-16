import { dehydrate } from '@tanstack/query-core';
import { getQueryClient } from './react-query-utils/get-query-client';
import { Hydrate } from './react-query-utils/hydrate.client';
import { ClientComponent } from './client-component';
import { apiClientQuery } from 'ts-contract';


export default async function Test() {
  const client = getQueryClient();
  await apiClientQuery.users.getAll.prefetchQuery(
    client,
    ['TEST']
   
  );
  const dehydratedState = dehydrate(client);

  return (
    <main>
      <Hydrate state={dehydratedState}>
        <ClientComponent />
      </Hydrate>
    </main>
  );
}