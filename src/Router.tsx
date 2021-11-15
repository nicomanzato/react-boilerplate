import Spinner from 'components/spinner/spinner';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './routes';

export const Router = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Spinner />}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;