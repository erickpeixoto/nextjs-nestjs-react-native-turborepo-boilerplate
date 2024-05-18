import { dehydrate } from "@tanstack/query-core";
import { ClientComponent } from "@/components/client-component";
import { apiClientQuery } from "ts-contract";
import { getQueryClient } from "@/utils/react-query/get-query-client";
import { Hydrate } from "@/utils/react-query/hydrate.client";

export default async function Page() {
  const client = getQueryClient();
  await apiClientQuery.users.getAll.prefetchQuery(client, ["users"]);
  const dehydratedState = dehydrate(client);

  return (
    <main>
      <Hydrate state={dehydratedState}>
        <ClientComponent />
      </Hydrate>
    </main>
  );
}
