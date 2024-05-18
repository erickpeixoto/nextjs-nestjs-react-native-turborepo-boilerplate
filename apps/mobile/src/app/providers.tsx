import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export function Provider({ children }: React.PropsWithChildren) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}