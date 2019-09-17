import React from 'react';

export interface AppProps {
  value?: string | number;
}

export const App: React.FunctionComponent<AppProps> = ({ value = 'empty' }) => {
  return (
    <div>This is an App. Value: {value}</div>
  );
};
