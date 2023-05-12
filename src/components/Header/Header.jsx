import Media from 'react-media';

import { lazy, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks';

import IconSvg from '../utils/IconsSvg/IconSvg';
import scss from './Header.module.scss';

const ModalLogout = lazy(() =>
  import('../../components/Modal/ModalLogout/ModalLogout')
);

export const Header = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false); //
  };

  return (
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
            <div className={scss.containerHeader}>
              <div className={scss.container + ' ' + scss.header}>
                <NavLink className={scss.button} to="homeMob">
                  <div className={scss.main}>
                    <div className={scss.logo}>
                      <IconSvg icon="logo" />
                    </div>
                    <div className={scss.wallet}>Wallet</div>
                  </div>
                </NavLink>
                <div className={scss.main}>
                  <button className={scss.button}>
                    <h1 className={scss.logout}>{user.firstName}</h1>
                  </button>
                  <p className={scss.dot}></p>
                  <button type="button" className={scss.button}>
                    <div type="button" className={scss.exit}>
                      <IconSvg icon="exit" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
          {matches.tab && (
            <div className={scss.containerHeader}>
              <div className={scss.container + ' ' + scss.header}>
                <NavLink className={scss.button} to="homeTab">
                  <div className={scss.main}>
                    <div className={scss.logo}>
                      <IconSvg icon="logo" />
                    </div>
                    <div className={scss.wallet}>Wallet</div>
                  </div>
                </NavLink>
                <div className={scss.main}>
                  <button className={scss.button}>
                    <h1 className={scss.logout}>{user.firstName}</h1>
                  </button>
                  <p className={scss.dot}></p>
                  <button type="button" className={scss.button}>
                    <div type="button" className={scss.exit}>
                      <IconSvg icon="exit" />
                    </div>
                    <h1 className={scss.logout}>Exit</h1>
                  </button>
                </div>
              </div>
            </div>
          )}
          {matches.desk && (
            <div className={scss.containerHeader}>
              <div className={scss.container + ' ' + scss.header}>
                <NavLink className={scss.button} to="homeDesk">
                  <div className={scss.main}>
                    <div className={scss.logo}>
                      <IconSvg icon="logo" />
                    </div>
                    <div className={scss.wallet}>Wallet</div>
                  </div>
                </NavLink>
                <div className={scss.main}>
                  <button className={scss.button}>
                    <h1 className={scss.logout}>{user.firstName}</h1>
                  </button>
                  <p className={scss.dot}></p>
                  <button
                    type="button"
                    className={scss.button}
                    onClick={handleLogoutClick}
                  >
                    {' '}
                    <div type="button" className={scss.exit}>
                      <IconSvg icon="exit" />
                    </div>
                    <h1 className={scss.logout}>Exit</h1>
                  </button>
                </div>
              </div>
            </div>
          )}
          {showModal && <ModalLogout onClose={closeModal} />}
        </>
      )}
    </Media>
  );
};
