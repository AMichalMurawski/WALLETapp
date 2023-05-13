import { Helmet } from 'react-helmet';
import Media from 'react-media';
import { Navigate, Route, Routes } from 'react-router-dom';
import Card from '../../components/utils/Card/Card';
import Home from '../../components/Home/Home';
import { Header } from '../../components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import { Currency } from '../../components/Currency/Currency';
import { Navigation } from '../../components/Navigation/Navigation';
import { lazy } from 'react';
import scss from './DashboardPage.module.scss';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import { useModal } from '../../hooks';
import ModalEditTransaction from '../../components/Modal/ModalAddTransaction/ModalEditTransaction';

const ModalAddTransaction = lazy(() =>
  import('../../components/Modal/ModalAddTransaction/ModalAddTransaction')
);

const DashboardPage = () => {
  const { showAddTransaction, showEditTransaction } = useModal();

  return (
    <div className={scss.pageHomeContainer}>
      <Helmet>
        <title>MainWalletPage</title>
      </Helmet>
      <Header />
      <Media
        queries={{
          mob: '(max-width: 767.9px)',
          tab: '(min-width: 768px) and (max-width: 1279.9px)',
          desk: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <>
            {matches.desk && (
              <div className={scss.primary}>
                <div>
                  <Navigation />

                  <Balance />

                  <Currency />
                </div>
                <Routes>
                  <Route index element={<Navigate to="home" />} />
                  <Route path="home" element={<Home />} />
                  <Route path="diagram" element={<DiagramTab />} />
                  <Route path="*" element={<Navigate to="home" />} />
                </Routes>
              </div>
            )}
            {matches.tab && (
              <>
                <div className={scss.primary}>
                  <div className={scss.secondary}>
                    <div>
                      <Navigation />

                      <Balance />
                    </div>
                    <Currency />
                  </div>
                  <Routes>
                    <Route index element={<Navigate to="home" />} />
                    <Route path="home" element={<Home />} />
                    <Route path="diagram" element={<DiagramTab />} />
                    <Route path="*" element={<Navigate to="home" />} />
                  </Routes>
                </div>
              </>
            )}
            {matches.mob && (
              <>
                <div className={scss.primary}>
                  <div>
                    <Navigation />
                  </div>

                  <Routes>
                    <Route index element={<Navigate to="home" />} />
                    <Route path="home" element={<Card />} />
                    <Route path="diagram" element={<DiagramTab />} />
                    <Route path="currency" element={<Currency />} />
                  </Routes>
                </div>
              </>
            )}
          </>
        )}
      </Media>

      {showAddTransaction ? <ModalAddTransaction /> : <></>}
      {showEditTransaction ? <ModalEditTransaction /> : <></>}
    </div>
  );
};

export default DashboardPage;
