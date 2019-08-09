import React from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import data from '../data.json';

const client = new GraphQLClient({
  url: process.env.GRAPHQL_URL
});

const DataProvider = props => (
  <ClientContext.Provider value={client} {...props} />
);

function useQuery(query) {
  // const context = useContext(ClientContext);
  // if (!context) throw new Error('useQuery must be used within a DataProvider');
  // return context;
  return { data };
}

export { DataProvider, useQuery }