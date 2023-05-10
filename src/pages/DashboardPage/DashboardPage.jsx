import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import Media from 'react-media';
import { Header } from '../../components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import { Currency } from '../../components/Currency/Currency';
import { AddButton } from '../../components/utils/AddButton/AddButton'; // to usuń AddButton będzie w Diagram.jsx
import { Navigation } from '../../components/Navigation/Navigation';

import scss from './DashboardPage.module.scss';
import { Suspense } from 'react';

const DashboardPage = () => {
  return (
    <div className={scss.pageHomeContainer}>
      <Helmet>
        <title>MainWalletPage</title>
      </Helmet>
      <Header />
      <Media
        queries={{
          mob: '(max-width: 767px)',
          tab: '(min-width: 768px) and (max-width: 1280px)',
          desk: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <>
            {matches.mob && (
              <div className={scss.primary}>
                <div>
                  <Navigation />

                  <Balance />
                </div>
                <Suspense>
                  <Outlet />
                </Suspense>
              </div>
            )}
            {matches.tab && (
              <div className={scss.primary}>
                <div className={scss.secondary}>
                  <div>
                    <Navigation />

                    <Balance />
                  </div>
                  <Currency />
                </div>
                <Suspense>
                  <Outlet />
                </Suspense>
              </div>
            )}
            {matches.desk && (
              <div className={scss.primary}>
                <div>
                  <Navigation />

                  <Balance />

                  <Currency />
                </div>
                <Suspense>
                  <Outlet />
                </Suspense>
              </div>
            )}
          </>
        )}
      </Media>

      <AddButton />
    </div>
  );
};

export default DashboardPage;
