import React from 'react';
import { values } from 'defaultValues';

const HomePage = React.lazy(() => import('pages/home/home.page'));

export const routes: { path: string, key: string, element: any }[] = [
  { 
    path: values.ROUTES.CRYPTOCURRENCY_MARKETS,
    key: 'Market',
    element: <HomePage />,
  },
];
