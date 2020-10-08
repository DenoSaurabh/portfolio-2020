import fetch from 'isomorphic-unfetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const createHttpLink = (headers) => {
  const httpLink = new HttpLink({
    uri:
      'https://api-eu-central-1.graphcms.com/v2/ckdb531gn4tu501z8cx2788ol/master',
    headers, // auth token is fetched on the server side
    fetch,
  });
  return httpLink;
};

export default function createApolloClient(initialState, headers) {
  const ssrMode = typeof window === 'undefined';
  let link;
  if (ssrMode) {
    link = createHttpLink(headers); // executed on server
  } else {
    link = createWSLink(); // executed on client
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
