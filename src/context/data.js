import React, { useContext, useMemo } from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
// import memCache from 'graphql-hooks-memcache'
import data from '../data.json';

const client = new GraphQLClient({
  url: process.env.GRAPHQL_URL,
  // cache: memCache()
});

const EXAMPLE_QUERY = `query ExampleQuery($limit: Int) {
  users(limit: $limit) {
    id
    name
  }
}`

const DataProvider = props => (
  <ClientContext.Provider value={client} {...props} />
);

function useQuery(query, args) {
  const context = useContext(ClientContext);
  if (!context) throw new Error('useQuery must be used within a DataProvider');
  // TODO: consider using useMemo with dependencies [args.student, args.startDate, args.endDate]
  // or integrate graph graphql-hooks-memcache?
  // https://github.com/nearform/graphql-hooks/tree/master/packages/graphql-hooks-memcache
  // return context;
  return { data };
}

export { DataProvider, useQuery }