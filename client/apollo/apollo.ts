import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import CONFIG from '../config';

const link = createUploadLink({ uri: CONFIG.API_SERVER });

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
