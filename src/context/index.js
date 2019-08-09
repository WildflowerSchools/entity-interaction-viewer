import React from 'react';
// import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { AuthProvider } from './auth';
import { QueryParamsProvider } from './query-params';

// const client = new GraphQLClient({
//   url: process.env.GRAPHQL_URL
// });
// <ClientContext.Provider value={client}>
// </ClientContext.Provider>

export default ({children}) => (
  <AuthProvider>
    <QueryParamsProvider>
      {children}
    </QueryParamsProvider>
  </AuthProvider>
);