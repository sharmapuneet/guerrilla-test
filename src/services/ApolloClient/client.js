import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm",
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: "Bearer TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk",
    }
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
