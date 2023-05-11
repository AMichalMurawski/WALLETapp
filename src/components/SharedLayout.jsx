import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner } from './utils/Spinner/Spinner';
import scss from './SharedLayout.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <div className={scss.refresh}>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  );
};
