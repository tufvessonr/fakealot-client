import { GraphQLClient } from 'graphql-request';
import CONFIG from '../../config';
import { getSdk, Sdk } from '../generated-sdk';

let client: GraphQLClient;
let sdk: Sdk;
export const graphQLSdk = () => {
  if (sdk) {
    return sdk;
  }

  if (!client) {
    client = new GraphQLClient(CONFIG.API_SERVER);
  }
  sdk = getSdk(client);
  return sdk;
};
