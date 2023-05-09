import { useAuth } from './hooks/useAuth';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RestrictedRoute, ProtectedRoute } from './routes';
import { lazy, useState } from 'react';
import { SharedLayout } from './components/SharedLayout';
import { useDispatch } from 'react-redux';
import { currentUser } from './redux/auth/authThunk';

const LoginPage = lazy(() => import('./pages/loginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const HomeTab = lazy(() => import('./components/Home/Home'));
const DiagramTab = lazy(() => import('./components/DiagramTab/DiagramTab'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useState(() => {
    window.addEventListener('load', e => dispatch(currentUser()));
  });

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="/" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute redirectTo="/login" component={<DashboardPage />} />
          }
        >
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeTab />} />
          <Route path="/statistics" element={<DiagramTab />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/notFound" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
