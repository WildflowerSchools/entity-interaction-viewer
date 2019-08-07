import React from 'react';
import { AuthProvider } from './auth';
import { QueryParamsProvider } from './query-params';

export default ({children}) => (
  <AuthProvider>
    <QueryParamsProvider>
      {children}
    </QueryParamsProvider>
  </AuthProvider>
);