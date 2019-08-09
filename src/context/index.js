import React from 'react';
import { AuthProvider } from './auth';
import { DataProvider } from './data';
import { QueryParamsProvider } from './query-params';

export default ({children}) => (
  <AuthProvider>
    <DataProvider>
      <QueryParamsProvider>
        {children}
      </QueryParamsProvider>
    </DataProvider>
  </AuthProvider>
);