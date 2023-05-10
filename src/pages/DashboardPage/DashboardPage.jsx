import { Helmet } from 'react-helmet';
import Media from 'react-media';
import { Route, Routes } from 'react-router-dom';
import Card from '../../components/utils/Card/Card';
import Home from '../../components/Home/Home';
import { Header } from '../../components/Header/Header';
import { Balance } from '../../components/Balance/Balance';
import { Currency } from '../../components/Currency/Currency';
import { Navigation } from '../../components/Navigation/Navigation';

import scss from './DashboardPage.module.scss';

import DiagramTab from '../../components/DiagramTab/DiagramTab';

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
              <>
              <div className={scss.primary}>
                <div>
                  <Navigation />
                </div>
            
                <Routes>              
          
          <Route index element={<Card/>} />
          <Route path="homeMob" element={<Card />} />
          <Route path="chartMob" element={<DiagramTab/>} />
          <Route path="currencyMob" element={<Currency/>} />
          </Routes>
              </div>
              </>
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
              <Route index element={<Home/>} />
          <Route path="homeTab" element={<Home />} />
          <Route path="chartTab" element={<DiagramTab/>} />
          <Route path="currencyTab" element={<Currency/>} />
          </Routes>

              </div>
              </>
            )}
            {matches.desk && (
              <div className={scss.primary}>
                <div>
                  <Navigation />

                  <Balance />

                  <Currency />
                </div>
                <Routes>
              <Route index element={<Home/>} />
          <Route path="homeDesk" element={<Home />} />
          <Route path="chartDesk" element={<DiagramTab/>} />
          <Route path="currencyDesk" element={<Currency/>} />
          </Routes>

              </div>
            )}
          </>
        )}
      </Media>

      {/* <AddButton /> */}
    </div>
  );
};

export default DashboardPage;
