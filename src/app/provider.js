'use client';
 
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
 
export const Provider = ({ children }) => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });
 
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
 