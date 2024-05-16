import { initQueryClient } from '@ts-rest/react-query';
import { contract } from 'ts-contract';

export const edgeApi = initQueryClient(contract, {
  baseUrl: 'http://localhost:3000',
  baseHeaders: {},
});
