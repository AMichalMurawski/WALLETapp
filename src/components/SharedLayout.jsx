import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from './utils/Spinner/Spinner';

export const SharedLayout = () => {
  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
